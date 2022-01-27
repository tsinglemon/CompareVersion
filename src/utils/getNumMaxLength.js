//找最大长度的项
export function getNumMaxLength(list = []) {
  list = list.map((num) => String(num));
  let maxLen = list[0].length;
  list.forEach((num) => {
    if (maxLen < num.length) maxLen = num.length;
  })
  return maxLen;
}