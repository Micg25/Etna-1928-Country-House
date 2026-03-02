<script lang="ts">
	import '../app.css';
	import { withBase } from '$lib/utils';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={withBase('img/favicon/favicon-32x32.png')} />
	<link rel="apple-touch-icon" href={withBase('img/favicon/apple-touch-icon.png')} />
	<meta name="theme-color" content="#7BA05B" />
</svelte:head>

{@render children()}
