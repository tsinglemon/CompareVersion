import {checkVersion} from './utils/checkVersion';
import {alignVersionLength} from './utils/alignVersionLength';

function CompareVersion(version) {
  this.version = [];
  this.firstVersion = version;
  if (this.checkVersion(version)) {
    this.version = version.split('.')
  } else {
    this.version = null;
  }
}

CompareVersion.prototype.checkVersion = checkVersion;
//等于
CompareVersion.prototype.isSame = function (version, showLog = true) {
  if (!this.checkVersion(version)) return null;
  const versionStr = version;
  version = version.split('.');
  const [version1, version2] = alignVersionLength([this.version, version]);
  const result = version1 === version2;

  // showLog && console.info(`${this.firstVersion}等于${versionStr}`, result);
  return result
}
//小于
CompareVersion.prototype.isBefore = function (version, showLog = true) {
  if (!this.checkVersion(version)) return null;
  const versionStr = version;
  version = version.split('.');
  const [version1, version2] = alignVersionLength([this.version, version]);
  const result = version1 < version2;

  // showLog && console.info(`${this.firstVersion}小于${versionStr}`, result);
  return result;
}
//大于
CompareVersion.prototype.isAfter = function (version, showLog = true) {
  if (!this.checkVersion(version)) return null;
  const versionStr = version;
  version = version.split('.');
  const [version1, version2] = alignVersionLength([this.version, version]);
  const result = version1 > version2;

  // showLog && console.info(`${this.firstVersion}大于${versionStr}`, result);
  return result;
}
//小于等于
CompareVersion.prototype.isSameOrBefore = function (version, showLog = true) {
  const result = this.isSame(version, false) || this.isBefore(version, false);

  // showLog && console.info(`${this.firstVersion}小于等于${version}`, result);
  return result;
}
//大于等于
CompareVersion.prototype.isSameOrAfter = function (version, showLog = true) {
  const result = this.isSame(version, false) || this.isAfter(version, false);

  // showLog && console.info(`${this.firstVersion}大于等于${version}`, result);
  return result;
}
//虚心区间内
CompareVersion.prototype.isBetween = function (versionStart, versionEnd) {
  if (!versionEnd) versionEnd = versionStart
  const result = this.isAfter(versionStart, false) && this.isBefore(versionEnd, false);
  const versionStartStr = versionStart;
  const versionEndStr = versionEnd;

  // console.info(`${this.firstVersion}在(${versionStartStr}, ${versionEndStr})之间`, result);
  return result;
}
//实心区间内
CompareVersion.prototype.isSameOrBetween = function (versionStart, versionEnd) {
  if (!versionEnd) versionEnd = versionStart;
  const result = this.isSameOrAfter(versionStart, false) && this.isSameOrBefore(versionEnd, false);
  const versionStartStr = versionStart;
  const versionEndStr = versionEnd;

  // console.info(`${this.firstVersion}在[${versionStartStr}, ${versionEndStr}]之间`, result);
  return result;
}

export default function (version) {
  return new CompareVersion(version);
}