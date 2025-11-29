x = Number(prompt("entrer une valeur"));
if(x<0){
    console.log("negatif number");
}else if (x>0 && x<10){
    console.log("petit");
}else if (x>11 && x<50){
    console.log("moyenn");
}else if (x>50 && x<100){
    console.log("grand");
}else {
    console.log("tres grand");   
}