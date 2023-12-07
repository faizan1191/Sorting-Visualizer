function selectionSort(){
    disableBtns();
    var i, j, min_idx, n = itemSizes.length;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        console.log(items[0], items[n-1])
        for (j = i + 1; j < n; j++) {
            updateItem(items[j], itemSizes[j], "yellow");
            if (itemSizes[j] < itemSizes[min_idx]){
                min_idx = j;
            }
            updateItem(items[j], itemSizes[j], "lightGrey");
        }
        updateItem(items[min_idx], itemSizes[min_idx], "red");
 
        // Swap the found minimum element with
        // the first element in unsorted array
        [itemSizes[i], itemSizes[min_idx]] = [itemSizes[min_idx], itemSizes[i]];
        updateItem(items[i], itemSizes[i], "lightgreen");
    }
    setTimeout(enableBtns,prevdelayTime);
}
function selectionInfo(){
    pseudocodeContainer.style.display = "block"
    complexityContainer.style.display = "block"
    pseudocode.innerHTML = "<code>procedure selectionSort(array A)<br>n = length of A<br>"+
    "for i from 0 to n - 1 do<br>minIndex = i<br>for j from i + 1 to n do<br>if A[j] < A[minIndex] then<br>" +
    "minIndex = j<br>swap A[minIndex] with A[i]<br>end for<br>end procedure</code>"
    timeComplexity.innerHTML = "Time Complexity : O(n)<sup>2</sup>"
    spaceComplexity.innerHTML = "Space Complexity : O(1)"
}