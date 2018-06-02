'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let B = objectB['value'];
  collectionA.map(function(item){
    for(let b of B){
      if(item['key']==b){
        let discount=Math.floor(item['count']/3)*1;
        return item['count']-=discount;
      }
    }
  })
  return collectionA;
}
