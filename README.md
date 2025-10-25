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

## 📦 Teknologi

- **Next.js 16** - React Framework
- **TypeScript** - Type Safety
- **next-intl** - Internationalization (7 bahasa)
- **Poppins Font** - Typography
- **shadcn/ui** - UI Components
- **Tailwind CSS** - Styling
- **Docker** - Containerization

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

- Node.js 20 atau lebih tinggi
- pnpm

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

### Build untuk Production

```bash
pnpm build
pnpm start
```

## 🐳 Docker Commands

### Build Image

```bash
docker build -t rafly-app-next .
```

### Run Container

```bash
docker run -d -p 3000:3000 --name rafly-app rafly-app-next
```

### Stop Container

```bash
docker stop rafly-app
```

### Remove Container

```bash
docker rm rafly-app
```

### View Logs

```bash
docker logs rafly-app
```

## 📁 Struktur Project

```
rafly-app-next/
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
├── messages/
│   ├── id.json
│   ├── en.json
│   ├── zh.json
│   ├── fr.json
│   ├── es.json
│   ├── ru.json
│   └── ar.json
├── Dockerfile
├── docker-compose.yml
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
- ✅ Production-ready
- ✅ Clean & minimal UI

---

© 2025 Rafly Aziz Abdillah - UPN Veteran Jakarta

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
