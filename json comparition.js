//Q.no:1(JSON comparition)
let obj1={name:"person 1",age:5};
let obj2={age:5,name:"peson 1"};
const arr1=JSON.stringify(obj1);
const arr2=JSON.stringify(obj2);
if(arr1===arr2){
    console.log("same");
    
}else{
 console.log("not same");
}