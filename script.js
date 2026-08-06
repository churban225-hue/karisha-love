
// ===============================
// AOS ANIMATION
// ===============================

AOS.init({
    duration:1200,
    once:true
});




// ===============================
// LOVE TIMER
// ===============================


// Поставь сюда вашу дату знакомства
// пример: 15 апреля 2025

const startDate = new Date("2025-09-07 00:00:00");



function updateCounter(){


    const now = new Date();


    const difference = now - startDate;



    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        difference / (1000 * 60 * 60) % 24
    );


    const minutes = Math.floor(
        difference / (1000 * 60) % 60
    );


    const seconds = Math.floor(
        difference / 1000 % 60
    );



    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;


}



setInterval(updateCounter,1000);

updateCounter();







// ===============================
// MUSIC
// ===============================


const music =
document.getElementById("music");


const musicButton =
document.getElementById("playMusic");



musicButton.addEventListener(
"click",
()=>{


if(music.paused){

    music.play();

    musicButton.innerHTML =
    "⏸ Остановить музыку";


}

else{


    music.pause();


    musicButton.innerHTML =
    "▶ Включить песню";


}


});









// ===============================
// FLOATING HEARTS
// ===============================


function createHeart(){


const heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="-30px";


heart.style.fontSize =
(Math.random()*25+15)+"px";


heart.style.animation =
"heartMove 6s linear";



heart.style.zIndex="10";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



}




setInterval(createHeart,700);






// ===============================
// STARS BACKGROUND
// ===============================


const canvas =
document.getElementById("stars");


const ctx =
canvas.getContext("2d");



function resize(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}


resize();


window.addEventListener(
"resize",
resize
);



let stars=[];



for(let i=0;i<200;i++){


stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2,

speed:Math.random()*0.5

});


}




function drawStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="white";



stars.forEach(star=>{


ctx.beginPath();


ctx.arc(
star.x,
star.y,
star.size,
0,
Math.PI*2
);


ctx.fill();



star.y+=star.speed;



if(star.y>canvas.height){

star.y=0;

}


});



requestAnimationFrame(drawStars);



}



drawStars();








// ===============================
// HEART ANIMATION CSS
// ===============================


const style =
document.createElement("style");


style.innerHTML = `


@keyframes heartMove {


from{

transform:translateY(0)
rotate(0deg);

opacity:1;

}


to{


transform:
translateY(-120vh)
rotate(360deg);


opacity:0;


}


}


`;


document.head.appendChild(style);

// ===============================
// LETTER OPEN ANIMATION 💌
// ===============================


const openLetter = document.getElementById("openLetter");

const closeLetter = document.getElementById("closeLetter");

const letterPopup = document.getElementById("letterPopup");



if (openLetter && closeLetter && letterPopup) {


    openLetter.addEventListener("click", ()=>{

        letterPopup.classList.add("active");

    });



    closeLetter.addEventListener("click", ()=>{

        letterPopup.classList.remove("active");

    });



    letterPopup.addEventListener("click",(e)=>{


        if(e.target === letterPopup){

            letterPopup.classList.remove("active");

        }


    });


}

// ===============================
// SAKURA FALL 🌸
// ===============================


const sakuraContainer =
document.getElementById("sakura-container");



function createSakura(){


const petal =
document.createElement("div");


petal.className="sakura-petal";


petal.innerHTML="🌸";


petal.style.left =
Math.random()*100+"vw";


petal.style.animationDuration =
(Math.random()*5+5)+"s";



petal.style.fontSize =
(Math.random()*15+15)+"px";



sakuraContainer.appendChild(petal);



setTimeout(()=>{


petal.remove();


},10000);



}



setInterval(createSakura,500);







// ===============================
// FIREFLIES ✨
// ===============================


function createFirefly(){


const fly =
document.createElement("div");


fly.className="firefly";



fly.style.left =
Math.random()*100+"vw";


fly.style.top =
Math.random()*100+"vh";



fly.style.animationDelay =
Math.random()*5+"s";



document.body.appendChild(fly);



setTimeout(()=>{

fly.remove();

},8000);



}




setInterval(createFirefly,700);

/* ===============================
   STAR SKY 2.0 🌌
================================ */


const starCanvas =
document.getElementById("stars");


const starCtx =
starCanvas.getContext("2d");



function resizeStars(){


starCanvas.width =
window.innerWidth;


starCanvas.height =
window.innerHeight;


}


resizeStars();


window.addEventListener(
"resize",
resizeStars
);





let skyStars=[];



for(let i=0;i<250;i++){


skyStars.push({

x:Math.random()*window.innerWidth,

y:Math.random()*window.innerHeight,

radius:Math.random()*2,

alpha:Math.random(),

speed:Math.random()*0.02

});


}





function animateSky(){


starCtx.clearRect(
0,
0,
starCanvas.width,
starCanvas.height
);



skyStars.forEach(star=>{


star.alpha += star.speed;


if(star.alpha>1 || star.alpha<0){

star.speed*=-1;

}



starCtx.beginPath();


starCtx.fillStyle=
`rgba(255,255,255,${star.alpha})`;



starCtx.arc(

star.x,

star.y,

star.radius,

0,

Math.PI*2

);



starCtx.fill();



});



requestAnimationFrame(
animateSky
);


}



animateSky();







// ===============================
// CONSTELLATIONS ✨
// ===============================



const constellation =
document.getElementById(
"constellations"
);



let points=[];



for(let i=0;i<12;i++){


let star =
document.createElement("div");


star.style.position="absolute";


star.style.width="5px";


star.style.height="5px";


star.style.background="white";


star.style.borderRadius="50%";


star.style.left=
Math.random()*80+10+"%";


star.style.top=
Math.random()*50+10+"%";



star.style.boxShadow=
"0 0 15px white";



constellation.appendChild(star);



}








// ===============================
// METEORS ☄️
// ===============================


function createMeteor(){


let meteor =
document.createElement("div");


meteor.className="meteor";



meteor.style.left =
Math.random()*100+"vw";


meteor.style.top =
Math.random()*40+"vh";



document.body.appendChild(
meteor
);



setTimeout(()=>{

meteor.remove();

},1500);



}



setInterval(
createMeteor,
4000
);


// ===============================
// FULLSCREEN PHOTO VIEWER 📸
// ===============================

document.querySelectorAll(".photo-card img").forEach((img)=>{

    img.addEventListener("click", function(){

        let viewer = document.createElement("div");

        viewer.className = "photo-viewer";


        let bigImage = document.createElement("img");

        bigImage.src = this.src;


        viewer.appendChild(bigImage);

        document.body.appendChild(viewer);



        viewer.addEventListener("click", ()=>{

            viewer.remove();

        });


    });

});



// ===============================
// SCROLL TO MUSIC 🎵
// ===============================


const topMusicButton =
document.getElementById("musicButton");


const musicSection =
document.querySelector(".music");



if(topMusicButton && musicSection){


topMusicButton.addEventListener("click",()=>{


musicSection.scrollIntoView({

behavior:"smooth",

block:"center"

});


});


}


// ===============================
// SCROLL TO LETTER 💌
// ===============================


const letterButton =
document.getElementById("openLetter");


const letterSection =
document.getElementById("letterSection");



if(letterButton && letterSection){


letterButton.addEventListener("click",()=>{


letterSection.scrollIntoView({

behavior:"smooth",

block:"center"

});


});


}


// ===============================
// 100 REASONS ❤️
// ===============================


const reasons = [

"За твою улыбку ❤️",

"За то, что рядом с тобой я счастлив",

"За каждый наш разговор",

"За твой смех",

"За твои глаза ✨",

"За каждый момент вместе",

"За твою заботу",

"За то, что ты делаешь мои дни лучше",

"За наши воспоминания",

"За то, что ты есть ❤️"

];



let reasonIndex = 0;



const reasonText =
document.getElementById("reasonText");


const nextReason =
document.getElementById("nextReason");



if(nextReason){


nextReason.onclick = ()=>{


reasonText.parentElement.classList.remove("show");


setTimeout(()=>{


reasonText.innerHTML =

"❤️ Причина №"
+
(reasonIndex + 1)
+
"<br><br>"
+
reasons[reasonIndex];



reasonIndex++;



if(reasonIndex >= reasons.length){

reasonIndex=0;

}



reasonText.parentElement.classList.add("show");


},200);


};


}
