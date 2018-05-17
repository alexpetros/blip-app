import axios from 'axios'; // temporary fix, fetch should be globally available - ask Tim

const API_URL = 'http://localhost:5000';

// generic get function
export async function getResponse() {
  try {
    const response = await axios.get(`${API_URL}`);
    const responseJson = await response.json();
    return responseJson.text;
  } catch (error) {
    console.log('getResponse failed', error);
    return 'get response failed';
  }
}

// get function - retrieves video
export async function getVideo() {
  try {
    const response = await axios.get(`${API_URL}/videos`);
    const responseJson = await response.json();
    return responseJson.videos;
  } catch (error) {
    console.log('getVideo failed', error);
  }
}

// post function - uploads video
export async function uploadVideo(video) {
  try {
    return await axios.post(`${API_URL}/videos`, video);
  } catch (error) {
    console.log('uploadVideo failed', error);
  }
}
