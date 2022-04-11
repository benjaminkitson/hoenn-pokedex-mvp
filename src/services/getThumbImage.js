function getThumbImage(url) {
  return fetch(url)
    .then(response => response.blob())
    .then((imageBlob) => (URL.createObjectURL(imageBlob)))
    .catch((error) => {
      console.log(error);
    });
};

export default getThumbImage;
