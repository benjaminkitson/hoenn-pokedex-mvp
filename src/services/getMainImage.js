function getMainImage(setImageUrl, setIsPlaceholder, url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.blob())
        .then((imageBlob) => {
          setImageUrl(URL.createObjectURL(imageBlob));
        })
        .then(() => {
          setIsPlaceholder(false)
        })
        .catch((error) => {
          reject(error);
        });
    });
};

export default getMainImage;
