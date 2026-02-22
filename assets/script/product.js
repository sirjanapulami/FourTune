

let index = 0;

function onLeft() {
    let nextIndex = index - 1;
    if (nextIndex < 0) {
        index = images.length - 1;
    } else {
        index = nextIndex;
    }

    document.getElementById("img").setAttribute("src", images[index])
}

function onRight() {
    let nextIndex = index + 1;
    if (nextIndex > images.length - 1) {
        index = 0;
    } else {
        index = nextIndex;
    }

    document.getElementById("img").setAttribute("src", images[index])
}