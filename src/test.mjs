<script>
  export const allposts = import.meta.glob('/src/lib/posts/*.md')
  let list = [];
  for (const path in allposts) {
    allposts[path]().then((mod) => {
      list.push({title: mod.attributes.title, path: path.replace("/src/lib/posts","blog").replace(".md","")});
      list = list;
    })
  }
</script>

<ul>
  {#each list as post, i}
    <li>
      <a href="{post.path}">{post.title}</a>
    </li>
  {/each}
</ul>