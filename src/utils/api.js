import { getToken } from "./auth";

const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function postNewItems({ name, imageUrl, weather }) {
  const requestData = { name, imageUrl, weather };
  console.log("Request data being sent:", requestData);
  console.log("Token:", getToken());

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function deleteItems(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

export { getItems, postNewItems, deleteItems, checkResponse };
