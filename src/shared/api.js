import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_SERVER}/api`,
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('token'); // localStorage에 TOKEN 저장
  config.headers.common['Authorization'] = `${accessToken}`; // Header에 토큰을 넣어서 보내준다.
  return config;
});

const TumblbugApis = {
  loginUser: (user) => api.post("/login", user),
  signUp: (user) => api.post("/signup", user),
  postThumbnailUpload: (formData) => api.post("/images", formData, {
    headers: {
        "Content-type": "multipart/form-data",
    },                    
  }),
  postStoryImageUpload: (formData) => api.post("/images", formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },               
  }),
  deleteImages: (images) => api.delete("/images", images),
  newPost: (post) => api.post("/projects", post)
}


export const authApi = {};

export default TumblbugApis
