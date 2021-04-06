fs.readdirSync(basedir)
    .filter(file => /^.*\.md/.test(file))
    .map(file => {
        const raw = fs.readFileSync(`${basedir}/${file}`, 'utf-8');
        const title = file.split(".")[0]
        const contents = matter(raw)
        posts[title] = {
            title: contents.data.title? contents.data.title : "",
            body: md.render(contents.content)
        }
    });