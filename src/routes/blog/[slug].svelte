<script context="module">
    export const prerender = true;

    export async function load({ page, fetch }) {
        const res = await fetch(`/blog/${page.params.slug}.json`);
        console.log(res);
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

<main class="">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-full">
            <div class="h-full">
                <h1 class="title-font text-lg font-medium text-gray-500 mb-3">{post.date}</h1>
                <p class="leading-relaxed text-lg font-bold text-black-900 mb-3">{post.title}</p>
                <p class="lg:mb-0 tex-red-500">{@html post.html}</p>
            </div>
        </div>
      </div>
    </div>
  </main>