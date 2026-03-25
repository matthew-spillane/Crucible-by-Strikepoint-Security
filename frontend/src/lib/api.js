import { supabase } from './supabase'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

async function getAuthHeaders() {
  const { data: { session } } = await supabase.auth.getSession()
  return {
    'Content-Type': 'application/json',
    ...(session?.access_token && { Authorization: `Bearer ${session.access_token}` }),
  }
}

async function request(method, path, body) {
  const headers = await getAuthHeaders()
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    throw new Error(err.detail || `Request failed: ${res.status}`)
  }

  return res.json()
}

export const api = {
  get: (path) => request('GET', path),
  post: (path, body) => request('POST', path, body),
  put: (path, body) => request('PUT', path, body),
  delete: (path) => request('DELETE', path),

  health: () => api.get('/health'),
  recon: {
    run: (payload) => api.post('/recon', payload),
  },
  webvuln: {
    run: (payload) => api.post('/webvuln', payload),
  },
  osint: {
    run: (payload) => api.post('/osint', payload),
  },
  payload: {
    generate: (payload) => api.post('/payload', payload),
  },
  intel: {
    query: (payload) => api.post('/intel', payload),
  },
  reporter: {
    generate: (payload) => api.post('/reporter', payload),
  },
  auto: {
    run: (payload) => api.post('/auto', payload),
    status: (id) => api.get(`/auto/${id}`),
  },
}
