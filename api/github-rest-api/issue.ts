import { Octokit } from 'octokit'

const gitAccessToken = process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN
const owner = process.env.NEXT_PUBLIC_OWNER ?? ''
const repo = 'yeseul-blog'

const octokit = new Octokit({
  auth: gitAccessToken,
})
export const getIssuesByIssueNumber = async (issue_number: number) => {
  const { data } = await octokit.rest.issues.get({
    owner,
    repo,
    issue_number,
  })
  return data
}

export const getIssueList = async () => {
  const { data } = await octokit.rest.issues.listForRepo({
    owner,
    repo,
  })

  return data
}

export const getCommentListByIssueNumber = async (issue_number: number) => {
  const { data } = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number,
  })

  const commentList = data.map(({ body, created_at }) => {
    return { body, created_at }
  })
  return commentList
}

export const createIssue = async (title: string, body: string) => {
  const { data } = await octokit.rest.issues.create({
    owner,
    repo,
    title,
    body,
  })
  return data
}

export const createIssueComment = async (
  issue_number: number,
  body: string,
) => {
  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number,
    body,
  })
}
