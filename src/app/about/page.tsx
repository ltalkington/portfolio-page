import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/logan.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Logan, a software engineer based in Saint Louis. I enjoy developing software in C#, Python, and JavaScript.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Logan, a software engineer based in Saint Louis, Missouri. I
            enjoy developing software in C#, Python, and JavaScript.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I have been making software for around 5 years now. I originally
              came from a non-traditional tech background where I had a
              bachelors in Business Management and a minor in Finance. I then
              proceedeed to receive my MBA after that. After my MBA, I went off
              into the work force in supply chain management until I realized
              that software was what I wanted to do for the rest of my life.
              Which is when I decided to complete a bachelors in Computer
              Science.
            </p>
            <p>
              My whole life I have been passionate about technology. I loved
              setting up computers, networking, and software for my family. Now,
              I get to do that on a professional basis. While, technology has
              always been a passion of mine, I have also enjoyed aviation,
              space, and cutting edge techology.
            </p>
            <p>
              With working at my current employer, I get to achieve most of my
              passion areas and more but I found something greater than all of
              those. My deepest passion is building things. I love building
              software, computers, and even creating music on the side.
            </p>
            <p>
              That's why I have built as many web applications as I have and
              constantly learn and build new things. If you are interested in
              learning about what I am building check my projects page out or
              contact me!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/TechTalkLogan" icon={XIcon}>
              Follow on X
            </SocialLink>

            <SocialLink
              href="https://github.com/ltalkington"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/logantalkington/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:talkington.logan@gmail.com"
              icon={MailIcon}
              className="mt-4 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              talkington.logan@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
