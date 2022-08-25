function memoize(fn) {
  let Cache=new Map();
  return function (...args) {
    const key = args.toString();
    if (Cache.has(key)) {
      return Cache.get(key);
    }
    Cache.set(key, fn(...args));
    return Cache.get(key);
  };
}

function add(a, b) {
  return a + b;
}

function time(fn){
console.time();
fn();
console.timeEnd();
}

const memoizeAdd = memoize(add);

time(()=>memoizeAdd(100,100));
time(()=>memoizeAdd(100));
time(()=>memoizeAdd(100,200));
time(()=>memoizeAdd(100,100));

