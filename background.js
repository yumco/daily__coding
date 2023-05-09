const images = [
    "8.jpg",
    "1.jpg",
    "7.jpg",
    "3.jpg",
    "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `js/img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);