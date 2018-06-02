'use strict';

module.exports = function countSameElements(collection) {
  let result = [], temp = [];
  let key = collection[0];
  let countDic = {};//存储字符对应出现的次数
  let object = {};
  for (let value of collection) {
    let v = value;
    let count = 1;
    //判断特殊字符
    let index1 = v.search('-');
    let index2 = v.search(':');
    let index3 = v.search('\\[');
    let index;
    if (index1 != -1 || index2 != -1 || index3 != -1) {
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
    object['name'] = key;
    object['summary'] = countDic[key];
    result.push(object);
    object = {};
  }
  return result;
}
