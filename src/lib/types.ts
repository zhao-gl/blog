// 内容模型类型定义

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    author?: {
      fields: {
        name: string;
        bio?: string;
        avatar?: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
    tags?: string[];
    publishDate?: string;
  };
}

export interface Page {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
}

export interface Asset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
}