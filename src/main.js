import {checkVersion} from './utils/checkVersion';
import {alignVersionLength} from './utils/alignVersionLength';

function CompareVersion(version) {
  this.version = version.split('.')
}

//等于
CompareVersion.prototype.isSame = function (version) {
  if (!checkVersion(version)) return null;
  version = version.split('.');
  const [version1, version2] = alignVersionLength([this.version, version]);
  return version1 === version2;
}
//小于
CompareVersion.prototype.isBefore = function (version) {
  if (!checkVersion(version)) return null;
  version = version.split('.');
  const [version1, version2] = alignVersionLength([this.version, version]);
  return version1 < version2;
}
//大于
CompareVersion.prototype.isAfter = function (version) {
  if (!checkVersion(version)) return null;
  version = version.split('.');
  const [version1, version2] = alignVersionLength([this.version, version]);
  return version1 > version2;
}
//小于等于
CompareVersion.prototype.isSameOrBefore = function (version) {
  return this.isSame(version) || this.isBefore(version)
}
//大于等于
CompareVersion.prototype.isSameOrAfter = function (version) {
  return this.isSame(version) || this.isAfter(version);
}
//虚心区间内
CompareVersion.prototype.isBetween = function (versionStart, versionEnd) {
  return this.isAfter(versionStart) && this.isBefore(versionEnd)
}
//实心区间内
CompareVersion.prototype.isSameBetween = function (versionStart, versionEnd) {
  return this.isSameOrAfter(versionStart) && this.isSameOrBefore(versionEnd)
}

export default function (version) {
  return new CompareVersion(version);
}