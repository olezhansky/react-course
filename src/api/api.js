import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a7370a60-dd4c-4c6b-8333-95e15e5a0cce",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },
  deleteUser(userId) {
    return instance.delete(`follow/${userId}`);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
