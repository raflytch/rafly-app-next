# CI/CD Pipeline Documentation

Panduan lengkap untuk CI/CD pipeline project Rafly App Next.

## 📋 Overview

Project ini menggunakan GitHub Actions untuk CI/CD dengan workflow berikut:

1. **ci-cd.yml** - Main CI/CD pipeline (GitHub Container Registry)
2. **dockerhub.yml** - Docker Hub deployment
3. **deploy-staging.yml** - Staging environment deployment
4. **security.yml** - Security dan quality checks

## 🚀 Workflow Details

### 1. Main CI/CD Pipeline (ci-cd.yml)

**Trigger:**

- Push ke branch `main`
- Pull request ke branch `main`
- Manual trigger

**Jobs:**

- **test**: Build dan test aplikasi
- **docker-build**: Build dan push Docker image ke GHCR
- **deploy**: Deploy ke production (hanya untuk main branch)
- **notify**: Kirim notifikasi hasil deployment

### 2. Docker Hub Pipeline (dockerhub.yml)

**Trigger:**

- Push ke branch `main`
- Pull request ke branch `main`
- Manual trigger

**Fitur:**

- Build multi-platform (amd64, arm64)
- Push ke Docker Hub
- Artifact attestation untuk security

### 3. Staging Deployment (deploy-staging.yml)

**Trigger:**

- Push ke branch `develop` atau `staging`
- Manual trigger dengan pilihan environment

**Fitur:**

- SSH deployment ke server
- Health check otomatis
- Rollback jika gagal

### 4. Security Pipeline (security.yml)

**Trigger:**

- Push ke `main` atau `develop`
- Pull request

**Checks:**

- Security audit (pnpm audit)
- CodeQL analysis
- Dependency review
- ESLint
- TypeScript check
- Docker security scan (Trivy)

## 🔧 Setup Repository Secrets

Untuk menjalankan pipeline dengan lengkap, tambahkan secrets berikut di repository settings:

### GitHub Container Registry (GHCR)

```bash
# Sudah tersedia otomatis: GITHUB_TOKEN
```

### Docker Hub (Opsional)

```bash
DOCKERHUB_USERNAME=your_dockerhub_username
DOCKERHUB_TOKEN=your_dockerhub_access_token
```

### SSH Deployment (Untuk Staging/Production)

```bash
SSH_PRIVATE_KEY=your_ssh_private_key
SERVER_USER=server_username
SERVER_HOST=your_server_ip_or_domain
```

## 📦 Docker Image

### GitHub Container Registry

```bash
docker pull ghcr.io/raflytch/rafly-app-next:latest
```

### Docker Hub

```bash
docker pull raflytch/rafly-app-next:latest
```

## 🏃‍♂️ Local Development

### Prerequisites

- Node.js 20+
- pnpm
- Docker (untuk testing)

### Setup

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build application
pnpm build

# Build Docker image
docker build -t rafly-app-next .

# Run with Docker
docker run -p 3000:3000 rafly-app-next
```

## 🔍 Monitoring & Troubleshooting

### Check Workflow Status

1. Buka tab "Actions" di repository GitHub
2. Klik workflow yang ingin dicek
3. Lihat logs untuk setiap step

### Common Issues

#### Build Gagal

```bash
# Check Node.js version
node --version

# Check pnpm version
pnpm --version

# Clear cache
pnpm store prune
```

#### Docker Build Gagal

```bash
# Check Docker version
docker --version

# Clean Docker cache
docker system prune -a
```

#### SSH Connection Gagal

```bash
# Test SSH connection manually
ssh -i private_key user@server

# Check server firewall
sudo ufw status
```

## 📊 Pipeline Stages

### 1. Test Stage

- ✅ Install dependencies
- ✅ Run linting
- ✅ Build application
- ✅ Upload artifacts

### 2. Build Stage

- ✅ Setup Docker Buildx
- ✅ Login to registry
- ✅ Build multi-platform image
- ✅ Push to registry

### 3. Deploy Stage

- ✅ SSH to server
- ✅ Pull latest image
- ✅ Stop old container
- ✅ Start new container
- ✅ Health check

### 4. Security Stage

- ✅ Dependency audit
- ✅ CodeQL analysis
- ✅ Docker security scan
- ✅ TypeScript check

## 🎯 Best Practices

### Branch Strategy

- `main`: Production code
- `develop`: Development code
- `feature/*`: Feature branches
- `hotfix/*`: Hotfix branches

### Commit Messages

```bash
feat: add new feature
fix: bug fix
docs: documentation update
style: code style changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

### Pull Request

- ✅ Tests pass
- ✅ Code review approved
- ✅ Security checks pass
- ✅ Documentation updated

## 📞 Support

Untuk pertanyaan atau issues:

- **Nama**: Rafly Aziz Abdillah
- **NIM**: 2210512003
- **Universitas**: UPN Veteran Jakarta
- **Mata Kuliah**: Cloud Computing

---

**Happy Deploying! 🚀**
