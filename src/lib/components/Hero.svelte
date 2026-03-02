<script lang="ts">
	import { onMount } from 'svelte';
	import { withBase } from '$lib/utils';
	
	let currentSlide = $state(0);
	let autoplayInterval: ReturnType<typeof setInterval>;
	
	const slides = [
		{
			image: withBase('img/principali/IMG_20230904_173208.jpg'),
			title: 'Benvenuti a Etna 1928',
			subtitle: 'Country House nel cuore della Sicilia'
		},
		{
			image: withBase('img/principali/IMG_20230904_173420.jpg'), 
			title: 'Vivi l\'esperienza autentica',
			subtitle: 'Comfort e tradizione siciliana'
		},
		{
			image: withBase('img/principali/IMG_20230904_173430.jpg'),
			title: 'Relax e natura',
			subtitle: 'Circondati dalla bellezza dell\'Etna'
		}
	];
	
	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}
	
	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}
	
	function goToSlide(index: number) {
		currentSlide = index;
	}
	
	onMount(() => {
		// Autoplay
		autoplayInterval = setInterval(nextSlide, 5000);
		
		return () => {
			clearInterval(autoplayInterval);
		};
	});
</script>

<section id="home" class="relative h-screen overflow-hidden">
	<!-- Slides -->
	<div class="relative h-full">
		{#each slides as slide, index}
			<div 
				class="absolute inset-0 transition-all duration-700 ease-in-out {index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}"
			>
				<!-- Background Image -->
				<img 
					src={slide.image} 
					alt={slide.title}
					class="w-full h-full object-cover"
				/>
				
				<!-- Gradient Overlay -->
				<div class="absolute inset-0 gradient-overlay"></div>
				
				<!-- Content -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="container mx-auto px-4 text-center text-white">
						<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up font-serif">
							{slide.title}
						</h1>
						<p class="text-xl md:text-2xl lg:text-3xl mb-8 animate-slide-up animation-delay-200 font-light">
							{slide.subtitle}
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
							<a href="#contatti" class="btn-primary text-lg px-8 py-4">
								Prenota Ora
							</a>
							<a href="#contatti" class="btn-secondary text-lg px-8 py-4">
								Contattaci
							</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	
	<!-- Navigation Arrows -->
	<button 
		onclick={prevSlide}
		class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
		aria-label="Previous slide"
	>
		<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>
	
	<button 
		onclick={nextSlide}
		class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
		aria-label="Next slide"
	>
		<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
	
	<!-- Indicators -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
		{#each slides as _, index}
			<button
				onclick={() => goToSlide(index)}
				class="w-3 h-3 rounded-full transition-all duration-300 {index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}"
				aria-label="Go to slide {index + 1}"
			></button>
		{/each}
	</div>
	
	<!-- Scroll Indicator -->
	<div class="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float">
		<a href="#recensioni" class="text-white flex flex-col items-center gap-2 hover:text-primary-200 transition-colors">
			<span class="text-sm uppercase tracking-wider">Scroll</span>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</a>
	</div>
</section>

<style>
	.animation-delay-200 {
		animation-delay: 200ms;
	}
	
	.animation-delay-400 {
		animation-delay: 400ms;
	}
</style>
