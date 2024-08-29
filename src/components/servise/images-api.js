import axios from "axios";

const apiKEY = "ax-t1-4qUkBOCpfn6nDNuUFg0Z-Gs4ldp5Ecqalckzc"
axios.defaults.baseURL = "https://api.unsplash.com/"


export default async function fetchImagesWithTopic(topic, page) {
    const response = await axios.get("search/photos", {
        params: {
            query: topic,
            client_id: apiKEY,
            page
        }
    })
    // console.log(response.data.results);
    return response.data.results
}