import { Octokit } from 'octokit'

const gitAccessToken = process.env.NEXT_PUBLIC_GIT_ACCESS_TOKEN
const owner = process.env.NEXT_PUBLIC_OWNER ?? ''
const repo = process.env.NEXT_PUBLIC_REPO_NAME ?? ''
const revalidateInterval = process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL ?? 3600

const octokit = new Octokit({
  auth: gitAccessToken,
})

export const getRawPosts = async (path: string = 'blog') => {
  try {
    const { data } = await octokit.rest.repos.getContent({
      mediaType: {
        format: 'raw',
      },
      owner,
      repo,
      path,
      next: {
        revalidate: revalidateInterval,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getPostBlobData = async (sha: string) => {
  try {
    const { data } = await octokit.rest.git.getBlob({
      owner,
      repo,
      file_sha: sha,
      next: {
        revalidate: revalidateInterval,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
