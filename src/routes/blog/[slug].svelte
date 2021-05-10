<script context="module">
    export const prerender = true;

    export async function load({ page, session }) {
        const slug = page.params.slug;
        const postsSession = session.posts;
        const post = postsSession.find(post => post.slug === slug);


        if (post) {
            const posts = Object.fromEntries(
                await Promise.all(
                    Object.entries(import.meta.glob('/src/posts/*.md')).map(
                        async ([path, page]) => {
                            const { metadata } = await page();
                            const filename = path.split('/').pop();
                            const slug = filename.slice(0, -3);
                            return [slug, page, metadata];
                        }
                    )
                )
            );
            const { default: Rendered } = await posts[post.slug]();
            return {
                props: {
                    title: post.title,
                    author: post.author,
                    topic: post.topic,
                    date: post.date,
                    Rendered
                },
            };
        } else {
            // not found
            return {
                status: 404,
                error: new Error('Not found'),
            };
        }
    }
</script>

<script>
    export let title;
    export let author;
    export let topic;
    export let date;
    export let Rendered;
</script>

<main class="">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-full">
            <div class="h-full">
                <h1 class="title-font text-lg font-medium text-gray-500">{date}</h1>
                <h2 class="leading-relaxed text-lg font-bold text-black-800">Title -{title}</h2>
                <h3 class="leading-relaxed text-base text-black-900">Author -{author}</h3>
                <h4 class="leading-relaxed text-base text-black-900 mb-4">Topic -<i>{topic}</i></h4>
                <Rendered class="lg:mb-0 tex-red-500"/>
            </div>
        </div>
      </div>
    </div>
  </main>