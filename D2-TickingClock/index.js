function setDate(){
    const secHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    const now = new Date();
    
    secHandRot = ((now.getSeconds()*6)+90);
    minHandRot = ((now.getMinutes()*6)+90);
    hourHandRot = ((now.getHours()*30)+90);
    
    hourHand.style.transform =`rotate(${hourHandRot}deg)`;
    minHand.style.transform =`rotate(${minHandRot}deg)`;
    secHand.style.transform =`rotate(${secHandRot}deg)`;
    
    
}

setInterval(setDate,1000);