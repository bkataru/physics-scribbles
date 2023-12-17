import Markdown from 'markdown-to-jsx'

import { getPost, getPostsMetadata } from '@/lib/post'

import type { Post, PostMetadata } from '@/types/post'

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const posts: PostMetadata[] = getPostsMetadata()

  return posts.map(({ slug }) => ({ slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { title, subtitle, date, content }: Post = getPost(slug)

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-violet-600">{title}</h1>
        <p className="text-slate-400 mt-2">{date}</p>
      </div>
      <article className="prose lg:prose-xl">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  )
}
