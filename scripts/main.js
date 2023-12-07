const arrContainer = document.getElementById("arr_cont");
var arrSizeElem = document.getElementById("arr_size");
var algoSpeedElem = document.getElementById("algo_speed");
var gnrtArray = document.getElementById("generate_arr");
var complexityContainer = document.getElementById('complexity_container');
var timeComplexity = document.getElementById('time_complexity');
var spaceComplexity = document.getElementById('space_complexity');
var pseudocodeContainer = document.getElementById('pseudocode_container');
var pseudocode = document.getElementById('pseudocode');
var items = [];
var itemSizes = [];
gnrtArray.addEventListener("click", generateArray);
arrSizeElem.addEventListener("input", generateArray);

window.onload = generateArray();

function generateArray() {
  //resetting the delay var
  prevdelayTime = 0;

  //empty array container
  arrContainer.innerHTML = "";
    
  items = [];
  itemSizes = [];
  
  let size = parseInt(arrSizeElem.value);
  
  for (let i = 0; i < size; i++) {
    let rndNum = Math.floor(Math.random() * (80 - 40) + 40);
    itemSizes[i] = rndNum;
    let wrapper = document.createElement("div");
    wrapper.classList.add('item-wrapper');
    let element = document.createElement("div");
    let text = document.createTextNode(rndNum);
    element.appendChild(text);
    element.setAttribute("data-value", rndNum);
    element.classList.add("item");
    element.classList.add("text-center");
    //bootstrap class for circular div
    element.classList.add("rounded-circle");
    element.style.height = itemSizes[i]+'px';
    element.style.width = itemSizes[i]+'px';
    items[i] = element;
    wrapper.appendChild(element);
    arrContainer.appendChild(wrapper);
  }
}

function sortAlgoRunner(algo) {
  console.log(algo)
  switch (algo) {
    case "bubble":
      bubbleSort();
      bubbleInfo();
      break;
    case "selection":
      selectionSort();
      selectionInfo();
      break;
    case "insertion":
      insertionSort();
      insertionInfo();
      break;
    case "merge":
      mergeSort();
      mergeInfo();
      break;
    case "quick":
      quickSort();
      quickInfo();
      break;
  }
}