let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")
 
 
 
console.log(song_play)
 
 
//creating song object list
let songs_list = [
    {
        name : 'Lover',
        Image : 'Images/song.jpg',
        Song : 'Music/Lover Taylor Swift-(PagalSongs.Com.IN).mp3',
        Singer : 'Taylor Swift'
    },
    {
        name : 'Double Take',
        Image : 'Images/Double.jpg',
        Song : 'Music/Double-Take(PaglaSongs).mp3',
        Singer : 'Dhruv'
    },
    {
        name : 'Boy with luv',
        Image : 'Images/Bts.png',
        Song : 'Music/',
        Singer : 'BTS'
    },
    {
        name : 'Cupid',
        Image : 'Images/cupid.jpg',
        Song : 'Music/Cupid(Mr-Jatt1.com).mp3',
        Singer : 'Fifty Fifty'
    }
]
 
//keeping track of which song is playing and if song is playing or not
let i=0;
let flag=false;
 
 
//showing song name and image on screen
var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer
 
//function to play/pause song
song_play.addEventListener("click", function(){
 
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        console.log(flag)
    }
})
 
//function to play next song
song_next.addEventListener("click", function(){
   
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
       
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
   
})
 
//function to play previous song
song_prev.addEventListener("click", function(){
   
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
   
   
})
