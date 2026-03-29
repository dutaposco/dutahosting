import { Link } from 'react-router-dom'
import { Cloud } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-2 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-surface-2 border border-white/10 rounded-xl flex items-center justify-center text-accent shadow-card transition-all duration-500 group-hover:border-accent group-hover:shadow-glow">
                <Cloud size={20} />
              </div>
              <span className="font-heading text-xl font-black tracking-tight">Host<span className="text-accent">Crafter</span></span>
            </Link>
            <p className="text-soft text-sm leading-relaxed max-w-[280px]">
              High-performance cloud hosting for modern applications. Deploy your tech stack instantly with NVMe-backed architecture.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-soft">
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Shared Hosting</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Managed VPS</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Dedicated Servers</Link></li>
              <li><Link to="/domains" className="hover:text-accent transition-colors">Domain Registration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-soft">
              <li><Link to="/" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Data Centers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-soft">
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">SLA Agreement</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-muted">
          <p>© {new Date().getFullYear()} HostCrafter. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Uptime: <span className="text-green">99.99%</span></span>
            <span>Made with <span className="text-accent">♥</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
