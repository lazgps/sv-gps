<script>
  import { goto } from '$app/navigation';

  function callform(){
    goto('/contactus');
  }
  
  function realtorform(){
    goto('/realtor');
  }

</script>

<main class="container text-gray-600 w-screen z-1">
    <div class="bg-local bg-center bg-cover flex flex-col items-left content-start justify-start" style="background-image: url(/images/stock-photos/Stress_Free_Handsoff_Property_Management.webp)">
        <div class="bg-white bg-opacity-70 rounded-lg mr-auto my-5 py-5 md:pl-5 sm:w-4/6 md:w-3/6 lg:w-2/6 lg:pl-0 lg:ml-4">
          <h1 class="text-4xl text-left uppercase text-red font-bold title-font sm:w-4/5 ml-8 mb-4">Stress Free, Hands-off Property Management</h1>
          <h2 class="text-lg text-white text-left sm:w-4/5 ml-8">Let Us End Your Property Management Frustrations</h2>
          <button aria-label="Owner Form" class="mx-auto mt-10 text-white bg-red border-0 sm:w-4/5 ml-8 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click="{callform}">
            Begin Here
          </button>
        </div>
      </div>
    <div class="flex flex-col-reverse md:flex-row items-center mx-auto px-auto lg:py-16 py-10 sm:py-10 w-4/5">
      <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pr-24 md:pr-16 sm:2/3 lg:w-1/2 md:items-start md:text-left md:px-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-2 tracking-tighter font-medium text-gray-900">Let Us Fuel Your Profits</h1>
        <p class="mb-2 leading-relaxed">We offer Top Tier Services and Easy Simple Pricing</p>
        <a class="text-red title-font text-bold text-2xl" href="/services">
          Here's how
        </a>
      </div>
      <div class="flex-grow lg:max-w-lg lg:w-1/2 sm:w-2/3">
        <img class="object-cover object-center rounded" alt="For profit" src="/images/stock-photos/Let_Us_Maximize_Your_Profits.webp">
      </div>
    </div>
    <div class="flex flex-col items-center md:flex-row mx-auto px-auto lg:py-16 py-10 sm:py-10 w-4/5">
        <div class="lg:max-w-lg lg:w-1/2 sm:w-2/3">
          <img class="object-cover object-center rounded" alt="For technology" src="/images/stock-photos/Innovative_Technology.webp">
        </div>
        <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pl-24 sm:pl-16 sm:w-2/3 lg:w-1/2 lg:items-start lg:text-left">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Use Our Innovative Technology to Your Advantage
          </h1>
          <p class="mb-8 leading-relaxed">We offer innovative technology to Owners and Tenants that can be used anywhere in real-time via the GPS Owner and Tenant portal. Find out how our technology can assist you</p>
          <button aria-label="Owner Form" class="text-red title-font text-bold text-2xl" on:click="{callform}">
            Begin Here
          </button>
        </div>
    </div>
    <div class="flex flex-col-reverse md:flex-row items-center mx-auto px-auto lg:py-16 py-10 sm:py-10 w-4/5">
      <div class="inline-flex flex-col items-center text-center lg:flex-grow lg:pr-24 sm:pr-16 sm:2/3 lg:w-1/2 md:items-start md:text-left md:px-16">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 tracking-tighter font-medium text-gray-900">A Realtors Full Service Property Management Partner</h1>
        <p class="mb-8 leading-relaxed">Are you a Realtor looking for a Property Manager or property management partner?  Take advantage of our <i>Real Estate Agent Referral Program</i></p>
        <button aria-label="Realtor Form" class="text-red title-font text-bold text-2xl" on:click="{realtorform}">
          Realtors Begin Here
        </button>
      </div>
      <div class="flex-grow lg:max-w-lg lg:w-1/2 sm:2/3">
        <img class="object-cover object-center rounded" alt="For property management" src="/images/stock-photos/Your_Full_Service_Property_Management_Partner.webp">
      </div>
    </div>
    <div class="bg-gray-200 mx-auto flex px-5 py-10 items-center justify-center flex-row">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's get your journey started to stress-free property management.</h1>
          <h2 class="text-xl font-bold text-gray-900 mb-8 leading-relaxed">(407)-715-2652</h2>
          <button aria-label="Owner Form" class="mx-auto mt-4 text-white bg-red border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click="{callform}">
            Let's Begin
          </button>
        </div>
    </div>
</main>

<style>
</style>
