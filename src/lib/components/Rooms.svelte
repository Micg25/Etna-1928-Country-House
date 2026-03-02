<script lang="ts">
	import { withBase } from '$lib/utils';
	
	let selectedImage = $state<string | null>(null);
	
	const rooms = [
		{ src: withBase('img/camere/IMG_20230904_173145.jpg'), alt: 'Camera 1' },
		{ src: withBase('img/camere/IMG_20230904_173148.jpg'), alt: 'Camera 2' },
		{ src: withBase('img/camere/IMG_20230904_173156.jpg'), alt: 'Camera 3' },
		{ src: withBase('img/camere/IMG_20230904_173302.jpg'), alt: 'Camera 4' },
		{ src: withBase('img/camere/IMG_20230904_173316.jpg'), alt: 'Camera 5' },
		{ src: withBase('img/camere/IMG_20230904_173325.jpg'), alt: 'Camera 6' }
	];
	
	function openLightbox(imageSrc: string) {
		selectedImage = imageSrc;
		document.body.style.overflow = 'hidden';
	}
	
	function closeLightbox() {
		selectedImage = null;
		document.body.style.overflow = 'auto';
	}
</script>

<section id="camere" class="py-20 px-4">
	<div class="container mx-auto">
		<h2 class="section-title">Le Nostre Camere</h2>
		<p class="section-subtitle">
			Spazi accoglienti e confortevoli, arredati con gusto e attenzione ai dettagli
		</p>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each rooms as room, index}
				<div 
					class="card hover-lift group cursor-pointer animate-scale-in"
					style="animation-delay: {index * 100}ms"
					onclick={() => openLightbox(room.src)}
					role="button"
					tabindex="0"
					onkeydown={(e) => e.key === 'Enter' && openLightbox(room.src)}
				>
					<div class="relative aspect-[4/3] overflow-hidden">
						<img 
							src={room.src}
							alt={room.alt}
							class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div class="absolute inset-0 flex items-center justify-center">
								<div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
									<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-semibold text-gray-800 mb-2">{room.alt}</h3>
						<p class="text-gray-600">Clicca per ingrandire</p>
					</div>
				</div>
			{/each}
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
			alt="Anteprima camera"
			class="max-w-full max-h-[90vh] object-contain animate-scale-in"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}
