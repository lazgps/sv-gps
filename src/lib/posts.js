import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import fm from 'front-matter';
import marked from 'marked';

let posts = [];
let mypath = path.resolve('./content/posts/');
let postFiles = readdirSync(mypath);
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function appendLeadZ(n) {
    if( n <=9) {
        return "0" + n;
    }
    return n
}

for(let postFile of postFiles){
    const fileContents = readFileSync(mypath + '/' + postFile,  'utf-8');
    const postfm = fm(fileContents);
    let postDate = new Date(postfm.attributes.date);
    let fileName = postFile.slice(0, -3);
    postfm.attributes.date = months[postDate.getMonth()] + ' ' + postDate.getDate() + ' ' + postDate.getFullYear() + ' ' + postDate.getHours() + ':' + appendLeadZ(postDate.getMinutes());
    posts.push({filename: fileName, title: postfm.attributes.title, date: postfm.attributes.date, excerpt: postfm.attributes.excerpt, html: marked(postfm.body)});
}

export default posts;
/* 
postFile.forEach(postFile => {
    // console.log(fileContents);
}) */
