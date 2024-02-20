'use client'
import { FormEvent, useState } from 'react'

export default function CommentInput() {
  const [comment, setComment] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!comment) return
    console.log(comment)
    setComment('')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="my-5 flex h-24 justify-between rounded-md border-1 border-solid border-gray-300 p-4 shadow-md">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-11/12 resize-none hover:border-none focus:outline-none"
          placeholder="댓글을 입력하세요."
        />
        <button type="submit">➤</button>
      </div>
    </form>
  )
}
