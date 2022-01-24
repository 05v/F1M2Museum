const MyTitle = document.getElementById('MyTitle');
const MyImage = document.getElementById('MyImage');
const MyInput = document.getElementById('MyInput');

let locations = [{
        "Title": "Spot 0",
        "Image": "img/0.jpg",
    },
    {
        "Title": "Spot 1",
        "Image": "img/1.jpg"
    },
    {
        "Title": "Spot 2",
        "Image": "img/2.jpg"
    },
    {
        "Title": "Spot 3",
        "Image": "img/3.jpg"
    },
    {
        "Title": "Spot 4",
        "Image": "img/4.jpg"
    },
    {
        "Title": "Spot 5",
        "Image": "img/5.jpg"
    },
    {
        "Title": "Spot 6",
        "Image": "img/6.jpg"
    },
    {
        "Title": "Spot 7",
        "Image": "img/7.jpg"
    },
    {
        "Title": "Spot 8",
        "Image": "img/8.jpg"
    },
    {
        "Title": "Spot 9",
        "Image": "img/9.jpg"
    },
    {
        "Title": "Spot 10",
        "Image": "img/10.jpg"
    },
    {
        "Title": "Spot 11",
        "Image": "img/11.jpg"
    }
]

function show(index) {
    MyTitle.innerHTML = locations[index].Title;
    MyImage.src = locations[index].Image;
}

function GetInput() {
    show(MyInput.value);
    MyInput.value = "";
    MyInput.focus();
}