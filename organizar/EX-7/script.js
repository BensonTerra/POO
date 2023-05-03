const video = document.getElementById("video")
const txtTempoSec = document.getElementById("tempoSec")

video.onloadedmetadata = function() 
{
  console.log('metadata loaded!');
  console.log(this.duration);
  document.getElementById("tempoVideo").innerHTML = video.duration
  document.getElementById("tempoSec").max = this.duration
};

document.getElementById("play").addEventListener("click", function()
{
    video.play()
})
document.getElementById("pause").addEventListener("click", function()
{
    video.pause()
})
document.getElementById("inicio").addEventListener("click", function()
{
    video.currentTime = 0
})
document.getElementById("fim").addEventListener("click", function()
{
    video.currentTime = video.duration
})
document.getElementById("tempo").addEventListener("click", function()
{
    video.currentTime = txtTempoSec.value
})
document.getElementById("tempoVideo").innerHTML = video.duration
