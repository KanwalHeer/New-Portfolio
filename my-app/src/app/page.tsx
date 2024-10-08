import Image from "next/image";

export default function Home() {
  return (

    <main className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-6 mt-8">

      {/* text div */}
      <div className="text-white h-96 w-96 text-center p-8 rounded-xl ">
        <h1 className="text-xl font-bold m-3">Kanwal Heer</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illo voluptas veritatis, velit
         facere optio architecto nulla magni beatae earum sed odit alias maxime delectus aut cupiditate voluptatem! Sed, iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut recusandae consectetur aut vitae, pariatur debitis quae 
          molestiae consequatur voluptas a in earum impedit, quas possimus blanditiis fugiat dolorum ullam
          !</p>
       </div>

     {/* image dive */}
      <div className=" h-96 w-96 text-center p-8 rounded-xl">
        <Image src="/s1.png" alt="image" height={200} width={300} className="rounded-full"/>
      </div>
    </main>
  );
}
