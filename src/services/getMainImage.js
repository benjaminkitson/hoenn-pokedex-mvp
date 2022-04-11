function getMainImage(setImageUrl, url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.blob())
        .then((imageBlob) => {
          setImageUrl(URL.createObjectURL(imageBlob));
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export default getMainImage;
