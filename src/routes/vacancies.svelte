<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
  
    function callform(){
        goto('/contactus');
    }

    let turnerData = [];

    onMount(async () => {
        const rest = await fetch('https://app.tenantturner.com/listings-json-key/gpsrealtyandpropertymanagement');
        turnerData = await rest.json();
    });
</script>

<main class="text-gray-600 body-font pb-12">
    <div class="container px-5 py-14 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#if turnerData}
            <div class="p-4 md:w-1/3 lg:w-full text-center text-2xl text-gray-900 font-bold">
                <h1>Our Vacancies</h1>
            </div>
            {#each turnerData as data}       
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        {#if data.photos.length > 0}
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={data.photos[0]} alt="property picture">
                        {:else}
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="property picture">
                        {/if}
                        <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FOR RENT</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.address}</h1>
                            <p class="leading-relaxed mb-3">{data.title}</p>
                            <div class="flex items-center flex-col lg:flex-row md:content-center md:justify-between">
                                <span class="text-gray-400 leading-none text-sm py-1">
                                    Rent: ${data.rentAmount}
                                </span>
                                <a class="mx-auto text-white bg-red border-0 py-2 px-2 my-2 md:my-0 focus:outline-none hover:bg-red-600 rounded text-bold" href={data.btnUrl}>Learn More</a>
                                <a class="mx-auto text-white bg-red border-0 py-2 px-2 my-2 md:-ml-2 md:my-0 focus:outline-none hover:bg-red-600 rounded text-bold" href={data.applyUrl}>Apply</a>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
                <div class="p-4 md:w-1/3 lg:w-full text-center text-2xl text-gray-900 font-bold">
                    <h1>No Vacancies at this time</h1>
                </div>
        {/if}
      </div>
    </div>
</main>
<div class="flex-grow bg-gray-200 mt-10 mx-auto px-5 py-10 items-center justify-center">
    <div class="text-center md:w-2/3 lg:w-full w-full">
      <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Let our simplified pricing structure fuel your profits</h1>
      <button aria-label="Owner Form" class="mx-auto mt-4 text-white bg-red border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click="{callform}">
        Begin Here
      </button>
    </div>
</div>
