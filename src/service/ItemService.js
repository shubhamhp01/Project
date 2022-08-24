import axios from 'axios'

const localhost_url = "http://localhost:8080/";

const ITEMS_REST_API_URL = localhost_url + 'items';

const userinfo_url = localhost_url + 'userinfoname';

class ItemService{
    getItems(url)
    {
        // return a List of user objects
        // const product_info = axios.get(localhost_url+url).then((result) => result.data)
        // return product_info;

        return axios.get(localhost_url+url);
    }

    setItems(props)
    {
        axios.post(ITEMS_REST_API_URL,props)
    }

    updateItems(url,props)
    {
        axios.put(localhost_url+url,props)
    }

    deleteItems(url,code)
    {
        axios.delete(localhost_url+url+"/"+code)
    }

    setUserInfo(route,props)
    {
        axios.post(localhost_url+route,props)
    }

    getUserInfo(userid,password)
    {

        const user = axios.get(userinfo_url+"/"+userid+"/"+password).then((result) => result.data)        
        
        return user

    }

}

export default new ItemService()