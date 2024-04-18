
import axios from  "axios"

  async function getData(number){
    const {data:getuserinfo} = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    const {data:getuserpost} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+number);
    return {getuserinfo,getuserpost};
}
export{getData}