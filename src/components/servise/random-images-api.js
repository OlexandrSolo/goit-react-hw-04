import axios from 'axios'

const apiKEY = "ax-t1-4qUkBOCpfn6nDNuUFg0Z-Gs4ldp5Ecqalckzc"
axios.defaults.baseURL = "https://api.unsplash.com/"


export default async function fetchRandomImages(page) {
    const response = await axios.get(`https://api.unsplash.com/photos/random?count=10&client_id=${apiKEY}`, {
        params: {
            client_id: apiKEY,
            page
        }
    })
    return response.data
}