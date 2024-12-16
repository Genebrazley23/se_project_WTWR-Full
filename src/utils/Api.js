import { baseUrl } from "../utils/constants.js";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems(token) {
  return request(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function addItem(token, data) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function deleteItem(token, itemId) {
  return request(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function toggleLiked(token, item) {
  return request(`${baseUrl}/items/${item._id}/likes`, {
    method: item.isLiked ? "DELETE" : "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function signin(email, password) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

function signup(name, avatar, email, password) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  });
}

function getMe(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
function updateUserProfile(token, name, avatar) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH", // Use PATCH for partial updates
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  });
}
export {
  getItems,
  addItem,
  deleteItem,
  request,
  signin,
  signup,
  getMe,
  toggleLiked,
  updateUserProfile,
};
