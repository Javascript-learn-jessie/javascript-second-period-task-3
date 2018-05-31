'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result=[];
  let arrayB = objectB['value'];
  for(let keyA of collectionA){
    for(let b of arrayB){
      if(keyA['key']==b)result.push(keyA['key']);
    }
  }
  return result;
}
