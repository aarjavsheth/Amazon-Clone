// axios is a way of making requests (POST, GET,...)
// axios is a fetching library

import axios from "axios";

const instance = axios.create({
    // THE API (Cloud Function) URL 
    baseURL: "https://us-central1-clone-857f0.cloudfunctions.net/api"
    // "http://localhost:5001/clone-857f0/us-central1/api" 
});

export default instance;