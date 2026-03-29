import { Search, Server, Shield, Zap, Cloud, Cpu, Globe, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home({ isSubscribed }) {
  return (
    <div className="page pb-20 pt-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fadeInUp">
            <span className="badge badge-blue mb-6 border border-accent/20 text-slate-800">
              <Zap size={12} fill="currentColor" /> Up to 10x Faster on NVMe
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 tracking-tight max-w-[900px] mx-auto leading-tight text-slate-900">
              Powerful Cloud Hosting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent drop-shadow-md">Modern Apps</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-[700px] mx-auto mb-12">
              Deploy your website globally in seconds. Our high-performance servers ensure maximum uptime and blazing-fast loading speeds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing" className="btn btn-primary w-full sm:w-auto btn-lg shadow-glow">
                Explore Plans
                <ArrowRight size={18} />
              </Link>
              <Link to="/domains" className="btn btn-outline w-full sm:w-auto btn-lg hover:border-accent hover:text-accent">
                Register Domain
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-slate-600 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" /> 99.99% Uptime Guarantee
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" /> Free SSL & CDN
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-500" /> 24/7 Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Search Mini Section */}
      <section className="py-10 bg-surface-2 border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <h3 className="font-heading font-bold text-xl whitespace-nowrap">Find your perfect domain:</h3>
            <div className="flex w-full relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="search-your-new-domain.com" 
                className="w-full bg-surface border border-blue-200 rounded-l-xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-accent transition-colors shadow-inner"
              />
              <button className="bg-accent text-white px-6 md:px-8 py-4 rounded-r-xl font-bold font-heading hover:bg-blue-400 transition-colors shadow-glow whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <span className="section-label">Enterprise-Grade Infrastructure</span>
            <h2 className="section-title">Everything you need to succeed online</h2>
            <p className="section-subtitle mx-auto">We don't cut corners. Our platforms are built on enterprise-grade hardware to ensure maximum performance for your websites.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Cpu size={28} className="text-accent" />}
              title="Next-Gen Processors"
              desc="Powered by premium AMD EPYC™ and Intel® Xeon® processors delivering unmatched speed."
              delay="1"
            />
            <FeatureCard 
              icon={<Zap size={28} className="text-gold" />}
              title="NVMe SSD Storage"
              desc="Read and write data up to 10x faster than standard SSDs. Perfect for database-heavy apps."
              delay="2"
            />
            <FeatureCard 
              icon={<Shield size={28} className="text-green" />}
              title="Advanced DDoS Protection"
              desc="Enterprise-grade mitigated traffic scrubbers keep your site online during malicious attacks."
              delay="3"
            />
            <FeatureCard 
              icon={<Globe size={28} className="text-purple-400" />}
              title="Global Anycast CDN"
              desc="Deliver content from data centers closest to your visitors, reducing latency instantly."
              delay="4"
            />
            <FeatureCard 
              icon={<Server size={28} className="text-blue-400" />}
              title="Dedicated Resources"
              desc="Enjoy isolated environments with cloud-native containers that ensure no greedy neighbors steal processing."
              delay="5"
            />
            <FeatureCard 
              icon={<Cloud size={28} className="text-sky-400" />}
              title="Automated Backups"
              desc="Rest easy knowing your data is securely backed up off-site automatically every single day."
              delay="6"
            />
          </div>
        </div>
      </section>

      {/* Global Datacenters */}
      <section className="py-24 bg-surface-2 border-y border-white/5 overflow-hidden relative">
        <div className="absolute -right-[400px] -top-[400px] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="section-label">Global Reach</span>
            <h2 className="section-title">Data Centers near your audience</h2>
            <p className="text-soft text-lg leading-relaxed mb-8">
              Latency kills conversions. That's why HostCrafter has invested in top-tier data centers located across North America, Europe, and Asia.
            </p>
            <ul className="flex flex-col gap-4 text-slate-700 font-medium mb-10">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent pulse-glow"></span> New York, USA</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent pulse-glow"></span> London, UK</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent pulse-glow"></span> Singapore</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent pulse-glow"></span> Frankfurt, DE</li>
            </ul>
            <Link to="/pricing" className="btn btn-outline border-white/10 hover:border-accent group">
              View All Locations <ArrowRight size={16} className="text-muted group-hover:text-accent transition-colors" />
            </Link>
          </div>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 p-2 bg-bg/50 backdrop-blur-sm shadow-card group">
            <div className="absolute inset-0 bg-accent/5 z-0"></div>
            {/* Visual placeholder for map */}
            <div className="w-full h-full bg-surface rounded-2xl border border-white/5 relative z-10 overflow-hidden flex items-center justify-center">
               <Globe size={120} strokeWidth={1} className="text-accent/20 absolute -right-10 -bottom-10" />
               <div className="absolute inset-2 border border-white/5 rounded-xl border-dashed opacity-30"></div>
               <div className="text-center relative z-20">
                 <p className="font-heading font-black text-2xl text-slate-500 mb-2 tracking-widest">GLOBAL MAP</p>
                 <p className="text-xs text-soft font-mono uppercase tracking-[0.2em]">{`latency < 50ms`}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto card p-12 lg:p-16 card-highlight relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors pointer-events-none"></div>
            
            <Zap size={40} className="text-accent mx-auto mb-6 drop-shadow-lg" />
            <h2 className="font-heading text-4xl lg:text-5xl font-black mb-6">Ready to launch?</h2>
            <p className="text-lg text-soft mb-10 leading-relaxed">
              Join thousands of developers and businesses who trust HostCrafter for their critical infrastructure needs.
            </p>
            <Link to="/pricing" className="btn btn-primary btn-lg shadow-glow text-lg">
              Start Building Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <div className={`card p-8 group animate-fadeInUp animate-delay-${Math.min(delay, 4)} hover:bg-surface-2 transition-colors`}>
      <div className="w-14 h-14 rounded-2xl bg-bg border border-white/5 flex items-center justify-center mb-6 shadow-inner group-hover:border-accent/30 group-hover:scale-110 transition-all duration-500 relative">
        <div className="absolute inset-0 bg-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-accent transition-all duration-300">
        {title}
      </h3>
      <p className="text-soft leading-relaxed text-sm">{desc}</p>
    </div>
  )
}
