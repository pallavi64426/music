console.log("welcome");


let songIndex =0;
let audio= new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let mastersongname= document.getElementById('mastersongname');
let progressBar=document.getElementById('progressBar');
let gif=document.getElementById('gif');
let songsitem=Array.from(document.getElementsByClassName('songsitem'));
let songs=[
    {songName:"Wildest dream " ,filepath:"songs/1.mp3" , coverPath:"covers/1.jpeg"},
    {songName:"love story" ,filepath:"songs/2.mp3" , coverPath:"covers/2.jpg"},
    {songName:"enchanted" ,filepath:"songs/3.mp3" , coverPath:"covers/3.jpeg"},
    {songName:"you belong with me" ,filepath:"songs/4.mp3" , coverPath:"covers/4.jpeg"},
    {songName:"gorgeous" ,filepath:"songs/5.mp3" , coverPath:"covers/5.jpg"},
]
songsitem.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
   element.getElementsByClassName('songname')[0].innerText = songs[i].songName;

})


document.addEventListener('click',()=>{
    if (audio.paused|| audio.currentTime<0){
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        
            audio.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity=0;

    }
    


})
audio.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audio.currentTime/audio.duration)*100);
    progressBar.value=progress;

}
)
progressBar.addEventListener('change',()=> {
    audio.currentTime=(progressBar.value * audio.duration)/100;
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
   

  


}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{
    element.addEventListener('click', (e)=>
    {
        console.log(e.target)
        makeAllPlay();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        audio.src=`songs/${songIndex+1}.mp3`
        mastersongname.innerText=songs[songIndex].songName;
        audio.currentTime=0;
        audio.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audio.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex=1;
    }
    audio.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audio.currentTime=0;
    audio.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

}
)