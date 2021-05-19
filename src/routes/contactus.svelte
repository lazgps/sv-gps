<script>
    import { createForm } from 'svelte-forms-lib';
    import * as yup from 'yup';
    import { formValues } from '$lib/store';
    import { goto } from '$app/navigation';

    const { form, errors, handleChange, handleSubmit, handleReset } =  createForm({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      numofprops: '',
      goals: ''
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required(),
      numofprops: yup.number().required(),
      goals: yup.string()
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values));
      formValues.set(Object.values(values));
      goto('/postcontact');
    }
  });
</script>

<main class="container text-gray-600 w-3/4 mx-auto z-1">
    <div class="text-center text-lg text-gray-900 mb-10">
        <h2>Submit the Form to Obtain a Free Rental Analysis</h2>
    </div>
    <form on:submit|preventDefault="{handleSubmit}">
        <div class="col-span-6 sm:col-span-3">
          <label for="firstname" class="block text-sm font-medium text-gray-700">First name:</label>
          <input name="firstname"
                 id="firstname" 
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="First Name"
                 on:change={handleChange}
                 bind:value={$form.firstname}
          />
          {#if $errors.firstname}
            <small class="text-red">{$errors.firstname}</small>
          {/if}
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="lastname" class="block text-sm font-medium text-gray-700">Last name:</label>
          <input name="lastname" 
                 id="lastname"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="Last Name"
                 on:change={handleChange}
                 bind:value={$form.lastname} 
          />
          {#if $errors.lastname}
            <small class="text-red">{$errors.lastname}</small>
          {/if}
        </div>
    
        <div class="col-span-6 sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-gray-700">Email address:</label>
          <input name="email" 
                 id="email" 
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="sample@example.com"
                 on:change={handleChange}
                 bind:value={$form.email}
          />
          {#if $errors.email}
            <small class="text-red">{$errors.email}</small>
          {/if}
        </div>
    
        <div class="col-span-6 sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input name="phone" 
                 id="phone" 
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 placeholder="(xxx)xxx-xxxx"
                 on:change={handleChange}
                 bind:value={$form.phone}
          />
          {#if $errors.phone}
            <small class="text-red">{$errors.phone}</small>
          {/if}
        </div>
    
        <div class="col-span-6 sm:col-span-3">
          <label for="numofprops" class="block text-sm font-medium text-gray-700">Number of Properties to Manage:</label>
          <input name="numofprops"
                 id="numofprops"
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                 on:change={handleChange}
                 bind:value={$form.numofprops} 
          />
          {#if $errors.numofprops}
            <small class="text-red">{$errors.numofprops}</small>
          {/if}
        </div>
    
        <div class="mt-1 col-span-6 sm:col-span-3">
          <label for="goals" class="block text-sm font-medium text-gray-700">What are your Property Management Goals?</label>
          <textarea id="goals" 
                    name="goals"
                    rows="5" 
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300" 
                    placeholder="Your Property Management Goals" 
                    on:change={handleChange}
                    bind:value={$form.goals}
          />
          {#if $errors.goals} 
            <small class="text-red">{$errors.goals}</small>
          {/if}
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Send
          </button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" on:click={handleReset}>
            Reset
          </button>
        </div>
      </form>
</main>
