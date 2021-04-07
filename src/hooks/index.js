export async function getSession() {
    const posts = await Promise.all(
        Object.entries(import.meta.glob('/src/posts/*.md')).map(
            async ([path, page]) => {
                const { metadata } = await page();
                const filename = path.split('/').pop();
                const slug = filename.slice(0, -3);

                return { ...metadata, filename, slug};
            }
        )
    );

    return {
        posts,
    };
};