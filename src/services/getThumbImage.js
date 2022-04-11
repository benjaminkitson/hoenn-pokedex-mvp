function getThumbImage(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.blob())
        .then((imageBlob) => {
          resolve(URL.createObjectURL(imageBlob));
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export default getThumbImage;
