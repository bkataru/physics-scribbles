import fs from 'fs'
import matter from 'gray-matter'

import type { Post, PostMetadata } from '@/types/post'
import type { GrayMatterFile } from 'gray-matter'

export const getPostsMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files: string[] = fs.readdirSync(folder)

  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const postsMetadata: PostMetadata[] = markdownPosts.map(
    (filename: string) => {
      const fileContents: string = fs.readFileSync(
        `${folder}${filename}`,
        'utf8'
      )
      const matterResult: GrayMatterFile<string> = matter(fileContents)

      return {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        slug: filename.replace('.md', '')
      } satisfies PostMetadata
    }
  )

  return postsMetadata
}

export const getPost = (slug: string): Post => {
  const folder = 'posts/'
  const file = `${folder}${slug}.md`

  const content: string = fs.readFileSync(file, 'utf8')
  const matterResult: GrayMatterFile<string> = matter(content)

  return {
    slug,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    date: matterResult.data.date,
    content: matterResult.content
  } satisfies Post
}
