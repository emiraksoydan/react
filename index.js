import {topla,hello,users} from "./mymodule.js";
import {getData} from "./app.js";
import slugify from "slugify";
const title = slugify("some string","-");

(async()=>{
    try {
        const getdata = await getData(1);
        console.log(getdata);
    } catch (error) {
        console.log(error);
    }

})();



// console.log(topla(2,4));
// hello("emir");
// console.log(users);