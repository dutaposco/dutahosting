import { Link } from 'react-router-dom'
import { Cloud } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-2 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-surface border border-white/10 rounded-xl flex items-center justify-center text-accent shadow-card transition-all duration-500 group-hover:border-accent group-hover:shadow-glow">
                <Cloud size={20} />
              </div>
              <span className="font-heading text-xl font-black tracking-tight text-slate-900">Duta<span className="text-accent font-medium">Hosting</span></span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-[280px]">
              Hosting cloud performa tinggi untuk aplikasi modern. Jalankan stack teknologi Anda secara instan dengan arsitektur yang didukung NVMe.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">Layanan</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Shared Hosting</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">VPS Terkelola</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Dedicated Server</Link></li>
              <li><Link to="/domains" className="hover:text-accent transition-colors">Pendaftaran Domain</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">Perusahaan</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
              <li><Link to="/" className="hover:text-accent transition-colors">Tentang Kami</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pusat Data</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">Legalitas</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-accent transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Perjanjian SLA</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Kebijakan Pengembalian Dana</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
          <p>© {new Date().getFullYear()} DutaHosting. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-accent hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-accent hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-accent hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-accent hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.03-.09z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-accent hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
