export interface PostMetadata {
  title: string
  subtitle: string
  date: string
  slug: string
}

export interface Post extends PostMetadata {
  content: string
}
