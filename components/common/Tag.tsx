interface TagProps {
  value: string
  index: number
}

export default function Tag({ value, index }: TagProps) {
  const tagPalette = [
    'text-sky-500 bg-sky-100',
    'text-indigo-500 bg-indigo-100',
    'text-rose-500 bg-rose-100',
    'text-blue-500 bg-blue-100',
    'text-violet-500 bg-violet-100',
    'text-red-500 bg-red-100',
    'text-orange-500 bg-orange-100',
  ]

  return (
    <div
      className={`rounded-full px-2.5 py-1 text-sm font-semibold ${tagPalette[index]}`}
    >
      {value}
    </div>
  )
}
