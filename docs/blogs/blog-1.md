# 深入解析Vue2响应式原理

## 一、核心机制剖析

### 1.1 数据劫持的基石：Object.defineProperty

```javascript
function defineReactive(obj, key) {
  const dep = new Dep()
  let val = obj[key]
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      if (Dep.target) {         // 当前活动的Watcher实例
        dep.depend()           // 建立依赖关系
        if (childOb) {        // 处理嵌套对象
          childOb.dep.depend()
        }
      }
      return val
    },
    set: function reactiveSetter(newVal) {
      if (val === newVal) return
      val = newVal
      dep.notify()            // 通知所有订阅者
    }
  })
}
```
深度分析：
- 通过闭包维护私有变量val，避免属性污染
- 使用Dep类管理依赖关系，实现精确的依赖追踪
- 嵌套对象通过递归劫持实现深度响应
### 1.2 依赖收集的拓扑结构
```text
Component Render Watcher
    ↗
  Dep
    ↖
Data Property
```
动态收集过程：
- 组件初始化时创建Watcher
- 触发getter前设置Dep.target指向当前Watcher
- 属性访问触发依赖收集
- 建立双向引用：Watcher ⇄ Dep
## 二、数组响应式的特殊处理
### 2.1 方法拦截实现
```javascript
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push', 'pop', 'shift', 'unshift',
  'splice', 'sort', 'reverse'
]

methodsToPatch.forEach(function(method) {
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch(method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()  // 触发更新
    return result
  })
})
```
设计考量：
- 保持原生数组方法特性的同时添加通知机制
- 对新增元素进行响应式化处理
- 通过__ob__属性持有Observer实例
### 2.2 性能优化策略
- 临时关闭响应式标志位（vm._isBeingDestroyed）
- 大数组的分批处理
- 避免在大型数组上使用索引直接赋值
## 三、依赖管理系统的实现
### 3.1 Dep类的核心实现
```javascript
class Dep {
  static target = null
  
  constructor() {
    this.subs = []
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    const subs = this.subs.slice()
    for (let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }
}
```
### 3.2 Watcher的运作机制
生命周期：
- 初始化：this.getter = parsePath(expOrFn)
- 收集依赖：this.get()
- 更新队列：queueWatcher(this)
- 异步执行：nextTick(flushSchedulerQueue)
多种Watcher类型：
- Render Watcher（渲染观察者）
- Computed Watcher（计算属性）
- User Watcher（用户自定义watch）
## 四、异步更新队列的优化策略
```javascript
const queue = []
let waiting = false

function queueWatcher(watcher) {
  if (!queue.includes(watcher)) {
    queue.push(watcher)
  }
  if (!waiting) {
    nextTick(flushSchedulerQueue)
    waiting = true
  }
}

function flushSchedulerQueue() {
  queue.sort((a, b) => a.id - b.id)
  for (let i = 0; i < queue.length; i++) {
    const watcher = queue[i]
    watcher.run()
  }
  resetSchedulerState()
}
```
优化优势：
- 批量处理避免重复计算
- 执行顺序保证（父组件优先）
- 避免不必要的中间状态渲染
## 五、响应式数据性能优化
1. 扁平化数据结构：减少嵌套层级
2. 冻结静态数据：`Object.freeze()`
3. 合理使用计算属性：基于依赖缓存
4. 避免巨型响应式对象：分块处理
5. 适时使用不可变数据结构
