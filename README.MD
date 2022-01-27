# 安装
`yarn add compare-version-plus`
# 使用
```javascript
//大于
compareVersion('1.2.3').isAfter('1.1.5'); //true
//小于
compareVersion('1.2.3').isBefore('1.1.5'); //false
//等于
compareVersion('1.2.3').isSame('1.1.5'); //false
//大于等于
compareVersion('1.2.3').isSameOrAfter('1.1.5'); //true
//小于等于
compareVersion('1.2.3').isSameOrBefore('1.1.5'); //false
//在某两个版本之间，不包含起始点
compareVersion('1.2.3').isBetween('1.1.5', '1.2.4'); //true
//在某两个版本之间，包含起始点
compareVersion('1.2.3').isSameOrBetween('1.1.5', '1.2.3'); //true
```
