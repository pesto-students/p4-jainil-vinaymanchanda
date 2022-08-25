const triangleArea=(base,height)=>
new Promise((resolve,reject)=>{
  setTimeout(()=>resolve((base*height)/2),2000);
});

const circleArea=(radius)=>
new Promise((resolve,reject)=>{
  setTimeout(()=>resolve(3.14*radius*radius),2000);
});

const totalArea=(areaT,areaC)=>
new Promise((resolve,reject)=>{
  setTimeout(()=>resolve(areaT+areaC),2000);
});

const asyncOpzgenerator= async function* (){
  try{
    const a=await triangleArea(2,3);
    const areaT=yield a;
    const b=await circleArea(5);
    const areaC=yield b;
    const c=await totalArea(areaC,areaT);
    return c;
  }
  catch(e) {
    console.log("Error stacktrace");
    console.log(e);
  }
};

const usingGenerator=async()=>{
console.log("using Geneertaor");
const gen=asyncOpzgenerator();
const area1=(await gen.next()).value;
console.log(area1);
const area2=(await gen.next()).value;
console.log(area2);

const result=(await gen.next(area1,area2)).value;
console.log(result);
}



usingGenerator();