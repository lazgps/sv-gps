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

<div class="container bg-default h-screen w-screen min-h-screen mx-auto mt-0">
	<div class="sticky bg-white top-0 h-18 w-full my-6 py-6 z-50">
		<Headr />
		<Nav {segment}/>
	</div>
	<slot></slot>
	<Foot />
</div>