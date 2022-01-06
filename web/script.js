let position = 0;

let img1 = "https://via.placeholder.com/800x600png?text=1";
let img2 = "https://via.placeholder.com/800x600png?text=2";
let img3 = "https://via.placeholder.com/800x600png?text=3";
let img4 = "https://via.placeholder.com/800x600png?text=4";
let img5 = "https://via.placeholder.com/800x600png?text=5";
let img6 = "https://via.placeholder.com/800x600png?text=6";
let img7 = "https://via.placeholder.com/800x600png?text=7";
let img8 = "https://via.placeholder.com/800x600png?text=8";



function onClickNext() {

    const imgElement = document.getElementById("img");

    position = position + 1;

    if (position == 8) {

        position = 0

    }

    console.log(position)

    if (position == 0) {
        imgElement.src = img1;

    }

    if (position == 1) {
        imgElement.src = img2;

    }

    if (position == 2) {
        imgElement.src = img3;

    }

    if (position == 3) {
        imgElement.src = img4;

    }

    if (position == 4) {
        imgElement.src = img5;

    }

    if (position == 5) {
        imgElement.src = img6;

    }

    if (position == 6) {
        imgElement.src = img7;

    }

    if (position == 7) {
        imgElement.src = img8;
    }

}

function onClickPrev() {

    const imgElement = document.getElementById("img");

    position = position - 1;

    if (position == -1) {
        position = 7;
    }

    console.log(position)

    if (position == 7) {
        imgElement.src = img8;
    }

    if (position == 6) {
        imgElement.src = img7;
    }

    if (position == 5) {
        imgElement.src = img6;
    }

    if (position == 4) {
        imgElement.src = img5;
    }

    if (position == 3) {
        imgElement.src = img4;
    }

    if (position == 2) {
        imgElement.src = img3;
    }

    if (position == 1) {
        imgElement.src = img2;
    }

    if (position == 0) {
        imgElement.src = img1;
    }

}