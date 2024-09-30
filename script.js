// let progress = document.getElementById('progress');
// let song = document.getElementById('songs');
// let ctrlIcon = document.getElementById('ctrlIcon');

// song.onloadedmetadata = ()=>{
//     progress.max = song.duration;
//     progress.value = song.currenTime;

// }

// ctrlIcon.addEventListener('click',()=>{
//     if(ctrlIcon.classList.contains("fa-pause")){
//         song.pause();
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }
//     else{
//         song.play();
//         ctrlIcon.classList.add("fa-pause");
//         ctrlIcon.classList.remove("fa-play");

//     }
// });

// if(song.play()){
//     setInterval(()=>{
//         progress.value = song.currenTime;
//     },500)
// }

// progress.onchange = function(){
//     song.play();
//     song.currenTime = progress.value
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.remove("fa-play");

// }



// chat gpt code 

let progress = document.getElementById('progress');
let song = document.getElementById('songs');
let ctrlIcon = document.getElementById('ctrlIcon');
let progressInterval;

// Set max value of progress bar based on song duration
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;  // Corrected typo
};

// Play/pause button logic
ctrlIcon.addEventListener('click', () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        clearInterval(progressInterval);  // Stop updating progress when paused
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        // Update progress every 500ms
        progressInterval = setInterval(() => {
            progress.value = song.currentTime;  // Corrected typo
        }, 500);
    }
});

// Update song current time based on progress bar
progress.onchange = function() {
    song.currentTime = progress.value;  // Corrected typo
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    // Ensure progress bar keeps updating after manual change
    progressInterval = setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};
