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
      name: 'Starter Cloud',
      icon: <Zap size={24} className="text-blue-400" />,
      desc: 'Perfect for personal sites and blogs.',
      price: billing === 'yearly' ? '2.99' : '4.99',
      features: ['1 Website', '10 GB NVMe Storage', 'Free SSL Certificate', 'Unmetered Bandwidth', 'Standard Support'],
      highlighted: false,
    },
    {
      id: 'vps',
      name: 'Premium Cloud',
      icon: <Server size={24} className="text-accent" />,
      desc: 'High performance for businesses.',
      price: billing === 'yearly' ? '8.99' : '14.99',
      features: ['Unlimited Websites', '50 GB NVMe Storage', 'Free Domain (1st Yr)', 'Daily Backups', 'Priority 24/7 Support'],
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      id: 'dedicated',
      name: 'Enterprise Cloud',
      icon: <Shield size={24} className="text-purple-400" />,
      desc: 'Dedicated resources for huge traffic.',
      price: billing === 'yearly' ? '29.99' : '39.99',
      features: ['Dedicated Core Processors', '200 GB NVMe Storage', 'Advanced DDoS Protection', 'Object Caching Pro', 'Dedicated Account Manager'],
      highlighted: false,
    }
  ]

  return (
    <div className="page pb-20 pt-32 relative">
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="section-label mb-4"><Server size={14} className="mr-1" inline /> Flexible Deployment</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Transparent pricing for everyone.
          </h1>
          <p className="text-lg text-soft max-w-2xl mx-auto mb-10">
            No hidden fees, no complicated contracts. Choose the plan that perfectly fits your project's needs.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-surface-2 p-1.5 rounded-full border border-white/10 shadow-inner">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${billing === 'monthly' ? 'bg-surface text-accent shadow-card border border-accent/20' : 'text-soft hover:text-accent'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${billing === 'yearly' ? 'bg-surface text-accent shadow-card border border-accent/20' : 'text-soft hover:text-accent'}`}
            >
              Annually <span className="bg-green/15 text-green text-[10px] px-2 py-0.5 rounded-full border border-green/20">SAVE 40%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative mb-32">
          {pricings.map((pricing, i) => (
            <div 
              key={pricing.id} 
              className={`card card-overflow-visible relative p-8 lg:p-10 flex flex-col animate-fadeInUp ${pricing.highlighted ? 'border-blue-500/80 shadow-glow scale-[1.02] md:-translate-y-4 bg-gradient-to-br from-blue-50 via-white to-surface' : 'border-blue-200/40 mt-4'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {pricing.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-200 shadow-glow z-20">
                  {pricing.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">{pricing.name}</h3>
                <p className="text-slate-600 text-sm min-h-[40px]">{pricing.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-soft">$</span>
                  <span className="text-5xl font-black font-heading text-slate-900 tracking-tight">{pricing.price}</span>
                  <span className="text-soft font-medium">/mo</span>
                </div>
                {billing === 'yearly' && (
                  <p className="text-green text-sm font-semibold mt-2 border border-green/20 bg-green/10 inline-block px-2 py-0.5 rounded">Billed annually</p>
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
                className={`w-full py-4 rounded-xl font-heading font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface ${pricing.highlighted ? 'btn-primary' : 'bg-surface-2 text-slate-900 border border-blue-200 hover:border-accent hover:bg-surface'}`}
              >
                {isSubscribed ? 'Change Plan' : 'Deploy Now'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto border-t border-white/10 pt-20 animate-fadeInUp">
          <h3 className="font-heading text-3xl font-black text-center mb-10">Frequently Asked Questions</h3>
          <div className="grid gap-6">
            <div className="card p-6 border-white/5">
              <h4 className="font-bold text-lg mb-2 text-slate-900">Can I upgrade my plan later?</h4>
              <p className="text-slate-600 text-sm">Absolutely. Our cloud infrastructure allows you to scale up seamlessly. You can upgrade from Starter to Premium or Enterprise at any time from your dashboard without any downtime.</p>
            </div>
            <div className="card p-6 border-white/5">
              <h4 className="font-bold text-lg mb-2 text-slate-900">Where are your servers located?</h4>
              <p className="text-soft text-sm">We operate state-of-the-art datacenters in New York, London, Singapore, and Frankfurt. You can choose your preferred region during the deployment process.</p>
            </div>
            <div className="card p-6 border-white/5">
              <h4 className="font-bold text-lg mb-2 text-slate-900">Do you offer a money-back guarantee?</h4>
              <p className="text-soft text-sm">Yes, we provide a 30-day money-back guarantee on all hosting plans. If you're not fully satisfied with performance, we'll refund your hosting costs, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
