import { Octokit } from 'octokit'

const gitAccessToken = process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN
const owner = process.env.NEXT_PUBLIC_OWNER ?? ''
const repo = 'yeseul-blog'

const octokit = new Octokit({
  auth: gitAccessToken,
})
export const getIssuesByIssueNumber = async (issue_number: number) => {
  try {
    const { data } = await octokit.rest.issues.get({
      owner,
      repo,
      issue_number,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getIssueList = async () => {
  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
    })

    return data
  } catch (err) {
    console.log(err)
  }
}

export const getCommentListByIssueNumber = async (issue_number: number) => {
  try {
    const { data } = await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number,
    })

    const commentList = data.filter(({ body }) => body !== undefined) as {
      body: string
      created_at: string
    }[]

    return commentList
  } catch (err) {
    console.log(err)
  }
}

export const createIssue = async (title: string, body: string) => {
  try {
    const { data } = await octokit.rest.issues.create({
      owner,
      repo,
      title,
      body,
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const createIssueComment = async (
  issue_number: number,
  body: string,
) => {
  try {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number,
      body,
    })
  } catch (err) {
    console.log(err)
  }
}
