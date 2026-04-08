import { Search, Shield, Check, Globe, Zap } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Domains() {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState(null)

  const tlds = [
    { ext: '.com', price: 'Rp 149.000', popular: true },
    { ext: '.net', price: 'Rp 195.000', popular: false },
    { ext: '.io', price: 'Rp 599.000', popular: true },
    { ext: '.co', price: 'Rp 375.000', popular: false },
    { ext: '.tech', price: 'Rp 75.000', popular: false },
    { ext: '.app', price: 'Rp 225.000', popular: false },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query) return
    
    setIsSearching(true)
    setResults(null)
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false)
      const baseName = query.split('.')[0].toLowerCase()
      
      setResults(
        tlds.map(tld => ({
          domain: `${baseName}${tld.ext}`,
          price: tld.price,
          available: Math.random() > 0.3, // random availability
          popular: tld.popular
        }))
      )
    }, 1500)
  }

  return (
    <div className="page pb-20 pt-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <Globe size={48} className="text-accent mx-auto mb-6 drop-shadow-lg" />
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Temukan alamat web yang sempurna.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Amankan identitas online Anda dengan registrasi domain cepat kami. Semua domain dilengkapi perlindungan privasi WHOIS gratis.
          </p>

          <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex bg-surface-2 border border-white/10 rounded-xl p-2 shadow-card">
              <div className="pl-4 flex items-center justify-center text-muted">
                <Search size={24} />
              </div>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari nama domain impian Anda..." 
                className="w-full bg-transparent text-lg text-slate-900 px-4 py-4 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-accent hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold font-heading transition-colors whitespace-nowrap"
              >
                {isSearching ? 'Mencari...' : 'Cari'}
              </button>
            </div>
          </form>

          {/* Popular TLDs */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {tlds.slice(0, 4).map((tld, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-heading font-black text-xl text-slate-900">{tld.ext}</span>
                <span className="text-sm font-medium text-accent">{tld.price}/thn</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Pricing Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fadeInUp">
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 text-center">Harga Domain</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tlds.map((tld, idx) => (
              <div key={idx} className="card p-4 border-white/10 text-center hover:border-accent transition-colors">
                <h4 className="font-heading font-bold text-lg text-slate-900">{tld.ext}</h4>
                <p className="text-accent font-black text-xl">{tld.price}<span className="text-sm font-medium text-soft">/thn</span></p>
                <p className="text-soft text-xs mt-1">Tahun pertama</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Domains Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fadeInUp">
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 text-center">Saran Domain Populer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'namakamu.com', price: 'Rp 149.000' },
              { name: 'bisnisku.net', price: 'Rp 195.000' },
              { name: 'startup.io', price: 'Rp 599.000' },
              { name: 'tech.co', price: 'Rp 375.000' },
              { name: 'app.tech', price: 'Rp 75.000' },
              { name: 'digital.app', price: 'Rp 225.000' },
            ].map((domain, idx) => (
              <div key={idx} className="card p-6 border-white/10 hover:border-accent transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-bold text-lg text-slate-900">{domain.name}</h4>
                  <span className="text-accent font-bold">{domain.price}/thn</span>
                </div>
                <p className="text-soft text-sm mb-4">Tersedia sekarang! Amankan domain Anda hari ini.</p>
                <button className="w-full btn btn-outline border-white/10 hover:border-accent hover:bg-accent-dim">
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        {isSearching && (
          <div className="max-w-3xl mx-auto text-center py-20">
            <div className="w-12 h-12 border-4 border-surface border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-soft font-medium">Memeriksa ketersediaan...</p>
          </div>
        )}

        {results && (
          <div className="max-w-3xl mx-auto animate-fadeInUp">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6">Hasil Pencarian</h3>
            <div className="bg-surface-2 border border-white/10 rounded-2xl overflow-hidden shadow-card">
              {results.map((result, idx) => (
                <div key={idx} className={`p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 last:border-0 hover:bg-surface transition-colors ${idx === 0 ? 'bg-surface' : ''}`}>
                  <div className="flex items-center gap-4">
                    {result.available ? (
                      <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center text-green">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted">
                        <span className="font-bold text-xs">X</span>
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-3">
                        <p className={`font-heading font-bold text-xl ${!result.available ? 'text-muted line-through' : 'text-slate-900'}`}>
                          {result.domain}
                        </p>
                        {result.popular && result.available && (
                          <span className="bg-accent-dim text-accent text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest border border-accent/20">Populer</span>
                        )}
                      </div>
                      <p className="text-sm text-soft mt-1">
                        {result.available ? 'Tersedia! Amankan sekarang.' : 'Sudah diambil. Coba ekstensi lain.'}
                      </p>
                    </div>
                  </div>
                  
                  {result.available ? (
                    <div className="flex items-center gap-6">
                      <p className="font-black text-xl text-slate-900">{result.price}<span className="text-sm font-medium text-soft font-body">/thn</span></p>
                      <Link to="/pricing" className="btn btn-outline border-white/10 hover:border-accent hover:bg-accent-dim">
                        Ke Keranjang
                      </Link>
                    </div>
                  ) : (
                    <button disabled className="btn bg-white/5 text-muted cursor-not-allowed">
                      Tidak Tersedia
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-32">
          <div className="card p-8 border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-accent shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Privasi WHOIS Gratis</h4>
              <p className="text-soft text-sm leading-relaxed">Kami melindungi informasi pribadi Anda dari spammer dan penipu. Privasi WHOIS menjadi standar untuk setiap pendaftaran domain.</p>
            </div>
          </div>
          <div className="card p-8 border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-blue-400 shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Setup Instan</h4>
              <p className="text-soft text-sm leading-relaxed">Tanpa menunggu. Domain Anda diaktifkan seketika dan propagasi DNS dipercepat ke seluruh jaringan global kami.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
