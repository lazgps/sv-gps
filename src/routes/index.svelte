<script>
  import Modal1 from '$lib/Modal1.svelte';
  let Mdl;
</script>

<main class="container text-gray-600 w-screen z-1">
      <Modal1 bind:this={Mdl}></Modal1>
    <div class="bg-gray-100 flex flex-col items-left content-start justify-start">
        <div class="bg-white bg-opacity-50 rounded-lg mr-auto my-5 py-5 md:pl-10 w-4/6 md:w-2/6">
          <h1 class="text-4xl text-left uppercase text-red-500 font-bold title-font w-4/5 ml-8">Stres Free, Hands-off Property Management</h1>
          <br>
          <h2 class="text-lg text-gray-500 text-left w-4/5 ml-8">Whether you want to find a place to live or need a rental filled, when you are here, you're home</h2>
          <button class="mx-auto mt-20 text-white bg-red-500 border-0 w-4/5 ml-8 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl.show()}>
            Begin Here
          </button>
        </div>
      </div>
    <div class="flex flex-col md:flex-row items-center mx-auto px-auto py-16 md:py-16 w-4/5">
      <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pr-24 md:pr-16 w-1/2 md:items-start md:text-left md:px-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-2 tracking-tighter font-medium text-gray-900">Let Us Maximize Your Profits</h1>
        <p class="mb-2 leading-relaxed text-2xl">We offer Top Tier Services and Easy, Simple Pricing</p>
        <button class="text-red-600 title-font text-bold text-2xl" on:click={() => Mdl.show()}>
          Here's how
        </button>
      </div>
      <div class="flex-grow lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div>
    </div>
    <div class="flex flex-col items-center md:flex-row mx-auto px-auto py-16 md:py-16 w-4/5">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
        </div>
        <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pl-24  md:pl-16 w-1/2 md:items-start md:text-left">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Use Our Innovative Technology to Your Advantage
          </h1>
          <p class="mb-8 leading-relaxed">We offer innovative technology to Owners and Tenants that can be used anywhere in real-time via the GPS Owner and Tenant portal. Find out how our technology can assist you</p>
          <button class="text-red-600 title-font text-bold text-2xl" on:click={() => Mdl.show()}>
            Begin Here
          </button>
        </div>
    </div>
    <div class="flex flex-col md:flex-row items-center mx-auto px-auto py-16 md:py-16 w-4/5">
      <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pr-24 md:pr-16 w-1/2 md:items-start md:text-left md:px-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 tracking-tighter font-medium text-gray-900">Your Full Service Property Management Partner</h1>
        <p class="mb-8 leading-relaxed">We are not only a full-service property management firm but we are also offer full Service Real Estate Services, with years of background in the Central Florida market. Call us today if you are buying or selling your home. Are you a Real Estate Agent, find out about of special Real Estate Agent referral program for Property Management services</p>
      </div>
      <div class="flex-grow lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div>
    </div>
    <div class="bg-gray-200 mx-auto flex px-5 py-10 items-center justify-center flex-row">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's get your journey started to stress-free property management.</h1>
          <h2 class="text-xl font-bold text-gray-900 mb-8 leading-relaxed">(407)-715-2652</h2>
          <button class="mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl.show()}>
            Let's Begin
          </button>
        </div>
    </div>
</main>

<style>
</style>
