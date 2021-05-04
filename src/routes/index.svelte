<script>
  import Modal1 from '$lib/Modal1.svelte';
  import Modal2 from '$lib/Modal2.svelte';
  let Mdl1;
  let Mdl2;
</script>

<main class="container text-gray-600 w-screen z-1">
      <Modal1 bind:this={Mdl1}></Modal1>
      <Modal2 bind:this={Mdl2}></Modal2>
    <div class="bg-local bg-center bg-cover flex flex-col items-left content-start justify-start" style="background-image: url(/images/stock-photos/Stress_Free_Handsoff_Property_Management.jpg)">
        <div class="bg-white bg-opacity-50 rounded-lg mr-auto my-5 py-5 md:pl-10 sm:w-4/6 md:w-2/6">
          <h1 class="text-4xl text-left uppercase text-red font-bold title-font sm:w-4/5 ml-8 md:w-2/6">Stress Free, Hands-off Property Management</h1>
          <br>
          <h2 class="text-lg text-white text-left sm:w-4/5 md:w-2/6 ml-8">Let Us End Your Property Management Frustrations</h2>
          <button class="mx-auto mt-20 text-white bg-red border-0 sm:w-4/5 md:w-2/6 ml-8 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl1.show()}>
            Begin Here
          </button>
        </div>
      </div>
    <div class="flex flex-col md:flex-row items-center mx-auto px-auto py-16 md:py-16 w-4/5">
      <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pr-24 md:pr-16 w-1/2 md:items-start md:text-left md:px-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-2 tracking-tighter font-medium text-gray-900">Let Us Fuel Your Profits</h1>
        <p class="mb-2 leading-relaxed text-2xl">We offer Top Tier Services and Easy, Simple Pricing</p>
        <a class="text-red title-font text-bold text-2xl" href="/services">
          Here's how
        </a>
      </div>
      <div class="flex-grow lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="/images/stock-photos/Let_Us_Maximize_Your_Profits.jpg">
      </div>
    </div>
    <div class="flex flex-col items-center md:flex-row mx-auto px-auto py-16 md:py-16 w-4/5">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="/images/stock-photos/Innovative_Technology.jpg">
        </div>
        <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pl-24  md:pl-16 w-1/2 md:items-start md:text-left">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Use Our Innovative Technology to Your Advantage
          </h1>
          <p class="mb-8 leading-relaxed">We offer innovative technology to Owners and Tenants that can be used anywhere in real-time via the GPS Owner and Tenant portal. Find out how our technology can assist you</p>
          <button class="text-red title-font text-bold text-2xl" on:click={() => Mdl1.show()}>
            Begin Here
          </button>
        </div>
    </div>
    <div class="flex flex-col md:flex-row items-center mx-auto px-auto py-16 md:py-16 w-4/5">
      <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pr-24 md:pr-16 w-1/2 md:items-start md:text-left md:px-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 tracking-tighter font-medium text-gray-900">Your Full Service Property Management Partner</h1>
        <p class="mb-8 leading-relaxed">Are you a Realtor looking to secure future listings?  Take advantage of our "Real Estate Agent Referral Program"</p>
        <button class="text-red-600 title-font text-bold text-2xl" on:click={() => Mdl2.show()}>
          Begin Here
        </button>
      </div>
      <div class="flex-grow lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="/images/stock-photos/Your_Full_Service_Property_Management_Partner.jpg">
      </div>
    </div>
    <div class="bg-gray-200 mx-auto flex px-5 py-10 items-center justify-center flex-row">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's get your journey started to stress-free property management.</h1>
          <h2 class="text-xl font-bold text-gray-900 mb-8 leading-relaxed">(407)-715-2652</h2>
          <button class="mx-auto mt-4 text-white bg-red border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl1.show()}>
            Let's Begin
          </button>
        </div>
    </div>
</main>

<style>
</style>
