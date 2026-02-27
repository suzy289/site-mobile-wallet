import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white w-full px-4 md:px-10 lg:px-20 py-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo_mw.png"
            alt="MobileWallet Incorporated"
            width={180}
            height={60}
            className="h-8 md:h-12 lg:h-16 w-auto"
            priority
          />
        </Link>

        {/* Navigation centrale */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#marche" className="text-black text-[15px] font-medium hover:text-[#F9A825] transition-colors">
            Le marché
          </Link>
          <Link href="#solutions" className="text-black text-[15px] font-medium hover:text-[#F9A825] transition-colors">
            Nos Solutions
          </Link>
          <Link href="#apropos" className="text-black text-[15px] font-medium hover:text-[#F9A825] transition-colors">
            À Propos
          </Link>
          <Link href="#formules" className="text-black text-[15px] font-medium hover:text-[#F9A825] transition-colors">
            Nos formules
          </Link>
          <Link href="#equipe" className="text-black text-[15px] font-medium hover:text-[#F9A825] transition-colors">
            Notre équipe
          </Link>
        </nav>

        {/* Bouton CTA */}
        <button className="bg-[#F9A825] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F9A825]/90 transition-colors">
          Nous contacter
        </button>
      </div>
    </header>
  );
}
