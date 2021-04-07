<script context="module">
  export const prerender = true;

  export async function load({ page, session }) {
    const { slug } = page.params;
    const posts = session.posts;

    if (posts.length) {
      return {
        props: {
          posts: posts
        },
      };
    } else {
      return {
        status: 404,
        error: new Error('Not Found'),
      };
    }
  }
</script>

<script>
 export let posts;
</script>

<main class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#if posts}
          {#each posts as post}
          <div class="p-4 md:w-1/3">
            <a href="/blog/{post.slug}">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Title: {post.title}</h1>
                  <p class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Date: {post.date}</p>
                </div>
              </div>
            </a>
          </div>
          {/each}
        {/if}
      </div>
    </div>
  </main>