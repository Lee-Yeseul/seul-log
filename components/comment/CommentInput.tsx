'use client'
import { createIssueComment } from '@/api/github-rest-api/issue'
import { FormEvent, useContext, useState } from 'react'
import { CommentContext } from '.'

export default function CommentInput() {
  const { issueNumber } = useContext(CommentContext)
  const [comment, setComment] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      if (!comment) return

      await createIssueComment(issueNumber, comment)
      setComment('')
    } catch (err) {
      console.log(err)
    }
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
