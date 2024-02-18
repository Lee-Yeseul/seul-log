import { Octokit } from 'octokit'

const gitAccessToken = process.env.GIT_ACCESS_TOKEN
const owner = process.env.OWNER ?? ''
const repo = process.env.REPO_NAME ?? ''
// const revalidateInterval = process.env.REVALIDATE_INTERVAL ?? 3600

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
      'Cache-Control': 'no-store no-cache must-revalidate',
      // next: {
      //   revalidate: revalidateInterval,
      // },
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
      'Cache-Control': 'no-store no-cache must-revalidate',
      // next: {
      //   revalidate: revalidateInterval,
      // },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}
