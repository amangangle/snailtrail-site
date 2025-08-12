import Link from 'next/link'

export default function Header(){ 
  return (
    <header className="border-b border-gray-200 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/"><a className="flex items-center gap-3"><img src="/logo-placeholder.png" alt="SnailTrail" className="h-9"/><span className="font-semibold text-skingray">SnailTrail</span></a></Link>
        <nav className="space-x-6 text-sm">
          <Link href="/"><a className="header-link">Home</a></Link>
          <Link href="/brand"><a className="header-link">Brand</a></Link>
          <Link href="/shop"><a className="header-link">Shop</a></Link>
          <Link href="/contact"><a className="header-link">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
