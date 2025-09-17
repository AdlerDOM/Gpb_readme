import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-2">Kontakt</h4>
          <p>Beispielstraße 12<br />12345 Musterstadt</p>
          <p className="mt-2">Tel: 01234 567890<br />E-Mail: info@firma.de</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Navigation</h4>
          <ul>
            <li><Link href="/">Start</Link></li>
            <li><Link href="/ueber-uns">Über uns</Link></li>
            <li><Link href="/leistungen">Leistungen</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Rechtliches</h4>
          <ul>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-6 text-sm text-gray-400">&copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.</p>
    </footer>
  )
}

