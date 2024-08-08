const songs = [
    {
        SongName:"Aaj Ki Raat",
    },
    {
        SongName:"Aayi Nahi",
    },
    {
        SongName:"Dekha Tenu",
    },
    {
        SongName:"Gulabi Sadi Ani Lali",
    },
    {
        SongName:"Guli Mata",
    },
    {
        SongName:"Heeriye",
    },
    {
        SongName:"Husn Tera Tauba Tauba",
    },
    {
        SongName:"Kahani Suno",
    },
    {
        SongName:"Maan Meri Jaan",
    },
    {
        SongName:"Nadaaniyan",
    },
    {
        SongName:"O Mahi O Mahi",
    },
    {
        SongName:"O Sajni Re",
    },
    {
        SongName:"Pehle Bhi Main",
    },
    {
        SongName:"Raam Aayenge",
    },
    {
        SongName:"Ram Siya Ram",
    },
    {
        SongName:"Soulmate",
    },
    {
        SongName:"Tere Hawaale",
    },
    {
        SongName:"Tu Hai Kahan",
    },
    {
        SongName:"Ve Haniya",
    },
    {
        SongName:"Yimmy Yimmy",
    },
    {
        SongName:"Aal Izz Well",
    },
    {
        SongName:"Zoobi Doobi",
    },
    {
        SongName:"Jaane Nahin Denge",
    },
    {
        SongName:"Give Me Som Sunshine",
    },
    {
        SongName:"Behti Hawa Sa Tha Woh",
    },
    {
        SongName:"Killing Jeeja",
    },
    {
        SongName:"Bhaavein Jaane Ya Na Jaane",
    },
    {
        SongName:"Ranvijays Entry Medley",
    },
    {
        SongName:"Abrars Entry",
    },
    {
        SongName:"Haiwaan",
    },
    {
        SongName:"Saari Duniya Jalaa Denge",
    },
    {
        SongName:"Kashmir",
    },
    {
        SongName:"Pehle Bhi Main",
    },
    {
        SongName:"Arjan Vailly",
    },
    {
        SongName:"Papa Meri Jaan",
    },
    {
        SongName:"Satranga",
    },
    {
        SongName:"Hua Main",
    },
    {
        SongName:"Hailla Hailla",
    },
    {
        SongName:"Idhar Chala Main Udhar Chala",
    },
    {
        SongName:"In Panchhiyon",
    },
    {
        SongName:"Its Magic",
    },
    {
        SongName:"Jaadu Jaadu",
    },
    {
        SongName:"Jadoo Jadoo",
    },
    {
        SongName:"Koi Mil Gaya",
    },
    {
        SongName:"Ram Siya Ram",
    },
    {
        SongName:"Shivoham",
    },
    {
        SongName:"Huppa Huiya",
    },
    {
        SongName:"Jhoome Jo Pathaan",
    },
    {
        SongName:"Besharam Rang",
    },
    {
        SongName:"Bekaar Dil",
    },
    {
        SongName:"Dil Chah Raha Hai",
    },
    {
        SongName:"Mitti",
    },
    {
        SongName:"Dil Banaane Waaleya",
    },
    {
        SongName:"Heer Aasmani",
    },
    {
        SongName:"Sher Khul Gaye",
    },
    {
        SongName:"Ishq Jaisa Kuch",
    },
    {
        SongName:"Duur Na Karin",
    },
    {
        SongName:"Hauli Hauli",
    },
]

const songs2 = [
    {
        movieName:"3 idiots",
        movieSongList:["Aal Izz Well","Zoobi Doobi","Jaane Nahin Denge","Give Me Som Sunshine","Behti Hawa Sa Tha Woh"]
    },
    {
        movieName:"Animal",
        movieSongList:["Killing Jeeja","Bhaavein Jaane Ya Na Jaane","Ranvijays Entry Medley","Abrars Entry","Haiwaan","Saari Duniya Jalaa Denge","Kashmir","Pehle Bhi Main","Arjan Vailly","Papa Meri Jaan","Satranga","Hua Main"]
    },
    {
        movieName:"Pathan",
        movieSongList:["Jhoome Jo Pathaan","Besharam Rang"]
    },
    {
        movieName:"Koi Mil Gaya",
        movieSongList:["Hailla Hailla","Idhar Chala Main Udhar Chala","In Panchhiyon","Its Magic","Jaadu Jaadu","Jadoo Jadoo","Koi Mil Gaya"]
    },
    {
        movieName:"Stree 2",
        movieSongList:["Aayi Nai","Aaj Ki Raat","Tumhare Hi Rahenge Hum"]
    },
    {
        movieName:"Adipurush",
        movieSongList:["Ram Siya Ram","Shivoham","Huppa Huiya"]
    },
    {
        movieName:"Fighter",
        movieSongList:["Bekaar Dil","Dil Chah Raha Hai","Mitti","Dil Banaane Waaleya","Heer Aasmani","Sher Khul Gaye","Ishq Jaisa Kuch"]
    },
    {
        movieName:"Khel Khel Mein",
        movieSongList:["Duur Na Karin","Hauli Hauli"]
    }
]
let songIndex = 0

const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const songByMovie = document.querySelector("#songList");
const allSongs = document.querySelector("#allSongs");
const musicContainer = document.querySelector(".cardMusicContainer");
const progressBar = document.querySelector(".progressBar");
const progressBarContainer = document.querySelector(".progressContainer");
const songListContainer = document.querySelector(".songListContainer");
const logoutBtn = document.querySelector("#logout");
const songCard = document.querySelector(".songCard")

logoutBtn.addEventListener("click",() => {
    window.location.href = "../index.html"
})

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

shuffleArray(songs)

allSongs.addEventListener("click",() => {
        window.location.reload()
})

function btnActive(){
    this.classList.add("active")
}
const player = new Audio();

    function songLoad(songs) {
        player.src = `../Assests/defaultSongs/${songs.SongName}.mp3`
    }
    
    songLoad(songs[songIndex])

    function nextSong() {
        songIndex++
        if(songIndex > songs.length-1){
            songIndex = 0
        }
        songLoad(songs[songIndex])
        setActiveMusic()
        player.play()
        playBtn.innerText = "Paused"
    }

    function prevSong(){
        songIndex--
        if(songIndex < 0){
            songIndex = songs.length-1
        }
        songLoad(songs[songIndex])
        setActiveMusic()
        player.play()
        playBtn.innerText = "Paused"
    }

    nextBtn.addEventListener("click",nextSong)
    prevBtn.addEventListener("click",prevSong)


playBtn.addEventListener("click",() => {
    if(player.paused){
        player.play()
        playBtn.innerText = "Paused"
        setActiveMusic()
        console.log(player.duration);
    }
    else {
       
        player.pause()
        playBtn.innerText = "Play"
    }
})

songs.forEach((e,index) => {
    const card = document.createElement("div");
    card.classList = "songCard";
    const cardImage = document.createElement("img");
    cardImage.src = `../Assests/covers/${e.SongName}.jpg`;
    musicContainer.appendChild(card)
    card.appendChild(cardImage)

    card.addEventListener("click",() => {
        songIndex = index;
        songLoad(songs[songIndex]);
        player.play();
        playBtn.innerText = "Paused"
    })
})


console.log(player.duration);

function updateProgress(e){
    const {duration,currentTime} = e.srcElement;
    const progressPersent = (currentTime/duration)*100;
    progressBar.style.width = `${progressPersent}%`
}

function setProgressBar(e){
    const width = this.clientWidth;
    const clickPosition = e.offsetX;
    const duration = player.duration;
    player.currentTime = (clickPosition/width)*duration;
}

songByMovie.addEventListener("click",() => {
    songListContainer.classList.toggle("songListActive")
})

songs2.forEach((e) => {
    const songList = document.createElement("div");
    songList.classList.add("songList");
    songList.innerText = e.movieName;
    songListContainer.appendChild(songList)
   

    songList.addEventListener("click",() => {
        musicContainer.innerHTML = ""
        for(let i = 0; i < e.movieSongList.length; i++){
            const card = document.createElement("div");
            card.classList = "songCard";
            const cardImage = document.createElement("img");
            cardImage.src = `../Assests/songList/${e.movieName}/covers/${e.movieSongList[i]}.jpg`;
            cardImage.alt = "COMING SOON"
            musicContainer.appendChild(card)
            card.appendChild(cardImage)

            

            card.addEventListener("click",() => {
                player.src = `../Assests/songList/${e.movieName}/songs/${e.movieSongList[i]}.mp3`;
                player.play();
                console.log(`../Assests/songList/${e.movieName}/songs/${e.movieSongList[i]}.mp3`);
                playBtn.innerText = "Paused"
            })
        }
    })
})

// function setActiveMusic(){
//     const allSong = document.querySelectorAll(".cardMusicContainer .songCard");
//    allSong.forEach((el,index) => {
//     el.classList.remove(".activeMusic")
//     if(index === songIndex){
//         el.classList.add(".activeMusic")
//     }
//     console.log(el,index);
//    })
// }

player.addEventListener("timeupdate",updateProgress)
progressBarContainer.addEventListener("click",setProgressBar)
player.addEventListener("ended",nextSong)



