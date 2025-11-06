export type Social = {
  github?: string
  juejin?: string
  wx?: string
  zhihu?: string
  email?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/zhao-gl',
  juejin: 'https://juejin.cn/user/2630450399415752',
  wx: 'https://u.wechat.com/MKSaZgBS0UQsKn3L2Sgd98Q?s=4', // todo 微信二维码
  zhihu: 'https://www.zhihu.com/people/rru-feng',
  email: 'zhao-gl@qq.com',
}

const socialSet: Record<keyof Social, SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  juejin: {
    href: social.juejin,
    title: '掘金',
    icon: 'simple-icons:juejin',
    color: '#1E81FF',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
}

export default socialSet
