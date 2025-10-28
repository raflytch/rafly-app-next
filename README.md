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

Project ini menggunakan GitHub Actions untuk CI/CD otomatis:

### Workflows Tersedia:

1. **ci-cd.yml** - Main pipeline (GitHub Container Registry)
2. **dockerhub.yml** - Docker Hub deployment
3. **deploy-staging.yml** - Staging environment deployment
4. **security.yml** - Security dan quality checks

### Setup Secrets (Repository Settings → Secrets and variables → Actions):

```bash
# Untuk Docker Hub (opsional)
DOCKERHUB_USERNAME=your_username
DOCKERHUB_TOKEN=your_access_token

# Untuk SSH Deployment (staging/production)
SSH_PRIVATE_KEY=your_private_key
SERVER_USER=server_username
SERVER_HOST=your_server_ip
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

# Dengan nginx reverse proxy
docker-compose up --build
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
├── nginx.conf              # Reverse proxy config
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
- ✅ Security scanning
- ✅ Production ready

## 🔒 Security Features

- Docker security scanning (Trivy)
- CodeQL analysis
- Dependency review
- Security audit
- Artifact attestation

## 📊 CI/CD Stages

1. **Test** - Build & test aplikasi
2. **Security** - Security scanning
3. **Build** - Docker image build
4. **Deploy** - Auto deployment
5. **Notify** - Status notification

## 🚀 Deployment Options

### GitHub Container Registry (Default)

```bash
docker pull ghcr.io/raflytch/rafly-app-next:latest
```

### Docker Hub (Opsional)

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
