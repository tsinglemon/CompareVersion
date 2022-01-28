//检查版本号是否合法
export function checkVersion(version) {
  if (!this.version) return false;
  //格式如 0.0.1；
  const isPass = /^[0-9]{1,}((\.[0-9]+)+)?$/.test(version);
  if (!isPass) {
    console.error(`版本号[${version}]输入有误 期望格式 → [number1.number2.number3]`);
  }
  return isPass;
}