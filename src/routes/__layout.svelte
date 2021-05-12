<script context="module">
	export const prerender = true;

</script>

<script>
	import '../global.css';
	import Headr from '$lib/Headr.svelte';
	import Nav from '$lib/Nav.svelte';
	import Foot from '$lib/Foot.svelte';
	export let segment;
</script>

<svelte:head>
	<title>Global Property Services</title>
</svelte:head>

<div class="container bg-default h-screen w-screen min-h-screen mx-auto mt-40 lg:mt-40">
	<div class="fixed bg-white top-0 h-26 w-full lg:max-w-full pr-2 py-2 z-50">
		<Headr {segment}/>
	</div>
	<slot></slot>
	<Foot />
</div>