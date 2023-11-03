import Image from 'next/image'

// Example excercise of page server side rendering
const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 1000))
  return {data: [1, 2, 3]}
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  )
}
