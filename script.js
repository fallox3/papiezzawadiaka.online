let points = localStorage.getItem("points");
var sound = new Audio("papajsound.mp4");

let music = new Audio("papajmusic.mp3");
music.loop = true;
music.play();


document.querySelector("#points-div").innerText = points;
console.log(localStorage.getItem("points"));

document.querySelector("#griddy").addEventListener("click", () =>{
    points ++;
    localStorage.setItem("points", points);
    points = localStorage.getItem("points");
    document.querySelector("#points-div").innerText = points;
    localStorage.setItem("points",  points);
    sound.load();
    sound.play();
})

document.querySelector("h1").addEventListener("click", () =>{
    points = 0;
    localStorage.setItem("points",  points);
    localStorage.removeItem("points");
    document.querySelector("#points-div").innerText = points;
})

document.querySelector("#slider").addEventListener("mousemove", () =>{
    let l = document.querySelector("#slider");
    let lvalue = l.value/1000;
    console.log(lvalue);
    music.volume = lvalue;
})

