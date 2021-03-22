<script>
	export let name;
</script>

<main class="red bg-red tc">
	<h1 class="black">Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
</main>

<article class="cf">
	<div class="fl w-50 bg-near-white tc">
		<h1>Column One</h1>
	</div>
	<div class="fl w-50 bg-light-gray tc">
		<h1>Column Two</h1>
	</div>
</article>

<style>
	@import "./all.css";
</style>
