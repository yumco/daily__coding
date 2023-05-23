const images = [
    "11.jpg",
    "22.jpg",
    "33.jpg",
    "44.jpg",
    "55.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src =`/img ${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);