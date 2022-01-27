//找最大数字
export function getMaxNum(list) {
  list = list.map((num) => num);
  list.sort((a, b) => a - b);
  return list[list.length - 1];
}