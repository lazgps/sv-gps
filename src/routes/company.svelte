<script>
  import Modal1 from '$lib/Modal1.svelte';
  let Mdl1;
</script>

<main class="text-gray-600 body-font">
    <Modal1 bind:this={Mdl1}></Modal1>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Our lineup of real estate and property management professionals offers a unique blend of talents that provides our Owners and Tenants a personalized property management experience.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4" src="/images/staff/Tere-Striped-shirt-hip-hand.webp">
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">Teresa Alvarez</h2>
              <h3 class="text-gray-500 mb-3">Broker</h3>
              <p class="mb-4">Teresa is a Miami born Floridian proud of her Cuban heritage. She has a double BA from FIU and has been a real estate professional since 2005, 
                with billions-of-dollars in real estate sales during her continuing career. She has worked in the Central Florida real estate market since 2009, 
                with a focus on real estate sales and property management. Founding GPS Realty and Property Management in 2015, Teresa wanted to create a localized boutique firm, 
                focusing on absentee owners. As an active property investor herself, she uniquely understands the pain points of an absentee owner and has a market acumen to maximize 
                profits while relieving the challenges of ownership. Her favorite past times are spending time with family and friends, networking, travelling, and reading. </p>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4" src="/images/staff/GPS-Todd-02.webp">
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">Todd Cerny</h2>
              <h3 class="text-gray-500 mb-3">Social Media/Marketing</h3>
              <p class="mb-4">Todd is a graduate of the University of Central Florida and a long-term resident of the Orlando metropolitan area. Todd graduated UCF and was able to start
                 and continue his career in the Orlando regional area. Making Orlando his long-term home has allowed Todd to create and keep long lasting relationships with friends
                  and in business in our local community. His experience in the fortune 500 technology industry, including cloud and enterprise software, project management, 
                  and social media, brings special skills to GPS. In his spare time Todd enjoys UCF football, the outdoors, traveling, and playing guitar.</p>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4" src="/images/staff/GPS-Laz-01.webp">
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">Lazaro Cubas</h2>
              <h3 class="text-gray-500 mb-3">Accountant</h3>
              <p class="mb-4">Lazaro is a U.S. Coast Guard veteran with years of experience in the technology, finance, and accounting sectors. Lazaro offers a unique skillset to our property management and real estate Customers through his thorough knowledge of our innovative technology, and deep understanding of our accounting systems. 
                Lazaro is a key team member making sure your GPS technology and accounting experience is seamless, accurate, and carefree.  In his spare time Lazaro enjoys the theme parks.</p>
            </div>
          </div>
        </div>
        <div class="p-4 lg:w-1/2">
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4" src="/images/staff/GPS-Dora-17.webp">
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900">Doraliz Fernandez</h2>
              <h3 class="text-gray-500 mb-3">Administrative Guru</h3>
              <p class="mb-4">Dora is Dominican born but Central Florida raised. Her family-oriented background has led her to value both personal and professional relationships 
                that have molded her traits of flexibility, compassion, and perseverance. In 2015 she was offered the opportunity to shift occupations from hospitality to property 
                management, working directly with HOA's, where she gained the skills that have made her a valuable real estate and property management administrative professional. 
                During her personal time, Dora enjoys spending time with her husband, and their little girl Gianna. One of Dora’s favorite past times is being outdoors searching for the 
                next adventure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
<div class="bg-gray-200 mx-auto flex px-5 py-10 items-center justify-center flex-row">
  <div class="text-center lg:w-2/3 w-full">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Let's get your journey started to stress-free property management.</h1>
    <h2 class="text-xl font-bold text-gray-900 mb-8 leading-relaxed">(407)-715-2652</h2>
    <button class="mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-bold text-xl" on:click={() => Mdl1.show()}>
      Let's Begin
    </button>
  </div>
</div>  