import Comments from '@/components/Comments'
import FormComment from '@/components/Form-comment'
import prisma from '@/lib/db'


interface BlogPageDetailsProps {
  params: {
    id: string
  }
}

const BlogPageDetails: React.FC<BlogPageDetailsProps> = async ({ params }) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true
    }
  })
  return (
    <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-3xl font-bold '>Title</h1>
        <p>Posted by: {post?.author?.name}</p>
        <div className='mt-4'>{post?.content}</div>

        <Comments postId={params.id}/>
        <FormComment postId={params.id}/>
    </div>
  )
}

export default BlogPageDetails