function displayCaracter(n){
  var tab=["A","B","C"];
  for(var i=1;i<=n;i++){
   
    if(i%2!=0){
        console.log(tab[0]);
    }
    else{
        if(i%4==0){
            console.log(tab[2]);
        }
        else{
            console.log(tab[1]);
        }
    }
}
}
displayCaracter(10);
module.exports = displayCaracter;