function mergeSort(){
    disableBtns();
    mSort(0, itemSizes.length-1);
    setTimeout(enableBtns,prevdelayTime);
}

function mergeInfo(){
    pseudocodeContainer.style.display = "block"
    complexityContainer.style.display = "block"
    pseudocode.innerHTML = "<code>mergeSort(arr[], l,  r)<br>If r > l<br>middle m = l + (r - l)/2<br>mergeSort(arr, l, m)<br>mergeSort(arr, m + 1, r)<br>merge(arr, l, m, r)</code>"
    timeComplexity.innerHTML = "Time Complexity : O(nLogn)"
    spaceComplexity.innerHTML = "Space Complexity : O(n)"
}

function mSort(left ,right){
    if(left<right){
        var mid=Math.floor((left + right) / 2);
        updateItem(items[mid],itemSizes[mid], 'yellow');
        //sort first and second halves
        mSort(left,mid);
        mSort(mid+1,right);
        //merge both the sorted halves
        merge(left,mid,right);
    }
}

function merge(left, mid, right){
    setTimeout(() => toggleUnderline(left, right, 1), prevdelayTime);
    var Arr = [];
    var i = left, x=left, y=mid+1,k=0;
    
    for(i=left; i<=right; i++){
        if(x>mid){
            updateItem(items[y], itemSizes[y], 'red');
            Arr[k++] =  itemSizes[y++];
        }
        else if(y>right){
            updateItem(items[x], itemSizes[x], 'red');
            Arr[k++] =  itemSizes[x++];
        }
        else if( itemSizes[x]< itemSizes[y]){
            updateItem(items[x], itemSizes[x], 'red');
            Arr[k++] =  itemSizes[x++];
        }else{
            updateItem(items[y], itemSizes[y], 'red');
            Arr[k++] =  itemSizes[y++];
        }
    }

    // merging array back into main array
    k=0;
    for(i=left; i<=right; i++){
        itemSizes[i] = Arr[k++];
        updateItem(items[i], itemSizes[i], 'lightgreen');
    }
    setTimeout(() => toggleUnderline(left, right, 0), prevdelayTime);
}