import fs from 'fs';
import path from 'path';

let assets = process.cwd();

let basedir = path.join(path.resolve(assets), '/posts');
console.log(basedir)

console.log(import.meta.url());
/* fs.readdirSync(basedir)
    .filter(file => /^.*\.md/.test(file))
    .map(file => {
        const raw = fs.readFileSync(`${basedir}/${file}`, 'utf-8');
        const title = file.split(".")[0]
        const contents = matter(raw)
        posts[title] = {
            title: contents.data.title? contents.data.title : "",
            body: md.render(contents.content)
        }
    }); */
