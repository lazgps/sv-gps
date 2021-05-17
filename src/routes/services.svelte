<script>
  import Modal1 from '$lib/Modal1.svelte';
  let Mdl;
</script>

<main class="text-gray-600 body-font">
  <Modal1 bind:this={Mdl}></Modal1>
  <h2 class="text-center text-2xl tracking-tight title-font text-gray-900">We Offer Superior Services Backed by Guarantees</h2>
    <div class="container px-5 py-10 mx-auto flex flex-wrap">
      <div class="flex relative pb-20 sm:items-center md:w-2/3 lg:w-4/5 lg:items-center mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">1</div>
        <div class="flex-grow md:pl-8 pl-6 lg:pl-1 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
            <img src="/images/stock-photos/services-1.webp" class="rounded-full w-24 h-24" alt="services 1">
<!--             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg> -->
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Finding the Right Tenant Is Top Priority</h2>
            <ul class="list-disc list-inside">
              <li class="">Powerful Technology Driven Marketing Lists Your Property on All Internet Rental Platforms and Social Media</li>
              <li>Strict Screening Process Including Ai Algorithms to Ensure the Best Candidates</li>
              <li>Less than 1% Eviction Rates on Residents We Place</li>
              <li>100% Tenant Loss Guarantee (Exclusions Apply)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 lg:w-4/5 lg:items-center mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">2</div>
        <div class="flex-grow md:pl-8 pl-6 lg:pl-1 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
            <img src="/images/stock-photos/services-2.webp" class="rounded-full w-24 h-24" alt="services 2">
<!--             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg> -->
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Once We Find the Right Tenant, We Keep Them</h2>
            <ul class="list-disc list-inside">
              <li>We Offer a Maintenance Platform That Allows Seamless Communication Between the Tenant, Manager and Vendor</li>
              <li>Most Work Orders Are Fulfilled in 48 Hours</li>
              <li>24-hour Manned After-hours Emergency Call Line</li>
              <li>Annual Third-party Inspections Paid for by Gps Helps Avoid Unexpected Surprises for Tenants and Owners</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 lg:w-4/5 lg:items-center mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">3</div>
        <div class="flex-grow md:pl-8 pl-6 lg:pl-1 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
            <img src="/images/stock-photos/services-3.webp" class="rounded-full w-24 h-24" alt="services 3">
<!--             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg> -->
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">A Long Term Focus on the Care of Your Property Investment</h2>
            <ul class="list-disc list-inside">
              <li>Third Party Inspections Allow Planning and Budgeting</li>
              <li>Fully Licensed and Insured Vendors for Maintenance</li>
              <li>Fully Transparent, No Mark-ups on Already Low Vendor Pricing</li>
              <li>Quick Maintenance Resolution to Avoid Long Term or Further Damage</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 lg:w-4/5 lg:items-center mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">4</div>
        <div class="flex-grow md:pl-8 pl-6 lg:pl-1 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
            <img src="/images/stock-photos/services-4.webp" class="rounded-full w-24 h-24" alt="services 4">
<!--             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> -->
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Property Producing Income That Is Stress Free</h2>
            <ul class="list-disc list-inside">
              <li>No Hidden Fees or Reserves</li>
              <li>Money in Your Account 15 Days after Receipt, Every Month</li>
              <li>Online Owner Portal That Allows Real-time Information 24 Hours a Day, from Anywhere</li>
              <li>Easy out Contract for Owners with No Cancellation Fees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</main>
<div class="flex-grow bg-gray-200 mx-auto px-5 py-5 items-center justify-center">
  <div class="text-center md:w-2/3 lg:w-full w-full">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What We Do Right</h1>
    <p class="text-xl leading-relaxed">Find the Right Tenant.  Done!</p>
    <p class="text-xl leading-relaxed">Keep the Right Tenant.  Done!</p>
    <p class="text-xl leading-relaxed">Long Term Property Care.  Done!</p>
    <p class="text-xl leading-relaxed">Stress Free Income.  Done!</p>
    <h3 class="title-font sm:text-xl text-base mb-4 font-medium text-gray-900">Now Let's Get Your Journey Started to Stress-free Property Management.</h3>
    <button class="mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl.show()}>
      Begin Here
    </button>
  </div>
</div>