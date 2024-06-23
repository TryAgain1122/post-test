import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

const Blogspage = async () => {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            author: true
        }
    })
  return (
    <div className='max-w-4xl mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-4'>Post</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {posts.map((post) => (
                <Link 
                    key={post.id}
                    href={`/blogs/${post.id}`}
                    className='bg-white p-4 rounded-md shadow-md'
                >
                    <h2 className='text-xl font-bold'>{post.title}</h2>
                    <p>Posted by: {post.author?.name}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Blogspage