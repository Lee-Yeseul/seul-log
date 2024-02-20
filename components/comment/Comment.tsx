import { calculateTimeAgo } from '@/utils'

export default async function Comment({ value }: { value: string }) {
  const formattedTime = calculateTimeAgo('2024-02-20T13:41:11Z')
  return (
    <div className="max-h-40 min-h-16 w-full overflow-auto rounded-md border-1 border-solid border-gray-400 p-4 text-base">
      <div className="flex items-center gap-5">
        <div className="font-bold">익명</div>
        <div className="text-sm">{formattedTime}</div>
      </div>
      <div className="mt-1">{value}</div>
    </div>
  )
}
