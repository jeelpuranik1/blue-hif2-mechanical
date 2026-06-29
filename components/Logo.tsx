import Image from 'next/image'

export default function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div className="flex-shrink-0">
      <Image
        src="/logo-full.png"
        alt="Blue HIF₂ Mechanical Inc."
        width={360}
        height={144}
        className="h-28 w-auto object-contain"
        priority
      />
    </div>
  )
}
