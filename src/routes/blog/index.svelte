<script context="module">
  export const prerender = true;

/*   export async function load({ fetch }) {
    const res = await fetch('/blog.json');
    console.log(res);
    return {
      props: {
        posts: await res.json()
      }
    };
  } */
  export async function getPost() {
    const posts = await Promise.all(
      Object.entries(import.meta.glob('/static/posts/*.md')).map(
        async ([path, post]) => {
          const { metadata } = await post();
          const filename = path.split('/').pop();
          return { ...metadata, filename };
        }
      )
    );

    return {
      posts,
    };
  }
</script>

<script>
/*   export const allposts = import.meta.glob('/static/posts/*.md');
  let list = [];
  for (const path in allposts) {
    allposts[path]().then((mod) => {
      list.push({title: mod.attributes.title, path: path.replace("/static/posts","blog").replace(".md","")});
      list = list;
  }; */
  export const posts;
</script>

<main class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        {#each posts as post, i}
        <div class="p-4 md:w-1/3">
          <a href="/blog/{i}">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Title: {post.title}</h1>
                <p class="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">Date: {post.path}</p>
              </div>
            </div>
          </a>
        </div>
        {/each}
      </div>
    </div>
  </main>