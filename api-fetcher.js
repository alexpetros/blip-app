const API_URL = 'video stitch';

async function getVideo() {
  try {
    let response = await fetch(
      `${API_URL}/videos`
    );
    let responseJson = await response.json();
    return responseJson.finstas;
  } catch (error) {
    console.error(error);
  }
}

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

  default export { getVideo, uploadVideo };
