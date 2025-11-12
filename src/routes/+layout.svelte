<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/list">List</a>
	<a href="/pets">Pets</a>
</nav>
{@render children()}
