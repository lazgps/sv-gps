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

<nav class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row sm:grid-flow-col md:grid-flow-row lg:grid-flow-row justify-items-auto text-gray-500">
    <ul class="grid auto-cols-min lg:auto-cols-min grid-rows-1 sm:grid-flow-row md:grid-flow-col lg:grid-flow-col justify-items-auto ml-5 md:ml-0 lg:ml-0">
        {#each srcLinks as [srcLink, name] }
         <li class="mr-4 hover:text-gray-800">
            <a rel='prefetch' href={srcLink} class:active="{$page.path === {name}}">
                <p>{name}</p>
        </li>
        {/each}
    </ul>
    <div class="grid lg:auto-cols-auto grid-rows-1 grid-flow-col sm:grid-flow-row md:grid-flow-col lg:grid-flow-col justify-items-start sm:justify-items-start md:justify-items-end lg:justify-items-end ml-5 lg:ml-0">
        <button class="hover:text-gray-800" on:click={showLogin}>Sign in ▾</button>
    </div>
    {#if lMenu}
        <div class="origin-top-right relative lg:absolute right-0 lg:mt-12 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="https://app.propertyware.com/pw/portals/gpsrealtypropertymanagementllc/owner.action" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Owner Login</a>
            <a href="https://app.propertyware.com/pw/portals/gpsrealtypropertymanagementllc/tenant.action" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Tenant Login</a>
            <a href="https://app.propertymeld.com/tenant/gps-realty-and-property-management" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Maintenance Login</a>
        </div>
    {/if}
</nav>


