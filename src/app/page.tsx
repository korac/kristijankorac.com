import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="max-w-xl lg:mx-auto">
        <header className="mb-[48px]">
          <Link href="/" className="flex items-center gap-2 font-medium hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Kristijan Korać
          </Link>
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-start">
          <blockquote
            className="relative before:absolute before:w-[4px] before:top-0 before:bottom-0 before:-left-[16px] before:bg-foreground before:rounded-md">
            👋<span className="italic ml-1">Speak, friend, and enter.</span>
          </blockquote>
          <p className="flex items-center justify-start">
            I am Kristijan, software engineer and founder from Zagreb, Croatia 🇭🇷.
          </p>
          <p>
            I enjoy crafting digital solutions, user-friendly interfaces and human experiences in a digital world.
          </p>
          <p>
            So far, I have been working with TS/JS, React and NextJS, NestJS, Ruby on Rails, AWS, etc.
          </p>
          <section className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">Building bridges with</h3>
            <ul className="list-disc flex flex-col gap-2">
              <li>
                <a href="https://pontahr.com" className="underline underline-offset-4 hover:text-amber-600 dark:hover:text-amber-400" target="_blank">PontaHR</a>
                {' '} - next-gen ATS
              </li>
              <li>
                <a href="https://cargo-navis.com" className="underline underline-offset-4 hover:text-amber-600 dark:hover:text-amber-400" target="_blank">CargoNavis</a>
                {' '} - digitalizing cargo-transport industry operations
              </li>
              <li>
                (I'll see about notable mentions)
              </li>
            </ul>
          </section>
          <h3 className="text-xl font-bold">Mini manifesto</h3>
          <blockquote
            className="relative before:absolute before:w-[4px] before:top-0 before:bottom-0 before:-left-[16px] before:bg-foreground before:rounded-md">
          <span className="italic">Software is for computers. Code is for developers. Interface is for users.</span>
          </blockquote>
          <section className="flex flex-col gap-3">
            <p>
              Code is essentially a bridge between users and computers. If a bridge is poorly designed on either side,
              it inevitably collapses.
            </p>
            <p>
              As a software developer, I strive to build a future interconnected by stable, reliable, and flexible
              bridges — where software not only solves real-world challenges, but also challenges real-world solutions.
            </p>
          </section>
        </main>
        <footer className="row-start-3 my-10 flex flex-wrap gap-[24px]">
          <a
            className="flex items-center gap-2 underline underline-offset-4 hover:text-amber-600 dark:hover:text-amber-400"
            href="https://www.linkedin.com/in/kristijan-korac/"
            target="_blank"
            rel="noopener noreferrer"
          >Linkedin</a>
          <a
            className="flex items-center gap-2 underline underline-offset-4 hover:text-amber-600 dark:hover:text-amber-400"
            href="https://x.com/korac_kristijan"
            target="_blank"
            rel="noopener noreferrer"
          >X (Twitter)</a>
        </footer>
      </div>
    </div>
  );
}
