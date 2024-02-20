import Comment from './Comment'

export default function CommentList() {
  const list = [
    'sort',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim commodi placeat, voluptates eos quibusdam aliquam necessitatibus eum reiciendis repudiandae numquam a sed qui iusto totam incidunt, facilis inventore recusandae error?',
  ]

  return (
    <div className="flex flex-col gap-2">
      {list.map((value, index) => (
        <Comment key={index} value={value} />
      ))}
    </div>
  )
}
