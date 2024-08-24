import type { PostMetadata } from '@/types/post'

import Link from 'next/link'

const PostPreview: React.FC<PostMetadata> = ({
  slug,
  title,
  subtitle,
  date
}): React.JSX.Element => {
  return (
    <div className="border border-violet-600 p-4 rounded-md shadow-md bg-white">
      <Link href={`/${slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm text-slate-400">{date}</p>
      <p className="text-slate-700">{subtitle}</p>
    </div>
  )
}

export default PostPreview

const variable = () => {
  return <div>Hello There</div>
}
