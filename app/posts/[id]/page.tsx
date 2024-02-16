interface PostDetailProps {
  params: { id: string }
}

export default async function Post({ params: { id } }: PostDetailProps) {
  const list = Array.from({ length: 3 }, () => 0)

  return (
    <section className="mx-10 flex min-h-[75vh] w-full justify-center pt-10">
      <article className="w-1/2">
        <h3 className="text-3xl font-bold">개발자의 멘탈 모델</h3>
        <div className="mt-4 text-sm font-bold text-purple-500">
          January 20, 2024
        </div>
        <div className="mt-4 flex gap-4 text-xs font-bold">
          {list.map((value, index) => (
            <div
              key={index}
              className="rounded-full bg-purple-200 px-1.5 py-1 text-purple-500"
            >
              frontend
            </div>
          ))}
        </div>
        <div className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptates facilis quas voluptas! Dolores consequatur veritatis
          repudiandae neque ullam unde alias. Voluptatum nostrum laboriosam
          itaque nulla perferendis magnam quos eius? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus voluptates facilis quas
          voluptas! Dolores consequatur veritatis repudiandae neque ullam unde
          alias. Voluptatum nostrum laboriosam itaque nulla perferendis magnam
          quos eius? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus voluptates facilis quas voluptas! Dolores consequatur
          veritatis repudiandae neque ullam unde alias. Voluptatum nostrum
          laboriosam itaque nulla perferendis magnam quos eius? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Possimus voluptates
          facilis quas voluptas! Dolores consequatur veritatis repudiandae neque
          ullam unde alias. Voluptatum nostrum laboriosam itaque nulla
          perferendis magnam quos eius? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Possimus voluptates facilis quas voluptas! Dolores
          consequatur veritatis repudiandae neque ullam unde alias. Voluptatum
          nostrum laboriosam itaque nulla perferendis magnam quos eius? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates
          facilis quas voluptas! Dolores consequatur veritatis repudiandae neque
          ullam unde alias. Voluptatum nostrum laboriosam itaque nulla
          perferendis magnam quos eius?
        </div>
      </article>
    </section>
  )
}
