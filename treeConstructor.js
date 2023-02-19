var strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)" ,"(9,5)"];
var strArr1= ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];

function TreeConstructor(strArr) {
 
  var parents = {};

  
  for (var i = 0; i < strArr.length; i++) {
   
    var pair = strArr[i].slice(1, -1).split(",");
    var fil = pair[0];
    var pere = pair[1];

    
    if (fil in parents) {
      return false;
    }


    parents[fil] = pere;
  }

  
  for (var fil in parents) {
    var pere = parents[fil];
    var count = 0;

    for (var otherfil in parents) {
      if (parents[otherfil] === pere) {
        count++;
      }
    }

    if (count > 2) {
      return false;
    }
  }

  
  return true;
}

console.log(TreeConstructor(strArr));

console.log(TreeConstructor(strArr1));

module.exports = TreeConstructor;
