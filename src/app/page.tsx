import type { PostMetadata } from '@/types/post'

import PostPreview from '@/components/PostPreview'

import { getPostsMetadata } from '@/lib/post'

export default function HomePage() {
  const postsMetadata: PostMetadata[] = getPostsMetadata()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {postsMetadata.map((postMetadata) => (
        <PostPreview key={postMetadata.slug} {...postMetadata} />
      ))}
    </div>
  )
}
