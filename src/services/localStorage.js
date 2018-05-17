import { AsyncStorage } from 'react-native';

export async function getUser() {
  try {
    return await AsyncStorage.getItem('user');
  } catch (error) {
    console.error(error);
  }
}

export async function saveUser(user) {
  try {
    AsyncStorage.setItem('user', JSON.stringify(user), (err, result) => {
      console.log(err, result);
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getVideos() {
  try {
    const videos = await AsyncStorage.getItem('videos');
    return videos ? JSON.parse(videos) : [];
  } catch (error) {
    console.error(error);
  }
}

export async function saveVideo(video) {
  // TODO: once struct of video is finalized, add input validation
  try {
    const videos = await getVideos();
    await videos.push(video); // TODO: will this push the video before it is saved to local storage?
    return await AsyncStorage.setItem('videos', JSON.stringify(videos));
  } catch (error) {
    console.error(error);
  }
}
