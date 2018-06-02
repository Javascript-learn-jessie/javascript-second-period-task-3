'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let B = objectB['value'];
  collectionA.map(function(item){
    for(let b of B){
      if(item['key']==b){
        return item['count']-=1;
      }
    }
  })
  return collectionA;
}
