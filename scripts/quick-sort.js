function quickSort(){
    disableBtns();
    quickSorting(0, itemSizes.length - 1);
    setTimeout(enableBtns,prevdelayTime);
}

function partition(low, high) {
    // Choosing the pivot
    let pivot = itemSizes[high];
    setTimeout(() => toggleUnderline(low, high, 1), prevdelayTime);
    updateItem(items[high], itemSizes[high], "orange");
   
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
   
    for (let j = low; j < high; j++) {
        updateItem(items[j], itemSizes[j], "yellow");
        // If current element is smaller than the pivot
        if (itemSizes[j] < pivot) {
            updateItem(items[j], itemSizes[j], "red");
            i++;
            updateItem(items[i], itemSizes[i], "red");
            [itemSizes[i], itemSizes[j]] = [itemSizes[j], itemSizes[i]]; // Swap elements
            updateItem(items[i], itemSizes[i], "lightGreen");
            updateItem(items[j], itemSizes[j], "lightGreen");
        }
        updateItem(items[low], itemSizes[low], "lightGreen");
    }
   
    [itemSizes[i + 1], itemSizes[high]] = [itemSizes[high], itemSizes[i + 1]]; // Swap pivot to its correct position
    updateItem(items[i+1], itemSizes[i+1], "lightGreen");
    updateItem(items[high], itemSizes[high], "lightGreen");
    setTimeout(() => toggleUnderline(low, high, 0), prevdelayTime);

    return i + 1;
}
 
// The main function that implements QuickSort
function quickSorting(low, high) {
    if (low < high) {
        // pi is the partitioning index, itemSizes[pi] is now at the right place
        let pi = partition(low, high);
   
        // Separately sort elements before partition and after partition
        quickSorting(low, pi - 1);
        quickSorting(pi + 1, high);
    }
}
function quickInfo(){
    pseudocodeContainer.style.display = "block"
    complexityContainer.style.display = "block"
    pseudocode.innerHTML = "<code>procedure quickSort(array A, low, high)<br>if low < high then<br>"+
    "pivotIndex = partition(A, low, high)<br>quickSort(A, low, pivotIndex - 1)<br>" +
    "quickSort(A, pivotIndex + 1, high)<br>end if<br>end procedure</code>"
    timeComplexity.innerHTML = "Time Complexity : O(n log n)"
    spaceComplexity.innerHTML = "Space Complexity : O(log n)"
}