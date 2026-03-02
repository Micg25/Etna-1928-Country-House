<script lang="ts">
	import { page } from '$app/stores';
	
	let isMenuOpen = $state(false);
	let isScrolled = $state(false);
	
	// Gestione scroll per effetto navbar
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			isScrolled = window.scrollY > 50;
		});
	}
	
	const menuItems = [
		{ label: 'Home', href: '#home' },
		{ label: 'Camere', href: '#camere' },
		{ label: 'Cucina', href: '#cucina' },
		{ label: 'Bagni', href: '#bagni' },
		{ label: 'Recensioni', href: '#recensioni' },
		{ label: 'Contatti', href: '#contatti' }
	];
</script>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}">
	<nav class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#home" class="flex items-center space-x-3 group">
				<div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
					<svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
				</div>
				<div class="flex flex-col">
					<span class="text-xl font-bold font-serif bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
						Etna 1928
					</span>
					<span class="text-xs text-gray-600">Country House</span>
				</div>
			</a>
			
			<!-- Desktop Menu -->
			<div class="hidden lg:flex items-center space-x-8">
				{#each menuItems as item}
					<a 
						href={item.href}
						class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
					>
						{item.label}
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
					</a>
				{/each}
				<a href="#contatti" class="btn-primary">
					Prenota Ora
				</a>
			</div>
			
			<!-- Mobile Menu Button -->
			<button 
				class="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
				onclick={() => isMenuOpen = !isMenuOpen}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
		
		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="lg:hidden mt-4 pb-4 animate-slide-down">
				<div class="flex flex-col space-y-3">
					{#each menuItems as item}
						<a 
							href={item.href}
							class="px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-all duration-200"
							onclick={() => isMenuOpen = false}
						>
							{item.label}
						</a>
					{/each}
					<a href="#contatti" class="btn-primary mx-4" onclick={() => isMenuOpen = false}>
						Prenota Ora
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>
