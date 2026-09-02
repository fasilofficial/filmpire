import { useEffect } from 'react';

const DEFAULT_TITLE = 'FilmPire - Discover Movies, TV Shows & Editorial Guides';
const DEFAULT_DESC =
  'Discover movies, explore curated genres, read in-depth editorial guides, and find something worth watching on FilmPire. Powered by authentic movie data.';
const BASE_URL = 'https://filmpire-page.vercel.app';
const DEFAULT_IMAGE = 'https://filmpire-page.vercel.app/logo.png';

function setMetaTag(name, content, attribute = 'name') {
  if (!content) return;
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setJsonLd(id, data) {
  const scriptId = `json-ld-${id}`;
  let script = document.getElementById(scriptId);
  if (!data) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  schema,
  schemaId = 'page',
  noindex = false,
}) {
  useEffect(() => {
    // Set Document Title
    const formattedTitle = title ? `${title} | FilmPire` : DEFAULT_TITLE;
    document.title = formattedTitle;

    // Standard Meta Tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    setMetaTag('robots', noindex ? 'noindex, follow' : 'index, follow');

    // Canonical URL
    const canonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${BASE_URL}${canonicalUrl}`) : window.location.href;
    setCanonical(canonical);

    // Open Graph
    setMetaTag('og:title', formattedTitle, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonical, 'property');
    setMetaTag('og:image', ogImage, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:site_name', 'FilmPire', 'property');

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', formattedTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Structured Data (JSON-LD)
    if (schema) {
      setJsonLd(schemaId, schema);
    }

    return () => {
      // Clean up dynamic JSON-LD on unmount
      if (schemaId) {
        setJsonLd(schemaId, null);
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schema, schemaId, noindex]);

  return null;
}
