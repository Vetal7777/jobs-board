import axios from "axios";

export default axios.create({
    baseURL: `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${process.env.REACT_APP_BEARER_TOKEN}`,
    headers: {
        "Content-Type": "application/json",
    },
});