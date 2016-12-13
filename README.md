# async-kitty
> Generator + yield 异步控制流工具集

## Usage
Install  
```javascript
npm install async-kitty --save
```
Then..
```javascript
const asyncKitty = require('async-kitty');
```

## Methods
### each
`asyncKitty.each(coll, *iteratee)`
> Applies the function iteratee to each item in coll, in parallel
```
* @param {Array} coll - 遍历集合
* @param {*Function} iteratee - 遍历函数
* @return {Array}
```

### eachLimit
`asyncKitty.eachLimit(coll, limit, *iteratee)`
>The same as each but runs a maximum of limit async operations at a time.
```
* @param {Array} coll - 遍历集合
* @param {Number} limit - 单次最大并发数
* @param {*Function} iteratee - 遍历函数
* @return {Array}
```
