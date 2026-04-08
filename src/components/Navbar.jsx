import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Cloud, User, LogOut, ChevronDown, Zap } from 'lucide-react'

export default function Navbar({ isSubscribed, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = ({ isActive }) => 
    `text-sm font-semibold transition-all duration-300 hover:text-accent ${isActive ? 'text-accent' : 'text-slate-700'}`

  const mobileNavLinkClass = ({ isActive }) => 
    `text-2xl font-heading font-bold py-2 ${isActive ? 'text-accent' : 'text-slate-700'}`

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center shadow-card transition-all duration-500 group-hover:scale-105">
            <Cloud size={20} strokeWidth={2.5} />
          </div>
          <span className="font-heading text-2xl font-black tracking-tight text-slate-900 group-hover:text-accent transition-colors">Duta<span className="font-medium text-accent">Hosting</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <NavLink to="/" end className={navLinkClass}>Beranda</NavLink>
          <NavLink to="/domains" className={navLinkClass}>Domain</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Harga</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isSubscribed ? (
            <div className="relative" onMouseLeave={() => setUserMenuOpen(false)}>
              <button 
                className="flex items-center gap-3 bg-surface-2 border border-white/10 px-4 py-2 rounded-xl hover:border-white/20 transition-all"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-accent-dim flex items-center justify-center text-accent">
                  <User size={16} />
                </div>
                <span className="text-sm font-medium">{user?.name || 'Admin'}</span>
                <span className="bg-green/10 text-green text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider border border-green/20">LIVE</span>
                <ChevronDown size={14} className={`text-muted transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-2 border border-white/10 rounded-xl shadow-card p-1.5 overflow-hidden animate-fadeInUp">
                  <button onClick={onLogout} className="flex items-center gap-3 w-full px-3 py-2 text-sm text-soft hover:bg-white/5 hover:text-red rounded-lg transition-all">
                    <LogOut size={14} />
                    Keluar Dashboard
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/pricing" className="text-sm font-bold text-slate-700 hover:text-accent px-4 py-2 transition-all">Masuk</Link>
              <Link to="/pricing" className="flex items-center gap-2 btn-primary px-5 py-2 rounded-full font-heading font-bold text-sm hover:-translate-y-0.5 transition-all">
                Mulai Sekarang
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 border border-blue-200 rounded-xl flex items-center justify-center text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[70px] bg-white z-40 p-8 flex flex-col gap-12 md:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <nav className="flex flex-col gap-6">
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>Ringkasan</NavLink>
          <NavLink to="/domains" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>Domain</NavLink>
          <NavLink to="/pricing" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>Harga</NavLink>
        </nav>
        <div className="mt-auto flex flex-col gap-4 pb-8">
          {isSubscribed ? (
            <button onClick={() => { onLogout(); setMenuOpen(false) }} className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 rounded-2xl text-soft font-bold">
              <LogOut size={18} /> Keluar
            </button>
          ) : (
            <Link to="/pricing" onClick={() => setMenuOpen(false)} className="w-full flex items-center justify-center gap-3 py-4 btn-primary rounded-full font-heading font-bold text-xl">
              <Zap size={22} fill="currentColor" /> Mulai Layanan
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
