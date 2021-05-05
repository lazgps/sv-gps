<script>
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';

  const { form, errors, handleChange, handleSubmit, handleReset } =  createForm({
    initialValues: {
      brokeragename: '',
      realtorname: '',
      email: '',
      phone: '',
      comments: ''
    },
    validationSchema: yup.object().shape({
      brokeragename: yup.string().required(),
      realtorname: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required(),
      comments: yup.string()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values));
      show();
    }
  });

  let showMdl = false;

  export function show() {
    handleReset();
    showMdl = !showMdl;
  }
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
{#if showMdl}
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="text-center text-lg text-gray-900 mb-2">
            <h2>Realtor Referral Program</h2>
            <p class="text-base">Thank you for inquiring about our Realtor referral Program.  To sign up, we will complete a non-compete form with you and we will need your broker's W-9 form for future payments!</p>
          </div>
          <form on:submit|preventDefault="{handleSubmit}">
            <div class="col-span-6 sm:col-span-3">
              <label for="brokeragename" class="block text-sm font-medium text-gray-700">Brokerage Name:</label>
              <input name="brokeragename"
                     id="brokeragename" 
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     placeholder="Brokerage Name"
                     on:change={handleChange}
                     bind:value={$form.brokeragename}
              />
              {#if $errors.brokeragename}
                <small>{$errors.brokeragename}</small>
              {/if}
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label for="realtorname" class="block text-sm font-medium text-gray-700">Realtor Name:</label>
              <input name="realtorname" 
                     id="realtorname"
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     placeholder="Realtor's Name"
                     on:change={handleChange}
                     bind:value={$form.realtorname} 
              />
              {#if $errors.realtorname}
                <small>{$errors.realtorname}</small>
              {/if}
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="email" class="block text-sm font-medium text-gray-700">Email address:</label>
              <input name="email" 
                     id="email" 
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     placeholder="sample@sample.com"
                     on:change={handleChange}
                     bind:value={$form.email}
              />
              {#if $errors.email}
                <small>{$errors.email}</small>
              {/if}
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
              <input name="phone" 
                     id="phone" 
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                     placeholder="(xxx)xxx-xxxx"
                     on:change={handleChange}
                     bind:value={$form.phone}
              />
              {#if $errors.phone}
                <small>{$errors.phone}</small>
              {/if}
            </div>

            <div class="mt-1 col-span-6 sm:col-span-3">
              <label for="comments" class="block text-sm font-medium text-gray-700">Comments:</label>
              <textarea id="comments" 
                        name="comments"
                        rows="3" 
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Send us your comments" 
                        on:change={handleChange}
                        bind:value={$form.goals}
              />
              {#if $errors.goals} 
                <small>{$errors.goals}</small>
              {/if}
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Send
              </button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" on:click={show}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/if}
  