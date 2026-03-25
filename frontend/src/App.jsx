import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Sidebar from './components/layout/Sidebar'
import TopBar from './components/layout/TopBar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Engagements from './pages/Engagements'
import Targets from './pages/Targets'
import Recon from './pages/Recon'
import WebVuln from './pages/WebVuln'
import Osint from './pages/Osint'
import PayloadLab from './pages/PayloadLab'
import ThreatIntel from './pages/ThreatIntel'
import Reporter from './pages/Reporter'
import AutoMode from './pages/AutoMode'
import Settings from './pages/Settings'

function ProtectedLayout({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-surface">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">Authenticating</span>
        </div>
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-surface">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route path="/" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      <Route path="/engagements" element={<ProtectedLayout><Engagements /></ProtectedLayout>} />
      <Route path="/targets" element={<ProtectedLayout><Targets /></ProtectedLayout>} />
      <Route path="/recon" element={<ProtectedLayout><Recon /></ProtectedLayout>} />
      <Route path="/webvuln" element={<ProtectedLayout><WebVuln /></ProtectedLayout>} />
      <Route path="/osint" element={<ProtectedLayout><Osint /></ProtectedLayout>} />
      <Route path="/payload" element={<ProtectedLayout><PayloadLab /></ProtectedLayout>} />
      <Route path="/intel" element={<ProtectedLayout><ThreatIntel /></ProtectedLayout>} />
      <Route path="/reporter" element={<ProtectedLayout><Reporter /></ProtectedLayout>} />
      <Route path="/auto" element={<ProtectedLayout><AutoMode /></ProtectedLayout>} />
      <Route path="/settings" element={<ProtectedLayout><Settings /></ProtectedLayout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
