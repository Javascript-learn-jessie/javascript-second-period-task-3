'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collection = [];
  let countDic = {};
  let object = {};
  let count = 0;
  let B = objectB['value'];
  for (let value of collectionA) {
    let v = value;
    let count = 1;
    //判断特殊字符
    let index = v.search('-');
    if (index != -1) {
      v = value[0];
      count = parseInt(value.substr(2, value.length - 1));
    }
    if (countDic[v] == undefined) {
      countDic[v] = count;
    }
    else {
      if (count != 0) {
        countDic[v] += count;
        count = 1;
      }
      else countDic[v]++;
    }
  }
  for (let key in countDic) {
    object['key'] = key;
    object['count'] = countDic[key];
    collection.push(object);
    object = {};
  }
  collection.map(function (item) {
    for (let b of B) {
      if (item['key'] == b) {
        let discount = Math.floor(item['count'] / 3) * 1;
        return item['count'] -= discount;
      }
    }
  })
  return collection;
}
