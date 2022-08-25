const hasDuplicate=arr=>new Set(arr).size!==arr.length;

console.log(hasDuplicate([1,1,-1,4]));
