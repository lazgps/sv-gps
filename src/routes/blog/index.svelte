<script context="module">
  export const prerender = true;

  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

 if (posts.length) {
   for (let i=0; i < posts.length; i++) {
     let tmpdate = new Date(posts[i].date);
     posts[i].date = months[tmpdate.getMonth()] + ' ' + tmpdate.getDate() + ' ' + tmpdate.getFullYear();
   }
 }

</script>

<main class="text-gray-600 body-font">
  <div class="text-center text-2xl text-gray-900 font-bold">Blog Musings</div>
  <div class="container px-5 py-14 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#if posts}
          {#each posts as post}
          <div class="p-4 md:w-1/3">
            <a href="/blog/{post.slug}">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {#if post.thumbnail}
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="{post.thumbnail}" alt="{post.thumbnail}">
                {:else}
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/stock-photos/services-1.webp" alt="blog post">
                {/if}
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900">Title: {post.title}</h1>
                  <h2 class="title-font text-lg font-medium text-gray-900">Author: {post.author}</h2>
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