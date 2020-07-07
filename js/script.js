const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select the media stream and pass that to video to stream
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error
  }
};

button.addEventListener("click", async () => {
  // Disable the button when clicked
  button.disabled = true;
  // Start Picture in picture
  await videoElement.requestPictureInPicture();
  // Reset the button
  button.disabled = false;
});

// On Load
selectMediaStream();
