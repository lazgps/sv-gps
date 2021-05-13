<script>
    import { page } from '$app/stores';

    const srcLinks = [
        ['/', 'Home'],
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

<header>
    <div class="container grid grid-cols-2 lg:grid-cols-2 grid-flow-column lg:grid-flow-column justify-items-auto md:px-0">
        <div>
            <a href=".">
                <img class="-ml-3 h-24" src="/images/logos/logo.png" alt="Our Logo">
            </a>
        </div>
        <div class="grid grid-flow-row auto-cols-min justify-self-end">
            <div>
                <h3 class="font-bold font-lg lg:font-xl">Contact Us: <span class="text-red">407.715.2652</span></h3>
            </div>
            <div class="justify-self-end">
                <button on:click={showLogin}>
                    <svg style="width:20px;height:20px" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14" />
                    </svg>
                </button>
                {#if lMenu}
                    <div class="container absolute right-0 w-2/4 md:w-2/6 lg:w-1/6 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        {#each srcLinks as [srcLink, name] }
                            <a rel='prefetch' href={srcLink} class="block px-4 py-2 text-sm text-gray-700" on:click={showLogin} role="menuitem" tabindex="-1">{name}</a>
                        {/each}
                        <a href="https://app.propertyware.com/pw/portals/gpsrealtypropertymanagementllc/owner.action" class="block px-4 py-2 text-sm text-gray-700" on:click={showLogin} role="menuitem" tabindex="-1" id="user-menu-item-0">Owner Login</a>
                        <a href="https://app.propertyware.com/pw/portals/gpsrealtypropertymanagementllc/tenant.action" class="block px-4 py-2 text-sm text-gray-700" on:click={showLogin} role="menuitem" tabindex="-1" id="user-menu-item-1">Tenant Login</a>
                        <a href="https://app.propertymeld.com/tenant/gps-realty-and-property-management" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" on:click={showLogin} tabindex="-1" id="user-menu-item-2">Maintenance Login</a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</header>
