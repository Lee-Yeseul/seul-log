import { Octokit } from 'octokit'

const gitAccessToken = process.env.GIT_ACCESS_TOKEN
const owner = process.env.OWNER ?? ''
const repo = process.env.REPO_NAME ?? ''

const octokit = new Octokit({
  auth: gitAccessToken,
})

export const getRawPosts = async (path: string = 'blog') => {
  const { data } = await octokit.rest.repos.getContent({
    mediaType: {
      format: 'raw',
    },
    owner,
    repo,
    path,
    next: {
      revalidate: 3600,
    },
  })
  return data
}

export const getPostBlobData = async (sha: string) => {
  const { data } = await octokit.rest.git.getBlob({
    owner,
    repo,
    file_sha: sha,
    next: {
      revalidate: 3600,
    },
  })
  return data
}
