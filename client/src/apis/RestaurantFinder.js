import axios from "axios";

export default axios.create({
    baseURL: "https://yelp-pern-backend.vercel.app/api/v1/restaurants",
})