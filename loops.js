function forLoop(array){
  for(var i = 0; i <= 25; i++){
    if (i === 0){
      array.push(`I am 1 strange loop.`);
    } else {
      if(i >= 2){
      array.push(`I am ${i} strange loops.`);
    }
  }
  }
  return array;
}
forLoop();

function whileLoop(n){
  while(n > 0){
    console.log(--n);
  }
  return 'done';
}
whileLoop();

function doWhileLoop(array){
var array = [];
  do{
    array.shift();
  }while()
  return array;
}
doWhileLoop();
