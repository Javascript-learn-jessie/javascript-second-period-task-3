'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result=[];
  let arrayB = objectB['value'];
  for(let a of collectionA){
    for(let b of arrayB){
      if(a==b)result.push(a);
    }
  }
  return result;
}
