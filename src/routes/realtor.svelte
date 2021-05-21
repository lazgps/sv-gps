<script>
    import { goto } from '$app/navigation';

    let submit;
    let broker, realtor, email, phone, comments;

    function resetForm() {
        broker="";
        realtor="";
        email="";
        phone="";
        comments="";
    }
    function handleSubmit() {
        submit = fetch('/postform', {
            method: 'POST',
            body: JSON.stringify({ 
                form: 'realtor',
                broker: broker,
                realtor: realtor,
                email: email,
                phone: phone,
                comments: comments
            }),
            headers: { 'content-type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => {
        console.log(data);
        setTimeout(function(){alert(`Message Sent \n ${data.msgID}`);} , 8000);
        resetForm();
        goto('/');
        })
    };
</script>

<main class="container text-gray-600 w-3/4 mx-auto z-1">
    <div class="text-center text-lg text-gray-900 mb-2">
        <h2>Realtor Referral Program</h2>
        <p class="text-base">Join our Realtor Referral Program to secure additional revenue for your business. For more information and to sign up, please complete the following form.</p>
    </div>
    <form on:submit|preventDefault="{handleSubmit}" method="post">
        <div class="col-span-6 sm:col-span-3">
            <label for="brokeragename" class="block text-sm font-medium text-gray-700">Brokerage Name:</label>
            <input name="brokeragename"
                id="brokeragename" 
                type="text"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Brokerage Name"
                required
                bind:value={broker}
            />
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="realtorname" class="block text-sm font-medium text-gray-700">Realtor Name:</label>
            <input name="realtorname" 
                id="realtorname"
                type="text"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Realtor's Name"
                required
                bind:value={realtor}
            />
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="email" class="block text-sm font-medium text-gray-700">Email address:</label>
            <input name="email" 
                    id="email" 
                    type="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter a valid email address"
                    required
                    bind:value={email}
            />
        </div>
        <div class="col-span-6 sm:col-span-3">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input name="phone" 
                    id="phone"
                    type="tel" 
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="xxx-xxx-xxxx"
                    required
                    bind:value={phone}
            />
        </div>
        <div class="mt-1 col-span-6 sm:col-span-3">
            <label for="comments" class="block text-sm font-medium text-gray-700">Comments:</label>
            <textarea id="comments" 
                    name="comments"
                    rows="5" 
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Send us your comments" 
                    bind:value={comments}
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
            <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Send
            </button>
            <button type="reset" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Reset
            </button>
        </div>
    </form>
</main>
