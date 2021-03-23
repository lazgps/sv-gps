import fm from "front-matter";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";

async function getMarkdownFileContent(dir) {
  const root = `./src/content/${dir}/`;
  const files = readdirSync(root);

  return Promise.all(
    files.map(async (filename) => {
      const path = join(root, filename);
      const content = readFileSync(path, { encoding: "utf-8" });

      // Construct data for response
      const parsed = fm(content);
      const markdown = parsed.body;
      const frontmatter = parsed.attributes;
      const title = frontmatter.title || filename;
      const slug = filename.slice(0, -3);

      return { title, markdown, frontmatter, filename, slug, path };
    })
  );
}

export async function getSession() {
  const projects = await getMarkdownFileContent("projects");
  return { projects };
}