'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
  let key = collection[0];
  let countDic = {};//存储字符对应出现的次数
  let object = {};
  for (let value of collection) {
    let v = value;
    let count = 1;
    //判断特殊字符
    let index = v.search('-');
    if (index!= -1) {
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
  //计数结果按照要求输出
  for (let key in countDic) {
    object['key'] = key;
    object['count'] = countDic[key];
    result.push(object);
    object = {};
  }
  return result;
}
