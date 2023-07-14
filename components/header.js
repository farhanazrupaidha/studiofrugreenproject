import Link from 'next/link'
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-20">
      <Link href="/" className="hover:underline">
                <Typewriter
                  options={{
                    strings: ['Studiofru | Green Project','Jelajah Ensiklopedia', 'Flora'],
                    autoStart: true,
                    loop: true,
                  }}
                />
      </Link>
    </h2>
  )
}
