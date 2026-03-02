# 🏡 Etna 1928 Country House

![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?style=flat&logo=svelte)
![SvelteKit](https://img.shields.io/badge/SvelteKit-2-FF3E00?style=flat&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)

> Country house storica ai piedi dell'Etna. Ospitalità autentica dal 1928.

## 🚀 Stack Tecnologico

### Frontend Framework
- **Svelte 5** - Next-generation reactive framework con la nuova Runes API
- **SvelteKit** - Full-stack framework con capacità SSR e generazione di siti statici
- **TypeScript** - Sviluppo type-safe per maggiore robustezza del codice

### Build & Development
- **Vite** - Build tool ultra-veloce con HMR istantaneo
- **Bun** *(Opzionale)* - Runtime JavaScript e package manager ultra-performante
  - *Nota: Il progetto funziona anche con Node.js e npm*

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework per design moderno
- **Custom CSS** - Animazioni personalizzate e effetti avanzati
- **Google Fonts** - Inter & Playfair Display per tipografia elegante

### Deployment & CI/CD
- **GitHub Actions** - Pipeline di deployment automatizzato
- **GitHub Pages** - Hosting statico gratuito e affidabile

## 🛠️ Installazione

### Prerequisiti
- Node.js 20+ o [Bun](https://bun.sh) (opzionale)

### Con npm (consigliato)
```bash
# Clona il repository
git clone https://github.com/Etna-1928-Country-House/Etna-1928-Country-House.git
cd Etna-1928-Country-House

# Installa dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

### Con Bun (opzionale, più veloce)
```bash
# Installa Bun (se non già installato)
curl -fsSL https://bun.sh/install | bash

# Installa dipendenze
bun install

# Avvia il server di sviluppo
bun run dev
```

## 📦 Script Disponibili

```bash
# Sviluppo con hot reload
npm run dev

# Build di produzione
npm run build

# Anteprima build di produzione
npm run preview

# Type checking
npm run check

# Type checking in watch mode
npm run check:watch
```

## 🏗️ Struttura del Progetto

```
Etna-1928-Country-House/
├── src/
│   ├── lib/
│   │   └── components/       # Componenti Svelte riutilizzabili
│   │       ├── Header.svelte
│   │       ├── Hero.svelte
│   │       ├── Rooms.svelte
│   │       ├── GallerySection.svelte
│   │       ├── Reviews.svelte
│   │       ├── Contacts.svelte
│   │       └── Footer.svelte
│   ├── routes/               # Routes e pagine
│   │   ├── +layout.svelte    # Layout globale
│   │   └── +page.svelte      # Home page
│   ├── app.css               # Stili globali e Tailwind
│   └── app.html              # Template HTML base
├── static/                   # Asset statici (immagini, favicon)
│   ├── img/
│   ├── recensioni/
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── svelte.config.js          # Configurazione SvelteKit
├── tailwind.config.js        # Configurazione Tailwind
├── vite.config.js            # Configurazione Vite
└── tsconfig.json             # Configurazione TypeScript
```

## 🎨 Features

✨ **Design Moderno**
- Colori naturali (verde oliva & marrone)
- Animazioni fluide e moderne
- Responsive design mobile-first
- Glass morphism effects

📸 **Gallery Interattive**
- Lightbox per immagini a schermo intero
- Transizioni smooth
- Lazy loading per performance ottimali

⭐ **Carousel Recensioni**
- 13 recensioni autentiche da Booking.com
- Autoplay con controlli manuali
- Navigazione intuitiva

📱 **Pulsanti Floating**
- WhatsApp e telefono sempre accessibili
- Animazioni accattivanti
- Posizionamento strategico

🚀 **Performance**
- Static Site Generation (SSG)
- Prerendering automatico
- Build ottimizzate con Vite

## 🌐 Deployment

Il sito viene automaticamente deployato su GitHub Pages ad ogni push su `main`.

### Configurazione GitHub Pages

1. Vai su **Settings** > **Pages**
2. Source: **GitHub Actions**
3. Il workflow `.github/workflows/deploy.yml` gestirà tutto automaticamente

### URL Produzione
```
https://etna-1928-country-house.github.io/Etna-1928-Country-House/
```

## 🔧 Configurazione Adapter

Il progetto usa `@sveltejs/adapter-static` per generare un sito statico:

```javascript
// svelte.config.js
adapter: adapter({
  pages: 'build',
  assets: 'build',
  fallback: undefined,
  precompress: false,
  strict: true
})
```

## 📝 Note Tecniche

### Svelte 5 Runes API
Questo progetto usa la nuova sintassi di Svelte 5:

```typescript
// State reattivo
let count = $state(0);

// Props
let { title, subtitle } = $props();

// Effects
$effect(() => {
  console.log('Count changed:', count);
});
```

### TypeScript
Type safety completo con inferenza automatica:

```typescript
interface Props {
  id: string;
  title: string;
  images: Array<{ src: string; alt: string }>;
}
```

### Tailwind CSS
Classi utility per sviluppo rapido:

```html
<div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
  <!-- Content -->
</div>
```

## 🤝 Contribuire

1. Fork il progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

© 2026 Etna 1928 Country House — Tutti i diritti riservati

## 📞 Contatti

- **Telefono**: +39 333 739 7919
- **WhatsApp**: [Contattaci](https://wa.me/393337397919)
- **Email**: info@etna1928.com

---

Sviluppato con 💚 usando **Svelte 5**, **SvelteKit**, **TypeScript** & **Tailwind CSS**

