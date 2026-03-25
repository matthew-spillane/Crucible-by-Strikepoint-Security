import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { AlertCircle } from 'lucide-react'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await signIn(email, password)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Authentication failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center bg-surface px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,194,255,0.08),transparent)] pointer-events-none" />

      <div className="w-full max-w-sm relative z-10">
        <div className="flex flex-col items-center mb-10">
          <div className="w-14 h-14 mb-4">
            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
              <polygon points="28,4 52,40 4,40" fill="none" stroke="#00C2FF" strokeWidth="2.5" />
              <polygon points="28,16 42,40 14,40" fill="#00C2FF" opacity="0.12" />
              <line x1="28" y1="16" x2="28" y2="33" stroke="#00C2FF" strokeWidth="2" />
              <circle cx="28" cy="35.5" r="2" fill="#00C2FF" />
            </svg>
          </div>
          <h1 className="font-heading font-bold text-2xl text-text-primary tracking-wide">CRUCIBLE</h1>
          <p className="font-mono text-[11px] text-text-muted mt-1 tracking-widest uppercase">Strikepoint Security</p>
        </div>

        <div className="bg-surface-1 border border-border rounded p-6 shadow-xl">
          <div className="mb-6">
            <h2 className="font-heading font-bold text-base text-text-primary">Operator Access</h2>
            <p className="font-body text-xs text-text-secondary mt-1">Authenticate to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="operator@strikepoint.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            {error && (
              <div className="flex items-center gap-2 px-3 py-2 bg-danger/10 border border-danger/30 rounded">
                <AlertCircle size={13} className="text-danger shrink-0" />
                <span className="font-mono text-[11px] text-danger">{error}</span>
              </div>
            )}

            <Button type="submit" loading={loading} className="w-full mt-1">
              {loading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>
        </div>

        <p className="text-center font-mono text-[10px] text-text-muted mt-6">
          CRUCIBLE v1.0.0 — SEGMENT 1 — AUTHORIZED ACCESS ONLY
        </p>
      </div>
    </div>
  )
}
