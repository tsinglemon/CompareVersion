//检查版本号是否合法
export function checkVersion(version) {
  //第一位不能为0，格式如 1.0.0；
  const isPass = /^[1-9]{1,}\.?((\.?[0-9]){1,})?$/.test(version);
  if (!isPass) {
    console.error(`版本号[${version}]输入有误 期望格式 → [number1.number2.number3]`);
  }
  return isPass;
}