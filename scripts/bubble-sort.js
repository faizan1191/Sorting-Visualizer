function bubbleSort() {
  disableBtns();
  let size =  itemSizes.length;
  for (let i = 0; i < size - 1; i++) {
    setTimeout(() => toggleUnderline(0, size-i-1, 1), prevdelayTime);
    for (let j = 0; j < size - i - 1; j++) {
      updateItem(items[j], itemSizes[j], "yellow");
      updateItem(items[j + 1], itemSizes[j + 1], "yellow");
      if ( itemSizes[j] >  itemSizes[j + 1]) {
        updateItem(items[j], itemSizes[j], "red");
        updateItem(items[j + 1], itemSizes[j + 1], "red");
        // swapping item sizes
        [itemSizes[j], itemSizes[j + 1]] = [itemSizes[j + 1], itemSizes[j]];
      }
      updateItem(items[j], itemSizes[j], "lightGrey");
      updateItem(items[j + 1], itemSizes[j + 1], "lightGrey");
    }
    setTimeout(() => toggleUnderline(0, size-i-1, 0), prevdelayTime);
    // making last element's color green 
    // as in each iteration one element is set to its correct position
    updateItem(items[size - i - 1], itemSizes[size - i - 1], "lightGreen");
  }
  updateItem(items[0], itemSizes[0], "lightGreen");
  setTimeout(enableBtns, prevdelayTime);
}

function bubbleInfo() {
  pseudocodeContainer.style.display = "block";
  complexityContainer.style.display = "block";
  pseudocode.innerHTML =
    "<code>Bubble Sort(arr, n)<br>for i=0 to n-i-1<br>for j=0 to n-i-2<br>if arr[j]>arr[j+1]<br>Swap arr[j] and arr[j+1]</code>";
  pseudocodeContainer.append(pseudocode);
  timeComplexity.innerHTML = "Time Complexity : O(n)<sup>2</sup>";
  spaceComplexity.innerHTML = "Space Complexity : O(1)";
}
