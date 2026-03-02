import { base } from '$app/paths';

/**
 * Aggiunge il base path configurato all'URL fornito
 * Utile per GitHub Pages quando il sito è in una sottocartella
 */
export function withBase(path: string): string {
  // Rimuovi eventuali slash iniziali dal path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Aggiungi il base path se non vuoto
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
}
