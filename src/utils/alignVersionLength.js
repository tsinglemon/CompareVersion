import {getMaxNum} from "./getMaxNum";
import {getNumMaxLength} from "./getNumMaxLength";

/*
* 对齐版本号长度
* */
export function alignVersionLength(versionList) {
  const versionLengthList = versionList.map((el) => el.length);
  const maxLen = getMaxNum(versionLengthList)

  /*
  * 所有项总长度对齐
  * 输入 [1,20,3], [2,3,4,5]
  * 输出 [1,20,3,0], [2,3,4,5]
  * */
  const newVersionList = versionList.map((list) => {
    let fillList = [];//需要填充的元素
    if (maxLen > list.length) {
      fillList = (new Array(maxLen - list.length)).fill('0').map((el) => el);
    }
    return [...list, ...fillList];
  });
  // console.log('newVersionList', newVersionList)

  /*
  * 把输入的数组各项组成一个二维数组，并在每个子数组中算出最长项的长度
  * 输入 [1, 20, 3, 0], [2, 3, 4, 5]
  * 组合 [ [1, 2], [20, 3], [3, 4], [0, 5] ]
  * 输出 [1, 2, 1, 1]
  * */
  const listBlockLen = new Array(maxLen).fill('').map((el, i) => {
    let item = [];
    newVersionList.forEach((list) => item.push(list[i]));
    return item;
  })
  const versionItemLengthList = listBlockLen.map((el) => getNumMaxLength(el));
  // console.log('versionItemLengthList', versionItemLengthList);
  const result = newVersionList.map((list, listIndex) => {
    const item = list.map((el, i) => {
      let fillList = [];
      if (el.length < versionItemLengthList[i]) {
        fillList = new Array(versionItemLengthList[i] - el.length).fill('0').map((empty) => empty);
      }
      fillList = fillList.join('');
      return fillList + el;
    })
    // console.log(`item-${listIndex}`, item)
    return item.join('');
  })
  // console.log('result', result)

  return result;
}