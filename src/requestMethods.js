import axios from "axios";

const BASE_URL = "http://localhost:5030/api/";

// Attempt to get the persisted data from localStorage
const persistedData = localStorage.getItem("persist:root");

if (!persistedData) {
    console.error("Persisted data not found in localStorage");
}

// Attempt to parse the user data from persistedData
const userData = persistedData ? JSON.parse(JSON.parse(persistedData).user) : null;

// Attempt to get the access token from userData
const TOKEN = userData && userData.currentUser ? userData.currentUser.accessToken : null;

// Log the access token (or any error if present)
console.log("Access Token:", TOKEN || "No access token available");

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${TOKEN||''}`},
});