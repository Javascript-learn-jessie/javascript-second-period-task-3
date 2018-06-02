'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collection=[];
  let countDic={};
  let object={};
  let count=0;
  let B = objectB['value'];
  for(let value of collectionA){
    if(countDic[value]==undefined){
      countDic[value]=1;
    }else{
      countDic[value]++;
    }
  }
  for(let key in countDic){
    object['key']=key;
    object['count']=countDic[key];
    collection.push(object);
    object={};
  }
  collection.map(function(item){
    for(let b of B){
      if(item['key']==b){
        let discount=Math.floor(item['count']/3)*1;
        return item['count']-=discount;
      }
    }
  })
  return collection;
}
