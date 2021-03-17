<script>
    import { page } from '$app/stores';

    const srcLinks = [
        ['/services', 'Services'],
        ['/pricing', 'Pricing'],
        ['/company', 'Company'],
        ['/vacancies','Vacancies'],
        ['/blog', 'Blog']
    ];
</script>

<nav class="flex flex-col md:flex-row md:justify-between md:mt-2 text-gray-500">
    <ul class="md:inline-flex md:flex-row self-end py-5 pr-5">
        {#each srcLinks as [srcLink, name] }
         <li class="hover:text-gray-800 md:pl-4">
            <a rel='prefetch' href={srcLink} class:active="{$page.path === {name}}">
                <p>{name}</p>
        </li>
        {/each}
    </ul>
    <ul class="self-end md:inline-flex md:flex-row pr-10 md:self-center md:p-0">
        <li class="hover:text-gray-800">
            <p>Sign in</p>
        </li>
    </ul>
</nav>


