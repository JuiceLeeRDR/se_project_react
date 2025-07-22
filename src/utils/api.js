import { getToken } from "./auth";

const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseUrl}/items`);
}

function postNewItems({ name, imageUrl, weather }) {
  const requestData = { name, imageUrl, weather };
  console.log("Request data being sent:", requestData);
  console.log("Token:", getToken());

  return request(`${baseUrl}/items`, {
    method: "POST",

    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
}

function deleteItems(_id) {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  });
}

export { getItems, postNewItems, deleteItems, checkResponse };
