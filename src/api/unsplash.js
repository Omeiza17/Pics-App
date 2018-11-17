import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 25ee47e5bec147addd2dce1fb92aa8cd075fc5dc5ec78088acaf5c587a8fa1ad',
  }
});
