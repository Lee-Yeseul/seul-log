'use client'

import { useContext } from 'react'
import { CommentContext } from '.'
import { calculateTimeAgo } from '@/utils'

export default function CommentList() {
  const { commentList } = useContext(CommentContext)

  return (
    <div className="flex flex-col gap-2">
      {commentList.map((value, index) => (
        <div
          key={index}
          className="max-h-40 min-h-16 w-full overflow-auto rounded-md border-1 border-solid border-gray-400 p-4 text-base"
        >
          <div className="flex items-center gap-5">
            <div className="font-bold">익명</div>
            <div className="text-sm">{calculateTimeAgo(value.created_at)}</div>
          </div>
          <div className="mt-1">{value.body}</div>
        </div>
      ))}
    </div>
  )
}
