<script>
    import { onMount } from "svelte";
    import Modal1 from '$lib/Modal1.svelte';

    let turnerData = [];

    onMount(async () => {
        const rest = await fetch('https://app.tenantturner.com/listings-json-key/gpsrealtyandpropertymanagement');
        turnerData = await rest.json();
    });

    let Mdl1;
</script>

<main class="text-gray-600 body-font pb-12">
    <Modal1 bind:this={Mdl1}></Modal1>
    <div class="container px-5 py-14 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#if turnerData}
            {#each turnerData as data}       
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={data.photos[0]} alt="property picture">
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FOR RENT</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.address}</h1>
                            <p class="leading-relaxed mb-3">{data.title}</p>
                            <div class="flex items-center flex-wrap ">
                                <a class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0" href={data.btnUrl}>Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                </a>
                                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                    ${data.rentAmount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
                <div class="p-4 md:w-1/3">

                </div>
        {/if}
      </div>
    </div>
</main>
<div class="flex-grow bg-gray-200 mt-10 mx-auto px-5 py-10 items-center justify-center">
    <div class="text-center md:w-2/3 lg:w-full w-full">
      <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let our simplified pricing structure fuel your profits</h2>
      <button class="mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl1.show()}>
        Begin Here
      </button>
    </div>
</div>
