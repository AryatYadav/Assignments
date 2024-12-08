function concatenateArrays() {
  const array1 = document.getElementById("array1").value.split(",");
  const array2 = document.getElementById("array2").value.split(",");
  let concatenatedArray = array1.concat(array2);

 slicedArray=concatenatedArray.slice(0,-2)
     
  const value = document.getElementById("searchValue").value;
  const index = concatenatedArray.indexOf(value);
  if (index !== -1) {
      document.getElementById("result").innerHTML = `Concatenated Array:[${concatenatedArray}]<br>
     Sliced Array: [${slicedArray}]<br>
      Index of ${value}:  ${index}`
  } else {
          document.getElementById("result").innerHTML = `${concatenatedArray}<br>
            ${slicedArray}<br>Element not found in the array;`
  }
}