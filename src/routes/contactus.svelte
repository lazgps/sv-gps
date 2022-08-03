<script>

  let submit;
  // form variables
  let firstname, lastname;
  let email, phone;
  let numprops, goals;

  function resetForm() {
    firstname="";
    lastname="";
    email="";
    phone="";
    numprops=0;
    goals="";
  }

  function handleSubmit() {
    submit = fetch('/postform', {
      method: 'POST',
      body: JSON.stringify({ 
          form: 'owner',
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          numprops: numprops,
          goals: goals
      }),
      headers: { 'content-type': 'application/json'},
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(function(){alert(`Message Sent \n ${data.msgID}`);} , 8000);
        resetForm();
        window.location.replace('/rent/index.html');
      })
  };
</script>

<main class="container text-gray-600 w-3/4 mx-auto z-1">
    <div class="text-center text-lg text-gray-900 mb-10">
        <h2>Please Provide the Following Information to Obtain Your Free Rental Analysis</h2>
    </div>
    <form on:submit|preventDefault="{handleSubmit}" method="post">
        <div class="col-span-6 sm:col-span-3">
          <label for="firstname" class="block text-sm font-medium text-gray-700">First name:</label>
          <input name="firstname"
                 id="firstname" 
                 type="text"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="First Name"
                 required
                 bind:value={firstname}
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="lastname" class="block text-sm font-medium text-gray-700">Last name:</label>
          <input name="lastname" 
                 id="lastname"
                 type="text"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="Last Name"
                 required
                 bind:value={lastname}
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-gray-700">Email address:</label>
          <input name="email" 
                 id="email" 
                 type="email"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="Enter valid email address"
                 required
                 bind:value={email}
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input name="phone" 
                 id="phone"
                 type="tel"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="xxx-xxx-xxxx"
                 required
                 bind:value={phone}
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="numofprops" class="block text-sm font-medium text-gray-700">Number of Properties to Manage:</label>
          <input name="numofprops"
                 id="numofprops"
                 type="number"
                 min="1"
                 max="999"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 required
                 bind:value={numprops}
          />
        </div>
        <div class="mt-1 col-span-6 sm:col-span-3">
          <label for="goals" class="block text-sm font-medium text-gray-700">What are your Property Management Goals?</label>
          <textarea id="goals" 
                    name="goals"
                    rows="5" 
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300" 
                    placeholder="Your Property Management Goals" 
                    bind:value={goals}
          />
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          {#if submit}
            {#await submit}
              <h1 class="rounded-md border border-transparent shadow-sm text-base font-medium text-red">Sending...</h1>
            {/await}
          {/if}
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Send
          </button>
          <button type="reset" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Reset
          </button>
        </div>
      </form>
</main>
