const forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
};

const map = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, arr));
  }
  return res;
};
