'use strict';

module.exports = function countSameElements(collection) {
  let result=[];
  let key = collection[0];
  let countDic={};
  let object={};
  let count=0;
  for(let value of collection){
    if(countDic[value]==undefined){
      countDic[value]=1;
    }else{
      countDic[value]++;
    }
  }
  for(let key in countDic){
    object['key']=key;
    object['count']=countDic[key];
    result.push(object);
    object={};
  }
  return result;
}
