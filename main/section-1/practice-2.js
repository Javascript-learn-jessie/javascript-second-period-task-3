'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var result=[];
  for(let array of collectionB){
    for(let a of collectionA){
      for(let b of array){
        if(a==b) result.push(a);
      }
    }
  }
  return result;
}
