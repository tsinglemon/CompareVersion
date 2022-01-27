# 安装
`yarn add compare-version-plus`
# 使用
```javascript
compareVersion('1.2.3').isAfter('1.1.5'); //true
compareVersion('1.2.3').isBefore('1.1.5'); //false
compareVersion('1.2.3').isSame('1.1.5'); //false
compareVersion('1.2.3').isSameOrAfter('1.1.5'); //true
compareVersion('1.2.3').isSameOrBefore('1.1.5'); //false
compareVersion('1.2.3').isBetween('1.1.5', '1.2.4'); //true
compareVersion('1.2.3').isSameOrBetween('1.1.5', '1.2.3'); //true
```
