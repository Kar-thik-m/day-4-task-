//Q>no:3(API URL)
//but >>Service Unavailable<<..
var world= new XMLHttpRequest();
world.open("GET","https://restcountries.com/v3.1/all");
world.send();
world.onload=function(){
var result=JSON.parse(world.response);
for(var i=0;i<world.length;i++){
    console.log(world[i].countriesname,world[i].religion,world[i].subreligion,world[i].population);
}

} 
