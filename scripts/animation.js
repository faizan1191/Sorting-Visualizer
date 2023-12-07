algoSpeedElem.addEventListener("change", sortingSpeedUpdate);
var speedVal = 100;
var prevdelayTime = 0;
var delayTime = 100000 / (Math.floor(arrSizeElem.value / 10) * speedVal + 50);
function sortingSpeedUpdate() {
  let speed = algoSpeedElem.value;
  switch (parseInt(speed)) {
    case 1:
      speedVal = 10;
      break;
    case 2:
      speedVal = 50;
      break;
    case 3:
      speedVal = 100;
      break;
    case 4:
      speedVal = 500;
      break;
    case 5:
      speedVal = 1000;
      break;
  }
  prevdelayTime = 0;
  delayTime = 100000 / (Math.floor(arrSizeElem.value / 10) * speedVal + 50); //Decrease numerator to increase speed.
}

function updateItem(element, size, color) {
  setTimeout(function () {
    let gradient = `radial-gradient(circle at center, ${color} 50%, black 100%)`;
    element.style.setProperty('--gradient-color',gradient);
    element.style.width = size+'px';
    element.style.height = size+'px';
    element.innerHTML = size;
  }, (prevdelayTime += delayTime));
}

function toggleUnderline(from, to, val){
  for(let i = from; i <= to; i++){
    if(val === 1){
      items[i].parentNode?.classList?.add('underline');
      items[from].parentNode?.classList.add('curved-left');
      items[to].parentNode?.classList.add('curved-right');
    } else {
      items[i].parentNode?.classList?.remove('underline');
      items[from].parentNode?.classList?.remove('curved-left');
      items[to].parentNode?.classList?.remove('curved-right');
    }
  }
}

function disableBtns() {
  let algoBtns = document.getElementsByClassName("sort_algo_btn");
  for (let i = 0; i < algoBtns.length; i++) {
    algoBtns[i].disabled = true;
  }
  algoSpeedElem.disabled = true;
  arrSizeElem.disabled = true;
  gnrtArray.disabled = true;
  emptyAlgoDetails();
}

function enableBtns() {
  let algoBtns = document.getElementsByClassName("sort_algo_btn");
  for (let i = 0; i < algoBtns.length; i++) {
    algoBtns[i].disabled = false;
  }
  algoSpeedElem.disabled = false;
  arrSizeElem.disabled = false;
  gnrtArray.disabled = false;
  prevdelayTime = 0;
}

function emptyAlgoDetails(){
  //empty algo details containers
  pseudocodeContainer.style.display = "none";
  complexityContainer.style.display = "none";
  pseudocode.innerHTML = "";
  timeComplexity.innerHTML = "";
  spaceComplexity.innerHTML = "";
}