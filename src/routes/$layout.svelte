<script>
	import "../global.css";
	import '$lib/Headr.svelte';
	import '$lib/Nav.svelte';
	import '$lib/Foot.svelte';
</script>

<div class="container bg-default h-screen min-h-screen mt-0 md:mx-20">
	<div class="sticky bg-white top-0 h-18 w-full my-6 py-6 z-50">
		<Headr />
		<Nav />
	</div>
	<slot />
	<Foot />
</div>