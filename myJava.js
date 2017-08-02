// var = pleaseWork = "200";
var myWidth = "600";
// var clownPhotoTwo = "myPhotos/uglyTwo.jpg";
var clownList = ["myPhotos/uglyOne.png", "myPhotos/uglyTwo.jpg", "myPhotos/uglyThree.png"];
var currentClown = 0;
var myDogsList = ["myPhotos/lucyOne.jpeg", "myPhotos/lucyTwo.jpeg", "myPhotos/lucyThree.jpeg",]
var currentDog = 0;

function changeSize(a) {
document.getElementById(a).width = myWidth;

}

function changeSizeBack(a) {
document.getElementById(a).width = "200";

}

function clownSwitch() {
  currentClown = currentClown + 1;
  if (currentClown == 3) {
    currentClown = 0;
  }
  document.getElementById("firstClown").src = clownList[currentClown];
}

function setupStart() {
  setInterval(clownSwitch, 3000);
}

function nextDog() {
  if (currentDog == 0 || currentDog == 1) {
    currentDog = currentDog + 1;
  }
  document.getElementById("myDogsHere").src = myDogsList[currentDog];
}

function lastDog() {
  if (currentDog == 2 || currentDog == 1) {
    currentDog = currentDog - 1;
  }
  document.getElementById("myDogsHere").src = myDogsList[currentDog];
}
