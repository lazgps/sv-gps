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

<main class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-f">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Date: {post.data.date}</h1>
                <p class="leading-relaxed mb-3">Title: {post.data.excerpt}</p>
                <p class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"></p>
            </div>
        </div>
      </div>
    </div>
  </main>