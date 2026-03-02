<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Rooms from '$lib/components/Rooms.svelte';
	import GallerySection from '$lib/components/GallerySection.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	import { withBase } from '$lib/utils';
	
	// Dati per Cucina
	const kitchenImages = [
		{ src: withBase('img/cucina/IMG_20230904_173045.jpg'), alt: 'Cucina 1' },
		{ src: withBase('img/cucina/IMG_20230904_173050.jpg'), alt: 'Cucina 2' },
		{ src: withBase('img/cucina/IMG_20230904_173055.jpg'), alt: 'Cucina 3' },
		{ src: withBase('img/cucina/IMG_20230904_173059.jpg'), alt: 'Cucina 4' },
		{ src: withBase('img/cucina/IMG_20230904_173104.jpg'), alt: 'Cucina 5' },
		{ src: withBase('img/cucina/IMG_20230904_173109.jpg'), alt: 'Cucina 6' }
	];
	
	// Dati per Bagni
	const bathroomImages = [
		{ src: withBase('img/bagni/IMG_20230904_172958.jpg'), alt: 'Bagno 1' },
		{ src: withBase('img/bagni/IMG_20230904_173000.jpg'), alt: 'Bagno 2' },
		{ src: withBase('img/bagni/IMG_20230904_173005.jpg'), alt: 'Bagno 3' },
		{ src: withBase('img/bagni/IMG_20230904_173017.jpg'), alt: 'Bagno 4' },
		{ src: withBase('img/bagni/IMG_20230904_173020.jpg'), alt: 'Bagno 5' },
		{ src: withBase('img/bagni/IMG_20230904_173030.jpg'), alt: 'Bagno 6' }
	];
</script>

<svelte:head>
	<title>Etna 1928 Country House | B&B in Sicilia</title>
	<meta name="description" content="Country house storica ai piedi dell'Etna. Camere confortevoli, cucina tradizionale siciliana e ospitalità autentica dal 1928." />
	<meta name="keywords" content="country house, b&b sicilia, etna, bed and breakfast, sicilia, alloggio sicilia" />
	
	<!-- Open Graph -->
	<meta property="og:title" content="Etna 1928 Country House | B&B in Sicilia" />
	<meta property="og:description" content="Country house storica ai piedi dell'Etna. Camere confortevoli, cucina tradizionale siciliana e ospitalità autentica dal 1928." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://etna-1928-country-house.github.io/Etna-1928-Country-House/" />
	<meta property="og:image" content="https://etna-1928-country-house.github.io/Etna-1928-Country-House/img/principali/IMG_20230904_173208.jpg" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Etna 1928 Country House | B&B in Sicilia" />
	<meta name="twitter:description" content="Country house storica ai piedi dell'Etna. Ospitalità autentica dal 1928." />
	<meta name="twitter:image" content="https://etna-1928-country-house.github.io/Etna-1928-Country-House/img/principali/IMG_20230904_173208.jpg" />
	
	<!-- Schema.org -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LodgingBusiness",
			"name": "Etna 1928 Country House",
			"image": "https://etna-1928-country-house.github.io/Etna-1928-Country-House/img/principali/IMG_20230904_173208.jpg",
			"description": "Country house storica ai piedi dell'Etna. Camere confortevoli, cucina tradizionale siciliana e ospitalità autentica dal 1928.",
			"address": {
				"@type": "PostalAddress",
				"addressCountry": "IT",
				"addressRegion": "Sicilia"
			},
			"telephone": "+393337397919",
			"priceRange": "$$",
			"starRating": {
				"@type": "Rating",
				"ratingValue": "5"
			}
		}
	</script>
</svelte:head>

<div class="min-h-screen">
	<Header />
	<main>
		<Hero />
		<Rooms />
		<GallerySection 
			id="cucina" 
			title="La Nostra Cucina" 
			subtitle="Sapori autentici della tradizione siciliana preparati con ingredienti locali"
			images={kitchenImages}
		/>
		<GallerySection 
			id="bagni" 
			title="Bagni Moderni" 
			subtitle="Confort e privacy con servizi igienici moderni e funzionali"
			images={bathroomImages}
		/>
		<Reviews />
		<Contacts />
	</main>
	<Footer />
</div>
