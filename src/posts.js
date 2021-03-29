import { readdirSync, readFileSync } from 'fs';
import fm from 'front-matter';
import marked from 'marked';
import { assets } from '$app/paths';

let postDir = '../posts';

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

marked.setOptions({
    gfm: true,
    breaks: true
});

console.log(process.cwd());

function appendLeadZ(n) {
    if( n <=9) {
        return "0" + n;
    }
    return n
}

const posts = readdirSync(postDir).map(postFilename => {
    const postContent = readFileSync(`${postDir}/${postFilename}`, {
        encoding: 'utf8'
    });
    const postfm = fm(postContent);
    if (typeof postfm.attributes.slug === 'undefined')
        postfm.attributes.slug = postFilename.split('.').slice(0, -1).join('.');
    let tdate = new Date(postfm.attributes.date);
    postfm.attributes.date = months[tdate.getMonth()] + ' ' + tdate.getDate() + ' ' + tdate.getFullYear() + ' ' + tdate.getHours() + ':' + appendLeadZ(tdate.getMinutes());
    return {
            slug: postfm.attributes.slug,
            title: postfm.attributes.title,
            date: postfm.attributes.date,
            html: marked(postfm.body)
        }
});

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
