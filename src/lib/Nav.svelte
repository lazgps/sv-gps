<script>
    import { page } from '$app/stores';

    const srcLinks = [
        ['/services', 'Services'],
        ['/pricing', 'Pricing'],
        ['/company', 'Company'],
        ['/vacancies','Vacancies'],
        ['/blog', 'Blog']
    ];

    let lMenu = false;

    function showLogin(){
        lMenu = !lMenu;
    };
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
    <div class="self-end md:inline-flex md:flex-row pr-10 md:self-center md:p-0">
        <button class="hover:text-gray-800" on:click={showLogin}>Sign in</button>
    </div>
    {#if lMenu}
        <div class="origin-top-right absolute right-0 mt-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
        </div>
    {/if}
</nav>


