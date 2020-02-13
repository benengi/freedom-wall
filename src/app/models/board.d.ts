interface Board {
  id: string;
  name: string;
  boardPosts: {
    title: string;
    contents: string;
    uid?: string;
    authorName?: string;
  };
  created: Date;
  expiry: Date;
}
