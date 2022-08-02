<script>
    import { page } from '$app/stores';

    const srcLinks = [
        ['/', 'Home'],
        ['/services', 'Services'],
        ['/pricing', 'Pricing'],
        ['/aboutus', 'About Us'],
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
            <a href="https://globalpropertyservicesllc.com/">
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="164" height="76" viewBox="0 0 164 76" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>GPS Logo</title>
                    <defs>
                        <filter id="a">
                            <feOffset dy="-76" in="SourceGraphic" result="b">
                            </feOffset>
                            <feColorMatrix in="b" result="b" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0">
                            </feColorMatrix><feComposite in="SourceGraphic" in2="b" operator="in">
                            </feComposite>
                        </filter>
                    </defs>
                    <image width="100%" height="200%" xlink:href="data:image/jpeg;base64,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" filter="url(#a)">
                    </image>
                </svg>
            </a>
        </div>
        <div class="grid grid-flow-row auto-cols-min justify-self-end">
            <div>
                <h3 class="font-bold font-lg lg:font-xl">Contact Us: <span class="text-red">407.715.2652</span></h3>
            </div>
            <div class="justify-self-end">
                <button aria-label="menu button" on:click={showLogin}>
                    <svg role="img" style="width:20px;height:20px" viewBox="0 0 20 20">
                        <title>Menu svg icon</title>
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
