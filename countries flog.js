//Q.no:3(APRL: but >Service Unavailable<)
var inf=new XMLHttpRequest();
    
inf.open("GET","https://restcountries.com/v3.1/all");
inf.send();
inf.onload=function(){
    var result=JSON.parse(inf.response);
    for(var i=0;i<inf.length;i++){
        console.log(inf[i].flogs);
    }
    
        
}