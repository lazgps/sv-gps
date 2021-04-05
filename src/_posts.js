import { readdirSync, readFileSync } from 'fs';
import fm from 'front-matter';
import marked from 'marked';

export let posts = [];
let postFile = readdirSync('../posts/');
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(process.cwd());

function appendLeadZ(n) {
    if( n <=9) {
        return "0" + n;
    }
    return n
}

postFile.forEach(postFile => {
    const fileContents = readFileSync('../posts/' + postFile,  'utf-8');
    const postfm = fm(fileContents);
    let postDate = new Date(postfm.attributes.date);
    let fileName = postFile.slice(0, -3);
    let tmpObject = {};
    postfm.attributes.date = months[postDate.getMonth()] + ' ' + postDate.getDate() + ' ' + postDate.getFullYear() + ' ' + postDate.getHours() + ':' + appendLeadZ(postDate.getMinutes());

    // console.log(fileContents);
    console.log(postfm);
    tmpObject[fileName]= title: postfm.attributes.title, date: postfm.attributes.date, excerpt: postfm.attributes.excerpt, html: marked(postfm.body);

    posts.push(tmpObject);
})

console.log(posts);

/* const posts = readdirSync(postDir).map(postFilename => {
    const postContent = readFileSync(`${postDir}/${postFilename}`, {
        encoding: 'utf8'
    });
    const postfm = fm(postContent);
    if (typeof postfm.attributes.slug === 'undefined')
        postfm.attributes.slug = postFilename.split('.').slice(0, -1).join('.');
    let tdate = new Date(postfm.attributes.date);
    postfm.attributes.date = months[tdate.getMonth()] + ' ' + tdate.getDate() + ' ' + tdate.getFullYear() + ' ' + tdate.getHours() + ':' + appendLeadZ(tdate.getMinutes());
    let tpost = {};
    let key = postfm.attributes.slug;
    tpost[key]= {
        title: postfm.attributes.title, 
        date: postfm.attributes.date, 
        html: marked(postfm.body)
    };
     return {
            slug: postfm.attributes.slug,
            title: postfm.attributes.title,
            date: postfm.attributes.date,
            html: marked(postfm.body)
        } 
        
*/

/* posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});
 */