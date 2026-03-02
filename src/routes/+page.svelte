<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
		<Reviews />
		<Contacts />
	</main>
	<Footer />
</div>
