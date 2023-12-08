let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

const catTreats [3, 5, 2, 6];
//forst cat gor 3, secomd 5...

let total = 0;
for (let i = 0; i < catTreats.length; i++) {
total += catTreats[i];
// totalTreats = totalTreats + catTreats[i]
}

// totalTreats is like your notebook. It starts at 0.
// The for loop goes through each element of catTreats (each cat).
// totalTreats += catTreats[i]; adds the treats of each cat to the total.
// After the loop, totalTreats holds the sum of all treats given to the cats, just like the number in your notebook.


function countBooks(bookstoreNetwork) {
    let totalBooks = 0;
    for (i = 0 ; i < bookstoreNetwork.length; i ++) {
        for (j = 0; j < bookstoreNetwork[i].length; j ++) {
            for (k = 0; k < bookstoreNetwork[i][j].length; k ++) {
                    totalBooks += bookstoreNetwork[i][j][k];
            }
        }
    }
    
    return totalBooks;
}



function sum(arr, n) {
    // Only change code below this line
  // Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
  if (n <= 0) {
    return 0; 
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    
  
    // Only change code above this line
  }


  function totalZits(arr, n) {
    if (n <= 0) {
      return 0; // Base case: no patients left to treat.
    } else {
      return totalZits(arr, n - 1) + arr[n - 1]; // Treat the first patient and add it to the total for the rest.
    }
  }