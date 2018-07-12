export interface Post {
    id?:string;
    caption?:string;
    title?: string;
    summary?:string;
    content?: string;
    createDate?: number;
    author?: string;
    likes?: number;
  }