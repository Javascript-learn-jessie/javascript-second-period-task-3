'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];
  for(let a of collectionA){
    for(let b of collectionB){
      if(a==b) result.push(a);
    }
  }
  return result;
}
