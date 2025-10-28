# Rafly App Next - Docker Deployment

Portfolio website dengan multi-language support untuk mata kuliah Cloud Computing.

## 🚀 Quick Start dengan Docker

### Menggunakan Docker Compose (Recommended)

```bash
docker-compose up --build
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

### Menggunakan Docker

```bash
docker build -t rafly-app-next .
docker run -p 3000:3000 rafly-app-next
```

## 🏗️ CI/CD Pipeline

Project ini menggunakan GitHub Actions untuk build dan push Docker image ke Docker Hub otomatis.

### Workflows Tersedia:

1. **ci-cd.yml** - Build dan push Docker image ke Docker Hub

### Setup Secrets (Repository Settings → Secrets and variables → Actions):

```bash
DOCKERHUB_USERNAME=raflytch
DOCKERHUB_TOKEN=your_access_token_from_docker_hub
```

## 📦 Teknologi

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **next-intl** - Internationalization (7 bahasa)
- **Poppins Font** - Typography
- **shadcn/ui** - UI Components
- **Tailwind CSS** - Styling
- **Docker** - Containerization
- **GitHub Actions** - CI/CD

## 🌍 Bahasa yang Didukung

1. 🇮🇩 Bahasa Indonesia
2. 🇬🇧 English
3. 🇨🇳 中文 (Mandarin)
4. 🇫🇷 Français
5. 🇪🇸 Español
6. 🇷🇺 Русский
7. 🇸🇦 العربية

## 👤 Informasi

- **Nama**: Rafly Aziz Abdillah
- **NIM**: 2210512003
- **Universitas**: UPN Veteran Jakarta
- **Mata Kuliah**: Cloud Computing

## 🛠️ Development

### Prerequisites

- Node.js 20+
- pnpm
- Docker (untuk testing)

### Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build untuk production
pnpm build

# Run linting
pnpm lint

# Type check
pnpm type-check
```

## 🐳 Docker Commands

### Production

```bash
# Build image
docker build -t rafly-app-next .

# Run container
docker run -d -p 3000:3000 --name rafly-app rafly-app-next
```

### Development

```bash
# Development dengan hot reload
docker-compose -f docker-compose.dev.yml up --build
```

## 📁 Struktur Project

```
rafly-app-next/
├── .github/
│   └── workflows/          # CI/CD workflows
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── ui/
│   ├── i18n/
│   │   ├── config.ts
│   │   └── request.ts
│   └── middleware.ts
├── messages/               # Translation files
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Production compose
├── docker-compose.dev.yml  # Development compose
└── package.json
```

## 🎨 Desain

- **Font**: Poppins
- **Border**: Border tipis 2px
- **No Gradient**: Desain minimalis
- **No Shadow**: Clean interface
- **Responsive**: Mobile-first design

## 📝 Fitur

- ✅ Multi-language (i18n)
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Docker containerization
- ✅ CI/CD pipeline
- ✅ Production ready

## 🚀 Deployment

### Docker Hub (Otomatis via CI/CD)

```bash
docker pull raflytch/rafly-app-next:latest
```

### Manual Deploy

```bash
# Clone repository
git clone https://github.com/raflytch/rafly-app-next.git
cd rafly-app-next

# Build dan run
docker-compose up --build
```

## 📞 Support

Untuk pertanyaan atau issues:

- **Nama**: Rafly Aziz Abdillah
- **NIM**: 2210512003
- **Universitas**: UPN Veteran Jakarta
- **Mata Kuliah**: Cloud Computing

---
