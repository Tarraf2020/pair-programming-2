

 


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function compareNb(nb1,nb2){
      return nb1==nb2 ;
  }
console.log(compareNb(1,5));


  var nb=getRndInteger(0, 30);;
  



const checkit= () =>{
    var i = 5;
    do{
        const nb1 = +prompt( "You have" + i +  "steps\n Enter the first number");
        i--;
     var ali = compareNb(nb1,nb);
     
     if(ali == true){
         alert("you gussed correctly");
         break;
    }
    return ali;}
while(i<=0)
 
  
}


  console.log(nb);
  
console.log(checkit());
