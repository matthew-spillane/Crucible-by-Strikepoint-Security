# Crucible — Strikepoint Security

Professional-grade personal pentesting suite and autonomous AI security platform.

## Stack

| Layer | Technology | Deploy Target |
|-------|-----------|---------------|
| Frontend | React + Vite + Tailwind | Vercel |
| Backend | FastAPI | Railway |
| Database + Auth | Supabase | Supabase Cloud |

## Project Structure

```
crucible/
  frontend/       React/Vite app
  backend/        FastAPI service
  supabase/       Database migrations
```

## Local Development

### Prerequisites
- Node 18+
- Python 3.11+
- Supabase CLI (optional, for local DB)

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Backend

```bash
cd backend
cp .env.example .env
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Environment Variables

**Frontend** (`frontend/.env.local`):
```
VITE_API_URL=http://localhost:8000
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Backend** (`backend/.env`):
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
CORS_ORIGINS=http://localhost:5173,https://your-vercel-app.vercel.app
```

## Segments

- **Segment 1** — Foundation: scaffold, auth, all stubs ✅
- **Segment 2** — Module logic: Recon, Web Vuln, OSINT, Payload Lab
- **Segment 3** — Auto Mode: agentic Claude reasoning engine
- **Segment 4** — Reporting, polish, production hardening
