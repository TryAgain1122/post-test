import prisma from "@/lib/db";
import { format } from "date-fns";

interface CommentProps {
  postId: string;
}

const Comments: React.FC<CommentProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId
    }, 
    include: {
      author: true,
    }
  })
  return (
    <div className="mt-8">
        <h2 className="text-2xl font-bold">Comments</h2>
        <ul className="mb-4">
           {comments.map((comment) => (
            <li key={comment.id} className="mb-4 bg-slate-300 p-2">
              <div className="flex items-center mb-2">
                <div className="text-blue-500 font-bold mr-2">
                  {comment.author?.name}
                </div>
                <div className="text-gray-500">
                  {format(comment.createdAt, 'MMMM d, yyyy')}
                </div>
              </div>
              <p>{comment.text}</p>
            </li>
           ))}
        </ul>
    </div>
  )
}

export default Comments