import Link from '@/node_modules/next/link'

export default function Home() {
  return (
    <main className="container mx-auto grid w-full gap-6 md:grid-cols-2 min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">Hi, I'm Sakib Hasan.</h1>
        <br />
        <p className="text-xl">Experienced Full-Stack Developer with Over 3 Years of Expertise, Passionate about Crafting Robust and Scalable Web Applications.</p>

        <p className="text-1xl">Dedicated to remaining current with the latest trends and top-tier practices in frontend development, ensuring the delivery of high-quality solutions. Actively pursuing new opportunities to apply my expertise and contribute to pioneering projects.</p>
        <br />
        <Link href="https://drive.google.com/file/d/12M_x1GnLpLb-JpplvuWD07twiIrlNkWl/view?usp=sharing" target="_blank">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Download Resume
          </button>
        </Link>
      </div>

      <div className="z-10 max-w-5xl w-full flex justify-center font-mono text-sm">
        <img className="rounded-full w-96 h-96" src="sakib_image.jpeg" alt="Profile image sakib" />
      </div>
    </main>
  )
}
