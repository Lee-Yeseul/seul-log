'use client'

import { createContext, useEffect, useMemo, useState } from 'react'
import {
  createIssue,
  getCommentListByIssueNumber,
  getIssueList,
} from '@/api/github-rest-api/issue'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

interface CommentContextValue {
  issueNumber: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentList: any[]
}

interface CommentProps {
  path: string
}

export const CommentContext = createContext<CommentContextValue>({
  issueNumber: -1,
  commentList: [],
})
export default function Comment({ path }: CommentProps) {
  const [issueNumber, setIssueNumber] = useState<number>(-1)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [commentList, setCommentList] = useState<any[]>([])

  const getCommentList = async (issueNumber: number) => {
    if (issueNumber < 0) return
    const curIssueCommentList = await getCommentListByIssueNumber(issueNumber)

    setCommentList(curIssueCommentList)
  }

  const init = async () => {
    const issueList = await getIssueList()
    const curIssue = issueList.find((value) => {
      return value.title === path
    })

    if (!curIssue) {
      const { number } = await createIssue(path, path)
      setIssueNumber(number)
      return
    }
    setIssueNumber(curIssue.number)
  }

  const value = useMemo(
    () => ({ issueNumber, commentList }),
    [issueNumber, commentList],
  )

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    getCommentList(issueNumber)
  }, [issueNumber])

  return (
    <CommentContext.Provider value={value}>
      <section className="sm:w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <div className="text-xl font-bold">댓글 3개</div>
        <CommentInput />
        <CommentList />
      </section>
    </CommentContext.Provider>
  )
}
