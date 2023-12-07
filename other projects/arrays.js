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