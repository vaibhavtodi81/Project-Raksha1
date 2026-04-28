import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Eye, EyeOff, MapPin, Lock, Phone, User, Mail, UserPlus } from 'lucide-react'
import authBg from '../../assets/auth-bg.png'
import heroBg from '../../assets/hero-bg.png'

const features = [
  { icon: <Shield className="w-5 h-5" />, title: 'SOS Alerts', description: 'Instant alerts to trusted contacts' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Live Location', description: 'Share your location in emergencies' },
  { icon: <Lock className="w-5 h-5" />, title: 'Evidence Vault', description: 'Securely store important proof' },
]

const dotPattern = {
  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
  backgroundSize: '32px 32px'
}

const inputCls = "w-full bg-[#f9f8f6]/50 border border-[#e0ddd8] rounded-xl pl-11 pr-4 py-3 text-[#1a1a1a] placeholder-[#999] text-sm focus:outline-none focus:ring-2 focus:ring-[#610c27]/20 focus:border-[#610c27]/40 transition-all backdrop-blur-sm"
const iconCls = "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b3b3b3] group-focus-within:text-[#610c27] transition-colors z-10"

const Register = () => {
  const [showPw, setShowPw] = useState(false)
  const [showCf, setShowCf] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const [f, setF] = useState({ name: '', email: '', phone: '', password: '', confirm: '', eName: '', ePhone: '' })
  const u = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => { setIsLoading(false); navigate('/dashboard') }, 1500)
  }

  return (
    <div className="min-h-screen flex bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'left center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f3f0]/95 via-[#f4f3f0]/80 to-transparent lg:to-black/20" />
      </div>

      {/* LEFT — Register Form */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-[440px]">
          <Link to="/" className="flex items-center gap-2.5 mb-8 group">
            <div className="w-9 h-9 rounded-lg bg-[#610c27] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Shield className="w-4 h-4 text-[#efece9]" />
            </div>
            <span className="text-lg font-bold font-display text-[#1a1a1a] italic uppercase tracking-tight">Raksha</span>
          </Link>

          <div 
            className="relative overflow-hidden bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-[#050505]/[0.04] p-8 sm:p-10"
            style={{ backgroundImage: `url(${authBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Soft Overlay for legibility */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] z-0" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-[28px] font-bold font-display text-[#1a1a1a] italic uppercase tracking-tight mb-1.5">
                  Create <span className="text-[#610c27]">Account</span>
                </h1>
                <p className="text-sm text-[#666] font-medium">Join the movement to build a safer world</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full Name */}
                <div className="relative group">
                  <User className={iconCls} />
                  <input id="reg-name" type="text" value={f.name} onChange={u('name')} placeholder="Full Name" className={inputCls} required />
                </div>

                {/* Email */}
                <div className="relative group">
                  <Mail className={iconCls} />
                  <input id="reg-email" type="email" value={f.email} onChange={u('email')} placeholder="Email Address" className={inputCls} required />
                </div>

                {/* Phone */}
                <div className="relative group">
                  <Phone className={iconCls} />
                  <input id="reg-phone" type="tel" value={f.phone} onChange={u('phone')} placeholder="Phone Number" className={inputCls} required />
                </div>

                {/* Password */}
                <div className="relative group">
                  <Lock className={iconCls} />
                  <input id="reg-pw" type={showPw ? 'text' : 'password'} value={f.password} onChange={u('password')} placeholder="Create Password" className={inputCls + " !pr-16"} required />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#610c27] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 z-10">
                    {showPw ? <><EyeOff className="w-3.5 h-3.5" /> Hide</> : <><Eye className="w-3.5 h-3.5" /> Show</>}
                  </button>
                </div>

                {/* Confirm */}
                <div className="relative group">
                  <Lock className={iconCls} />
                  <input id="reg-cf" type={showCf ? 'text' : 'password'} value={f.confirm} onChange={u('confirm')} placeholder="Confirm Password" className={inputCls + " !pr-16"} required />
                  <button type="button" onClick={() => setShowCf(!showCf)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#610c27] transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-1 z-10">
                    {showCf ? <><EyeOff className="w-3.5 h-3.5" /> Hide</> : <><Eye className="w-3.5 h-3.5" /> Show</>}
                  </button>
                </div>

                {/* Emergency Contact Divider */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex-1 h-px bg-[#610c27]/10" />
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#610c27]/50 flex items-center gap-1.5">
                    <UserPlus className="w-3 h-3" /> Emergency Contact
                  </span>
                  <div className="flex-1 h-px bg-[#610c27]/10" />
                </div>

                {/* Emergency Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative group">
                    <User className={iconCls} />
                    <input id="em-name" type="text" value={f.eName} onChange={u('eName')} placeholder="Contact Name" className={inputCls} required />
                  </div>
                  <div className="relative group">
                    <Phone className={iconCls} />
                    <input id="em-phone" type="tel" value={f.ePhone} onChange={u('ePhone')} placeholder="Contact Phone" className={inputCls} required />
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-3 bg-[#610c27] hover:bg-[#4d0a1f] text-white font-bold text-sm uppercase tracking-[0.12em] py-3.5 rounded-xl transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md hover:-translate-y-px active:translate-y-0 mt-1">
                  {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Create Account'}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-5">
                <div className="flex-1 h-px bg-[#e0ddd8]" />
                <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[#999]">Or sign up with</span>
                <div className="flex-1 h-px bg-[#e0ddd8]" />
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/50 border border-[#e0ddd8] rounded-xl py-2.5 text-sm font-semibold text-[#555] hover:border-[#610c27]/25 hover:text-[#610c27] transition-all backdrop-blur-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                  Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/50 border border-[#e0ddd8] rounded-xl py-2.5 text-sm font-semibold text-[#555] hover:border-[#610c27]/25 hover:text-[#610c27] transition-all backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                  Apple
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/50 border border-[#e0ddd8] rounded-xl py-2.5 text-sm font-semibold text-[#555] hover:border-[#610c27]/25 hover:text-[#610c27] transition-all backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  Facebook
                </button>
              </div>

              <p className="text-center mt-5 text-sm text-[#666] font-medium">
                Already have an account?{' '}
                <Link to="/login" className="text-[#610c27] font-bold hover:underline underline-offset-4">Sign In</Link>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 relative z-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#999]">© 2026 Project Raksha</span>
            <span className="text-[#ccc]">|</span>
            <Link to="/" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#999] hover:text-[#610c27] transition-colors">Privacy Policy</Link>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — Empowerment Panel */}
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#610c27] via-[#4d0a1f] to-[#2a050f]" />
        <div className="absolute inset-0 opacity-[0.06]" style={dotPattern} />

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          <div className="space-y-5 mt-8">
            <h2 className="text-4xl xl:text-5xl font-bold font-display text-white italic uppercase tracking-tight leading-[1.1]">
              You are stronger.<br /><span className="text-[#e3c1b4]">We are with you.</span>
            </h2>
            <p className="text-base text-white/60 font-medium max-w-sm leading-relaxed">
              One tap can connect you to help when it matters most. Project Raksha keeps you protected — always.
            </p>
          </div>

          <div className="space-y-4 my-auto py-8">
            {features.map((feat, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#e3c1b4]">{feat.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-0.5">{feat.title}</h3>
                  <p className="text-xs text-white/50 font-medium">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-5 px-8 py-6 rounded-2xl bg-white/[0.12] border border-white/[0.15] shadow-lg backdrop-blur-md group hover:bg-white/[0.18] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-red-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1">Emergency Support</span>
              <span className="text-lg font-bold text-white uppercase tracking-[0.1em]">
                In an emergency? Call <span className="text-red-500 ml-1">1091</span>
              </span>
            </div>
            <div className="ml-auto w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Register
