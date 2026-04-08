import { Check, Zap, Server, Shield, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Pricing({ isSubscribed, onSubscribe }) {
  const [billing, setBilling] = useState('yearly')
  const navigate = useNavigate()

  const handleCTA = (plan) => {
    if (!isSubscribed) {
      onSubscribe(plan)
    }
    navigate('/') // Usually would go to a dashboard
  }

  const pricings = [
    {
      id: 'shared',
      name: 'Cloud Pemula',
      icon: <Zap size={24} className="text-blue-400" />,
      desc: 'Sempurna untuk situs pribadi dan blog.',
      price: billing === 'yearly' ? '9.900' : '15.900',
      features: ['1 Website', 'Penyimpanan 10 GB NVMe', 'Sertifikat SSL Gratis', 'Bandwidth Tanpa Batas', 'Dukungan Standar'],
      highlighted: false,
    },
    {
      id: 'vps',
      name: 'Cloud Premium',
      icon: <Server size={24} className="text-accent" />,
      desc: 'Kinerja tinggi untuk bisnis.',
      price: billing === 'yearly' ? '24.900' : '39.900',
      features: ['Website Tidak Terbatas', 'Penyimpanan 50 GB NVMe', 'Domain Gratis (Thn ke-1)', 'Pencadangan Harian', 'Dukungan Prioritas 24/7'],
      highlighted: true,
      badge: 'Paling Populer',
    },
    {
      id: 'dedicated',
      name: 'Cloud Enterprise',
      icon: <Shield size={24} className="text-purple-400" />,
      desc: 'Sumber daya khusus untuk lalu lintas besar.',
      price: billing === 'yearly' ? '99.000' : '149.000',
      features: ['Prosesor Inti Khusus', 'Penyimpanan 200 GB NVMe', 'Perlindungan DDoS Lanjutan', 'Object Caching Pro', 'Manajer Akun Khusus'],
      highlighted: false,
    }
  ]

  return (
    <div className="page pb-20 pt-32 relative">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="section-label mb-4"><Server size={14} className="mr-1" inline /> Deployment Fleksibel</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Harga transparan untuk semua.
          </h1>
          <p className="text-lg text-soft max-w-2xl mx-auto mb-10">
            Tidak ada biaya tersembunyi, tidak ada kontrak rumit. Pilih paket yang paling sesuai dengan kebutuhan proyek Anda.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-surface-2 p-1.5 rounded-full border border-white/10 shadow-inner">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${billing === 'monthly' ? 'bg-surface text-accent shadow-card border border-accent/20' : 'text-soft hover:text-accent'}`}
            >
              Bulanan
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${billing === 'yearly' ? 'bg-surface text-accent shadow-card border border-accent/20' : 'text-soft hover:text-accent'}`}
            >
              Tahunan <span className="bg-green/15 text-green text-[10px] px-2 py-0.5 rounded-full border border-green/20">HEMAT 40%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative mb-32">
          {pricings.map((pricing, i) => (
            <div 
              key={pricing.id} 
              className={`card card-overflow-visible relative p-8 lg:p-10 flex flex-col animate-fadeInUp bg-white ${pricing.highlighted ? 'border-accent border-2 shadow-lg scale-[1.02] md:-translate-y-2' : 'border-slate-200 mt-4 hover:border-slate-300'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {pricing.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md z-20">
                  {pricing.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">{pricing.name}</h3>
                <p className="text-slate-600 text-sm min-h-[40px]">{pricing.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-soft">Rp</span>
                  <span className="text-5xl font-black font-heading text-slate-900 tracking-tight">{pricing.price}</span>
                  <span className="text-soft font-medium">/bln</span>
                </div>
                {billing === 'yearly' && (
                  <p className="text-green text-sm font-semibold mt-2 border border-green/20 bg-green/10 inline-block px-2 py-0.5 rounded">Ditagih secara tahunan</p>
                )}
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {pricing.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleCTA(pricing.name)}
                className={`w-full py-4 rounded-full font-heading font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${pricing.highlighted ? 'btn-primary' : 'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white'}`}
              >
                {isSubscribed ? 'Ubah Paket' : 'Mulai Sekarang'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-20 animate-fadeInUp">
          <h3 className="font-heading text-3xl font-black text-center mb-10">Pertanyaan yang Sering Diajukan</h3>
          <div className="grid gap-6">
            <div className="card p-6 border-white/5">
              <h4 className="font-bold text-lg mb-2 text-slate-900">Bisakah saya meningkatkan kapasitas paket saya nanti?</h4>
              <p className="text-slate-600 text-sm">Tentu saja. Infrastruktur cloud kami memungkinkan Anda meningkatkan kapasitas dengan mudah. Anda dapat bermigrasi dari Cloud Pemula ke Premium atau Enterprise kapan saja langsung dari dasbor Anda tanpa downtime.</p>
            </div>
            <div className="card p-6 border-white/5">
              <h4 className="font-bold text-lg mb-2 text-slate-900">Di mana lokasi server Anda?</h4>
              <p className="text-soft text-sm">Kami mengoperasikan pusat data canggih di Jakarta, Singapura, Tokyo, dan Los Angeles. Anda dapat memilih wilayah server pilihan Anda saat proses pemesanan.</p>
            </div>
            <div className="card p-6 border-white/5">
              <h4 className="font-bold text-lg mb-2 text-slate-900">Apakah Anda menawarkan garansi uang kembali?</h4>
              <p className="text-soft text-sm">Ya, kami memberikan garansi uang kembali 30 hari untuk semua paket hosting cloud kami. Jika Anda tidak sepenuhnya puas, kami akan mengembalikan biaya hosting Anda tanpa syarat ribet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
