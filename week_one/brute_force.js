function selectionSort(a) {
  // red value searches the array for a lower value
  for (let i = 0; i < a.length; i++) {
    let minvalue = a[i];
    let minindex = i;
    for (let red = i + 1; red < a.length; red++) {
      if (a[red] < minvalue) {
        minvalue = a[red];
        minindex = red;
      }
    }
    [a[i], a[minindex]] = [a[minindex], a[i]];
  }
  return a;
}

console.log(selectionSort([3, 2, 1, 16, 8, 2, 4, 3]));
