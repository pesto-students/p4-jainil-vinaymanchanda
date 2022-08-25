const Fib = (n)=>({
  [Symbol.iterator]:()=>{
let i=1;
let old=0,new1=0;
return{
  next:()=>{
    if(i++<=n){
    [old,new1]=[new1,(old+new1)||1];
    return {value:old,done:false}
  }
  else{
    return {done:true }
  }
}
}
  }
});

console.log([ ...Fib(6)]);

for(let num of Fib(6)){
  console.log(num);
}