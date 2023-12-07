function insertionSort(){
    disableBtns();
    let size = itemSizes.length;
    for(let i=1; i<size; i++){
        let j = i;
        let key = itemSizes[i];
        updateItem(items[i], itemSizes[i], 'yellow');
        setTimeout(() => toggleUnderline(0, i, 1), prevdelayTime);
        while(j>0 && itemSizes[j-1] > key){
            updateItem(items[j], itemSizes[j], 'red');
            updateItem(items[j-1], itemSizes[j-1], 'red');
            itemSizes[j] = itemSizes[j-1];
            updateItem(items[j], itemSizes[j], 'lightgreen');
            j--;
        }
        setTimeout(() => toggleUnderline(0, i, 0), prevdelayTime);
        itemSizes[j] = key;
        updateItem(items[j], itemSizes[j], 'lightgreen');
        updateItem(items[i-1], itemSizes[i-1], 'lightgreen');
    }
    setTimeout(enableBtns,prevdelayTime);
}
function insertionInfo(){
    pseudocodeContainer.style.display = "block"
    complexityContainer.style.display = "block"
    pseudocode.innerHTML = "<code>procedure insertionSort(A: list of sortable items)<br>n = length(A)<br>"+
    "for i = 1 to n - 1 do<br>j = i<br>while j > 0 and A[j-1] > A[j] do<br>swap(A[j], A[j-1])<br>" +
    "j = j - 1<br>end while<br>end for<br>end procedure</code>"
    timeComplexity.innerHTML = "Time Complexity : O(n)<sup>2</sup>"
    spaceComplexity.innerHTML = "Space Complexity : O(1)"
}