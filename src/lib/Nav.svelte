<script>
    const links = [
        ['services', 'Services' ],
        ['pricing', 'Pricing'],
        ['company', 'Company'],
        ['blog', 'Blog'],
        ['vacancies', "Vacancies"]
    ]
</script>

<nav class="flex flex-col md:flex-row md:justify-between md:mt-2 text-gray-500">
    <ul class="md:inline-flex md:flex-row self-end py-5 pr-5">
        {#each links as [path, name]}
        <li class="hover:text-gray-800 md:pl-4">
            <a href={$path}>
                <p class="">{$name}</p>
            </a>
        </li>
        {/each}
    </ul>
    <ul class="self-end md:inline-flex md:flex-row pr-10 md:self-center md:p-0">
        <li class="hover:text-gray-800">
            <p>Sign in</p>
        </li>
    </ul>
</nav>


