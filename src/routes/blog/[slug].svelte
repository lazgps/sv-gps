<script context="module">
    export const prerender = true;

    export async function load({ page, fetch }) {
        const res = await fetch('/blog/${page.params.slug}.json');
        return {
            props: {
                post: await res.json()
            }
        };
    }
</script>

<script>
    export let post;
</script>

