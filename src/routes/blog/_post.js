import fm from "front-matter";
import marked from "marked";

function getMarkdownFileContent(dir) {
  const root = `static/${dir}/`;
  const files = readdirSync(root);

  return (
    files.map(filename => {
      const path = join(root, filename);
      const content = readFileSync(path, { encoding: "utf-8" });

      // Construct data for response
      let post = {};
      let key = filename.slice(0, -3);
      const parsed = fm(content);
      const html = marked(parsed.body);
      const frontmatter = parsed.attributes;
      const title = frontmatter.title;
      const date = frontmatter.date;
      const excerpt = frontmatter.excerpt;
      post[key] = { title, date, excerpt, html };
    //   Object.keys(post).forEach(e => console.log(`key=${e} value=${post[e]}`));
      return { ...post };
    })
  );
}

const posts = getMarkdownFileContent("posts");
console.log(...posts);
// console.log(...posts);
export posts;