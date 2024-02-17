export const formatDateToLongString = (dateString: string) => {
  const date = new Date(dateString)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Intl.DateTimeFormat('en-US', options).format(date)
}
