export const formatDateToLongString = (dateString: string) => {
  const date = new Date(dateString)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const calculateTimeAgo = (dateString: string) => {
  const millisecondsAgo = new Date().getTime() - new Date(dateString).getTime()
  const secondsAgo = millisecondsAgo / 1000

  switch (true) {
    case secondsAgo < 60:
      return `방금 전`
    case secondsAgo < 60 * 60:
      return `${Math.floor(secondsAgo / 60)}분 전`
    case secondsAgo < 60 * 60 * 24:
      return `${Math.floor(secondsAgo / 60 / 60)}시간 전`
    case secondsAgo < 60 * 60 * 24 * 7:
      return `${Math.floor(secondsAgo / 60 / 60 / 24)}일 전`
    case secondsAgo < 60 * 60 * 24 * 7 * 4:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 7)}주 전`
    case secondsAgo < 60 * 60 * 24 * 30:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 30)}개월 전`
    case secondsAgo < 60 * 60 * 24 * 365:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 365)}년 전`
    default:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 365)}년 전`
  }
}

export const addPrefixToTarget = (
  url: string,
  prefix: string,
  targetString: string,
) => {
  const regex = new RegExp(`\\${targetString}$`)
  const modifiedString = url.replace(regex, `${prefix}${targetString}`)
  return modifiedString
}
