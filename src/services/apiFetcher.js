import fetch from 'isomorphic-fetch'; // temporary fix, fetch should be globally available - ask Tim

const API_URL = 'http://localhost:5000';

// generic get function
export async function getResponse() {
  try {
    const response = await fetch(`${API_URL}`);
    const responseJson = await response.json();
    return responseJson.text;
  } catch (error) {
    console.error(error);
  }
}

// get function - retrieves video
export async function getVideo() {
  try {
    const response = await fetch(`${API_URL}/videos`);
    const responseJson = await response.json();
    return responseJson.videos;
  } catch (error) {
    console.error(error);
  }
}

// post function - uploads video
export async function uploadVideo(video) {
  try {
    return await fetch(
      `${API_URL}/videos`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          video,
        }),
      },
    );
  } catch (error) {
    console.error(error);
  }
}
