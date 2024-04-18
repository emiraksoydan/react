// setTimeout(() => {
//     console.log("emir");
// }, 5000);

// setInterval(() => {
//     console.log("naber");
// }, 1000);

// const sayhi = (cb) =>{
//     cb();
// }
// sayhi(()=>{
//     console.log("hello");
// })

import fetch from "node-fetch"
import axios from  "axios"

// fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(users=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(data=>data.json()).then(post=>console.log(post));
// });


// async function getdata(){
//     const data = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     console.log(data);
//     const data2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
//     console.log(data2);
// }
// getdata();
// (async () => {
//     const {data:users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data:post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");    
//     console.log(users);
//     console.log(post1);
// })();

const getuser = () =>{
    return new Promise(async (resolve,resject) =>{
            const {data} = await axios("https://jsonplaceholder.typicode.com/users");
            resolve(data);
    });
};

(async()=>{
    try {
        const users = await getuser();
        console.log(users);
    } catch (error) {
        console.log(error);
    }

})();

Promise.all([getuser]).then(console.log()).catch(console.log())
