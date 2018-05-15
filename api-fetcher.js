const API_URL = 'video stitch';

// generic get function
async function get() {
  try {
    let response = await fetch(`${API_URL}`);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

// get function - retrieves video
async function getVideo() {
  try {
    let response = await fetch(`${API_URL}/videos`);
    let responseJson = await response.json();
    return responseJson.videos;
  } catch (error) {
    console.error(error);
  }
}

// post function - uploads video
async function uploadVideo(video) {
  try {
    let response = await fetch(`${API_URL}/videos`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          video
        }),
      }
      catch (error) {
        console.error(error);
      }
    }

export default { getVideo, uploadVideo };
