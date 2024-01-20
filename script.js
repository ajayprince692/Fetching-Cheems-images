function randomShibaImage() {
  fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
    .then((response) => response.json())
    .then((shibas) => {
      let shibaImageContainer = document.getElementById("ShibaImageContainer"); 
      let imageElement = document.createElement("img");

      // Assuming the structure of the response is an array of image URLs
      imageElement.src = shibas[0];
      imageElement.alt = "Shiba image loading";

      shibaImageContainer.innerHTML = ""; // To refresh with a new one
      shibaImageContainer.appendChild(imageElement);
    })
    .catch((error) => console.log("Error:", error));
}

// Function call to display a random Shiba image
randomShibaImage()


