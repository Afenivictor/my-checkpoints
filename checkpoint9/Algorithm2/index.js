function insertionSort(arr) {
    // Start from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Element to be inserted into the sorted portion
        let j = i - 1;        // Compare with elements in the sorted part

        // Move elements of arr[0...i-1] that are greater than current 
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;  // Move left through the sorted portion
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    return arr;
}
//  Example 

let arr = [12, 11, 13, 5, 6];
console.log("Before sorting:", arr);

let sortedArray = insertionSort(arr);
console.log("After sorting:", sortedArray);
