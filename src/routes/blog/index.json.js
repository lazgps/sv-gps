import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import fm from 'front-matter';
import marked from 'marked';

let posts = [];
let mypath = path.resolve(process.cwd(),'./posts/');
mypath = mypath + '/';
let postFiles = readdirSync(mypath);
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function appendLeadZ(n) {
    if( n <=9) {
        return "0" + n;
    }
    return n
}

for(let postFile of postFiles){
    const fileContents = readFileSync(mypath + postFile,  'utf-8');
    const postfm = fm(fileContents);
    let postDate = new Date(postfm.attributes.date);
    let fileName = postFile.slice(0, -3);
    postfm.attributes.date = months[postDate.getMonth()] + ' ' + postDate.getDate() + ' ' + postDate.getFullYear() + ' ' + postDate.getHours() + ':' + appendLeadZ(postDate.getMinutes());
    posts.push({filename: fileName, title: postfm.attributes.title, date: postfm.attributes.date, excerpt: postfm.attributes.excerpt, html: marked(postfm.body)});
}

export function get() {
    return {
        body: Object.keys(posts).map(slug => ({
          slug: posts[slug].filename,
          title: posts[slug].title,
          date: posts[slug].date,
          excerpt: posts[slug].excerpt,
          html: posts[slug].html 
        }))
    };
} 
