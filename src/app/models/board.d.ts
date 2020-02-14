interface Board {
  id?: string;
  name: string;
  posts: Post[]
  created: Date;
  expiry?: Date;
}

interface Post {
  title?: string;
  contents: string;
  uid?: string;
  author?: string;
  boardId: string;
}
