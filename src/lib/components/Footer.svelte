<script lang="ts">
	const currentYear = new Date().getFullYear();
	
	const links = {
		social: [
			{ name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
			{ name: 'Instagram', href: '#', icon: 'M16 8a6 6 0 11-12 0 6 6 0 0112 0zm-6 6a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z M10 2h4' },
			{ name: 'TripAdvisor', href: '#', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z' }
		],
		quickLinks: [
			{ name: 'Camere', href: '#camere' },
			{ name: 'Cucina', href: '#cucina' },
			{ name: 'Bagni', href: '#bagni' },
			{ name: 'Recensioni', href: '#recensioni' },
			{ name: 'Contatti', href: '#contatti' }
		]
	};
</script>

<footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
	<div class="container mx-auto px-4">
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
			<!-- Brand -->
			<div class="lg:col-span-2">
				<div class="flex items-center space-x-3 mb-6">
					<div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</div>
					<div>
						<h3 class="text-2xl font-bold font-serif">Etna 1928 Country House</h3>
						<p class="text-primary-300 text-sm">Dal 1928 con passione</p>
					</div>
				</div>
				<p class="text-gray-400 leading-relaxed max-w-md mb-6">
					Una country house storica immersa nella natura siciliana, ai piedi dell'Etna. 
					Tradizione, comfort e ospitalità autentica dal 1928.
				</p>
				<div class="flex gap-4">
					{#each links.social as social}
						<a 
							href={social.href}
							class="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
							aria-label={social.name}
							title={social.name}
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d={social.icon} />
							</svg>
						</a>
					{/each}
				</div>
			</div>
			
			<!-- Quick Links -->
			<div>
				<h4 class="text-lg font-semibold mb-4 text-primary-300">Link Rapidi</h4>
				<ul class="space-y-3">
					{#each links.quickLinks as link}
						<li>
							<a 
								href={link.href}
								class="text-gray-400 hover:text-primary-300 transition-colors duration-200 flex items-center gap-2 group"
							>
								<svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
								</svg>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<!-- Contact Info -->
			<div>
				<h4 class="text-lg font-semibold mb-4 text-accent-300">Contatti</h4>
				<ul class="space-y-3 text-gray-400">
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						<a href="tel:+393337397919" class="hover:text-primary-300 transition-colors">
							+39 333 739 7919
						</a>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<a href="mailto:info@etna1928.com" class="hover:text-primary-300 transition-colors break-all">
							info@etna1928.com
						</a>
					</li>
					<li class="flex items-start gap-3">
						<svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>Sicilia, Italia</span>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- Bottom Bar -->
		<div class="pt-8 border-t border-gray-700">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
				<p>© {currentYear} Etna 1928 Country House — Tutti i diritti riservati</p>
				<div class="flex items-center gap-6">
					<a href="#" class="hover:text-primary-300 transition-colors">Privacy Policy</a>
					<a href="#" class="hover:text-primary-300 transition-colors">Termini di Servizio</a>
					<a href="#" class="hover:text-primary-300 transition-colors">Cookie Policy</a>
				</div>
			</div>
			<p class="text-center mt-4 text-gray-500 text-xs">
				Sviluppato con 💚 usando SvelteKit, TypeScript & Tailwind CSS
			</p>
		</div>
	</div>
</footer>
