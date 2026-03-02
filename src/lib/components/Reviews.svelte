<script lang="ts">
	import { onMount } from 'svelte';
	import { withBase } from '$lib/utils';
	
	let currentReview = $state(0);
	let selectedImage = $state<string | null>(null);
	let autoplayInterval: ReturnType<typeof setInterval>;
	
	const reviews = Array.from({ length: 13 }, (_, i) => ({
		src: withBase(`recensioni/Screenshot_${i + 1}.png`),
		alt: `Recensione ${i + 1}`
	}));
	
	function nextReview() {
		currentReview = (currentReview + 1) % reviews.length;
	}
	
	function prevReview() {
		currentReview = (currentReview - 1 + reviews.length) % reviews.length;
	}
	
	function openLightbox(imageSrc: string) {
		selectedImage = imageSrc;
		document.body.style.overflow = 'hidden';
	}
	
	function closeLightbox() {
		selectedImage = null;
		document.body.style.overflow = 'auto';
	}
	
	onMount(() => {
		autoplayInterval = setInterval(nextReview, 6000);
		return () => clearInterval(autoplayInterval);
	});
</script>

<section id="recensioni" class="py-20 px-4 bg-gradient-to-br from-accent-50/30 to-primary-50/30">
	<div class="container mx-auto">
		<h2 class="section-title">Cosa Dicono i Nostri Ospiti</h2>
		<p class="section-subtitle">
			Leggi le recensioni autentiche dei nostri ospiti su Booking.com
		</p>
		
		<!-- Carousel -->
		<div class="max-w-4xl mx-auto relative">
			<div class="relative h-[600px] md:h-[700px] flex items-center justify-center">
				{#each reviews as review, index}
					<div 
						class="absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center {index === currentReview ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}"
					>
						<div 
							class="card max-w-3xl w-full p-4 cursor-pointer group"
							onclick={() => openLightbox(review.src)}
							role="button"
							tabindex="0"
							onkeydown={(e) => e.key === 'Enter' && openLightbox(review.src)}
						>
							<div class="relative overflow-hidden rounded-lg">
								<img 
									src={review.src}
									alt={review.alt}
									class="w-full h-auto max-h-[550px] md:max-h-[650px] object-contain transform group-hover:scale-105 transition-transform duration-500"
									loading="lazy"
								/>
								<div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
									<div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
										<svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Navigation Arrows -->
			<button 
				onclick={prevReview}
				class="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
				aria-label="Previous review"
			>
				<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>
			
			<button 
				onclick={nextReview}
				class="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
				aria-label="Next review"
			>
				<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
			
			<!-- Indicators -->
			<div class="flex justify-center gap-2 mt-8 flex-wrap">
				{#each reviews as _, index}
					<button
						onclick={() => currentReview = index}
						class="w-2 h-2 rounded-full transition-all duration-300 {index === currentReview ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-primary-400'}"
						aria-label="Go to review {index + 1}"
					></button>
				{/each}
			</div>
		</div>
		
		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
			<div class="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
				<div class="text-4xl font-bold text-primary-600 mb-2">13+</div>
				<div class="text-gray-600">Recensioni</div>
			</div>
			<div class="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
				<div class="text-4xl font-bold text-accent-600 mb-2">5★</div>
				<div class="text-gray-600">Valutazione Media</div>
			</div>
			<div class="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
				<div class="text-4xl font-bold text-primary-600 mb-2">100%</div>
				<div class="text-gray-600">Ospiti Soddisfatti</div>
			</div>
			<div class="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
				<div class="text-4xl font-bold text-accent-600 mb-2">1928</div>
				<div class="text-gray-600">Anno di Fondazione</div>
			</div>
		</div>
	</div>
</section>

<!-- Lightbox Modal -->
{#if selectedImage}
	<div 
		class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
		onclick={closeLightbox}
		role="dialog"
		aria-modal="true"
	>
		<button 
			class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
			onclick={closeLightbox}
			aria-label="Close lightbox"
		>
			<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		
		<img 
			src={selectedImage}
			alt="Anteprima recensione"
			class="max-w-full max-h-[90vh] object-contain animate-scale-in"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}
