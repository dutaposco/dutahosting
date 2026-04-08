import { Search, Server, Shield, Zap, Cloud, Cpu, Globe, CheckCircle2, ArrowRight, Check, Star, Quote, ChevronDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Home({ isSubscribed }) {
  const [billing, setBilling] = useState('yearly')
  const navigate = useNavigate()

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
    <div className="page">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <div className="text-left animate-fadeInUp">
              <span className="text-slate-500 font-bold mb-4 block">Web Hosting Indonesia Hemat Hingga 40%</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
                Web hosting Indonesia terbaik untuk website Anda
              </h1>
              
              <ul className="flex flex-col gap-3 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check size={20} className="text-[#10b981] flex-shrink-0 font-bold" /> Gratis migrasi domain dan website
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check size={20} className="text-[#10b981] flex-shrink-0 font-bold" /> Jalankan WordPress atau CMS lainnya
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check size={20} className="text-[#10b981] flex-shrink-0 font-bold" /> Fully Managed Web Hosting
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check size={20} className="text-[#10b981] flex-shrink-0 font-bold" /> Bantuan Ahli 24/7
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button 
                  onClick={() => window.scrollTo({top: 600, behavior: 'smooth'})} 
                  className="btn btn-primary w-full sm:w-auto px-8 py-4 text-lg shadow-md hover:scale-105 transition-transform"
                >
                  Ambil promo
                </button>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mt-2 sm:mt-0 delay-100">
                   <Shield size={16} /> Jaminan 30 hari uang kembali
                </div>
              </div>
            </div>

            {/* Right Column: Illustration / CSS Composition */}
            <div className="relative animate-fadeInUp animate-delay-2 hidden lg:block px-8 py-10">
              {/* Background abstract shape */}
              <div className="absolute inset-0 bg-accent/5 rounded-[40px] transform rotate-3 scale-105 pointer-events-none"></div>
              
              {/* Main Window */}
              <div className="relative bg-surface border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden aspect-[4/3] z-10 w-full hover:scale-[1.02] transition-transform duration-500">
                {/* Window Header */}
                <div className="h-10 bg-slate-100/80 border-b border-slate-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="ml-auto w-1/3 h-4 bg-slate-200/50 rounded-full"></div>
                </div>
                {/* Window Body */}
                <div className="p-8 h-full bg-slate-50 relative overflow-hidden flex flex-col justify-center">
                  <div className="w-full relative z-10">
                    <div className="h-6 bg-accent/20 rounded w-1/4 mb-4"></div>
                    <div className="h-10 bg-slate-800 rounded w-3/4 mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                      <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                      <div className="h-3 bg-slate-200 rounded w-full mt-4"></div>
                    </div>
                  </div>
                  
                  {/* Image Placeholder Background Graphic */}
                  <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-full mix-blend-multiply"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Floating Badges */}
              
              {/* PageSpeed Badge */}
              <div className="absolute -bottom-8 left-16 z-20 bg-white p-4 justify-center rounded-2xl shadow-xl flex flex-col items-center gap-1 border border-slate-100 w-28 hover:-translate-y-2 transition-transform duration-300">
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">PageSpeed</span>
                 <div className="relative flex items-center justify-center w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-[#10b981]" strokeDasharray="99, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="absolute font-black text-xl text-[#10b981]">99</span>
                 </div>
              </div>

              {/* Domain Search floating badge */}
              <div className="absolute top-2 right-4 z-20 bg-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100 hover:scale-105 transition-transform duration-300">
                <Shield size={16} className="text-[#10b981]" />
                <div className="w-16 h-2 bg-slate-200 rounded"></div>
                <span className="font-black text-slate-800 text-sm">.CO.ID</span>
              </div>

              {/* Floating Icon badge */}
              <div className="absolute top-1/2 -left-6 z-20 bg-slate-900 text-white p-3 rounded-2xl shadow-xl hover:-rotate-12 transition-transform duration-300">
                 <Server size={24} className="text-white" />
              </div>
              
              <div className="absolute -top-4 left-20 z-20 bg-accent text-white p-3 rounded-2xl shadow-xl hover:rotate-12 transition-transform duration-300">
                 <Shield size={20} className="text-white" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section on Home */}
      <section className="py-20 bg-surface-2 relative z-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Pilih Paket Hosting Anda
            </h2>
            <div className="inline-flex items-center gap-4 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
              <button 
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${billing === 'monthly' ? 'bg-slate-100 text-accent shadow-sm border border-slate-200' : 'text-slate-500 hover:text-accent'}`}
              >
                Bulanan
              </button>
              <button 
                onClick={() => setBilling('yearly')}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${billing === 'yearly' ? 'bg-slate-100 text-accent shadow-sm border border-slate-200' : 'text-slate-500 hover:text-accent'}`}
              >
                Tahunan <span className="bg-green/15 text-green text-[10px] px-2 py-0.5 rounded-full border border-green/20">HEMAT 40%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
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
                    <span className="text-2xl font-bold text-slate-500">Rp</span>
                    <span className="text-5xl font-black font-heading text-slate-900 tracking-tight">{pricing.price}</span>
                    <span className="text-slate-500 font-medium">/bln</span>
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
                  onClick={() => navigate('/pricing')}
                  className={`w-full py-4 rounded-full font-heading font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${pricing.highlighted ? 'btn-primary' : 'bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white'}`}
                >
                  {isSubscribed ? 'Ubah Paket' : 'Pilih Paket Ini'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-32 relative bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <span className="section-label">Performa Tak Tertandingi</span>
            <h2 className="section-title">Infrastruktur Premium, Harga Minimum</h2>
            <p className="section-subtitle mx-auto">Bukan sekadar janji. Teknologi mutakhir kami dirancang khusus agar website Anda stabil, anti-lelet, dan selalu melesat jauh meninggalkan kompetitor lain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Cpu size={28} className="text-accent" />}
              title="Prosesor Generasi Terbaru"
              desc="Ditenagai oleh prosesor premium AMD EPYC™ dan Intel® Xeon® yang memberikan kecepatan tiada tara."
              delay="1"
            />
            <FeatureCard 
              icon={<Zap size={28} className="text-gold" />}
              title="Penyimpanan SSD NVMe"
              desc="Baca dan tulis data hingga 10x lebih cepat dibandingkan SSD standar. Sempurna untuk aplikasi berat database."
              delay="2"
            />
            <FeatureCard 
              icon={<Shield size={28} className="text-green" />}
              title="Perlindungan DDoS Lanjutan"
              desc="Filtrasi lalu lintas tingkat perushaan menjaga situs Anda tetap online selama serangan berbahaya."
              delay="3"
            />
            <FeatureCard 
              icon={<Globe size={28} className="text-purple-400" />}
              title="CDN Anycast Global"
              desc="Kirim konten dari pusat data terdekat ke pengunjung Anda, mengurangi latensi seketika."
              delay="4"
            />
            <FeatureCard 
              icon={<Server size={28} className="text-blue-400" />}
              title="Sumber Daya Terpisah"
              desc="Nikmati lingkungan terisolasi dengan kontainer cloud-native yang memastikan tidak ada tetangga yang mencuri prosesor."
              delay="5"
            />
            <FeatureCard 
              icon={<Cloud size={28} className="text-sky-400" />}
              title="Pencadangan Otomatis"
              desc="Tenang mengetahui data Anda dicadangkan dengan aman di luar situs secara otomatis setiap harinya."
              delay="6"
            />
          </div>
        </div>
      </section>

      {/* Testimonial/Ulasan Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <span className="section-label">Ulasan Pelanggan</span>
            <h2 className="section-title">Dipercaya oleh ribuan <span className="text-accent">pebisnis lokal</span></h2>
            <p className="section-subtitle mx-auto">Kami mengutamakan kualitas. Inilah yang dikatakan klien tentang layanan hosting kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Budi Santoso"
              role="Pemilik Toko Online"
              text="Semenjak pindah ke DutaHosting, website e-commerce saya nggak pernah down lagi walau lagi rame-ramenya flash sale. Speed-nya luar biasa dan harga bersahabat!"
            />
            <TestimonialCard 
              name="Siti Rahmawati"
              role="Web Developer"
              text="Saya udah coba berbagai provider, tapi ini yang termurah dengan spek enterprise. Setup-nya super mudah, dan customer service balasnya cepat banget."
            />
            <TestimonialCard 
              name="Arief Pratama"
              role="Blogger & Content Creator"
              text="Pilihan tepat buat content creator! Web jadi loading instan buat pembaca di Indonesia berkat server lokal. Bakal terus perpanjang tahunan pokoknya."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            <Zap size={40} className="text-accent mb-6 drop-shadow-lg" />
            <h2 className="font-heading text-4xl lg:text-5xl font-black mb-6">Wujudkan Website Impianmu Sekarang</h2>
            <p className="text-lg text-soft mb-10 leading-relaxed max-w-2xl">
              Tidak perlu ragu. Pindah ke DutaHosting kapan saja secara cuma-cuma dan rasakan lonjakan performa website secara instan tanpa ribet.
            </p>
            <Link to="/pricing" className="btn btn-primary btn-lg px-10 shadow-md text-lg hover:scale-105 transition-transform">
              Mulai Sekarang Juga
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Tanya Jawab</span>
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
            <p className="section-subtitle mx-auto">Ada pertanyaan? Temukan jawabannya di sini, atau hubungi tim kami kapan saja.</p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <FaqItem q="Apakah ada garansi uang kembali?" a="Ya! Kami memberikan garansi uang kembali 30 hari penuh untuk semua paket hosting. Jika tidak puas, kami kembalikan 100% tanpa pertanyaan ribet." />
            <FaqItem q="Bisakah saya upgrade paket kapan saja?" a="Tentu bisa. Anda bisa upgrade dari Cloud Pemula ke Premium atau Enterprise kapan saja langsung dari dasbor pengguna tanpa downtime sama sekali." />
            <FaqItem q="Apakah hosting ini cocok untuk WordPress?" a="Sangat cocok! Server kami telah dioptimalkan untuk WordPress, WooCommerce, dan berbagai CMS populer lainnya. Setup WordPress bisa dilakukan dalam hitungan menit." />
            <FaqItem q="Di mana lokasi server DutaHosting?" a="Server utama kami berlokasi di Jakarta, Indonesia. Kami juga memiliki node di Singapura, Tokyo, dan Los Angeles untuk performa optimal di seluruh dunia." />
            <FaqItem q="Apakah SSL gratis termasuk di semua paket?" a="Ya, semua paket hosting kami sudah termasuk SSL gratis (Let's Encrypt) yang dapat diaktifkan dengan satu klik. HTTPS untuk website Anda tanpa biaya tambahan." />
            <FaqItem q="Bagaimana cara menghubungi dukungan pelanggan?" a="Tim dukungan kami siap 24/7 via live chat, email, dan WhatsApp. Rata-rata waktu respons kami di bawah 10 menit untuk semua jenis pertanyaan teknis." />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className={`card bg-surface-2 p-8 group animate-fadeInUp animate-delay-${Math.min(delay, 4)} hover:bg-slate-50 transition-colors shadow-sm`}>
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent/30 group-hover:scale-110 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-accent transition-all duration-300">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="card bg-white p-8 border border-slate-100 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-4">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-gold fill-gold" />)}
      </div>
      <p className="text-slate-700 italic leading-relaxed mb-6 flex-grow">{text}</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">
          <Quote size={20} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm font-heading">{name}</h4>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:border-accent group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-5 flex items-center justify-between text-left group-hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-900 group-hover:text-accent transition-colors">{q}</span>
        <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out px-8 overflow-hidden ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-5">{a}</p>
      </div>
    </div>
  )
}
