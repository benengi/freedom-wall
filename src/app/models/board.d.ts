interface Board {
  id?: string;
  name: string;
  boardPosts: Post[]
  created: Date;
  expiry?: Date;
}

interface Post {
  title?: string;
  contents: string;
  uid?: string;
  author?: string;
}
