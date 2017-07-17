'use strict';
/**
 * <plusmancn@gmail.com> created at 2016.12.12 19:30:01
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 *
 * co 异步控制集
 */

/**
 * each
 * @param {Array} coll - 遍历集合
 * @param {*Function} iteratee - 遍历函数
 * @return {Array}
 */
function *each(coll, iteratee) {
    return yield coll.map((item) => {
        return iteratee(item);
    });
}

/**
 * eachLimit
 * @param {Array} coll - 遍历集合
 * @param {Number} limit - 单次最大并发数
 * @param {*Function} iteratee - 遍历函数
 * @return {Array}
 */
function *eachLimit(coll, limit, iteratee) {
    let result = [];
    for(let i = 0; i < coll.length;) {
        let piece = coll.slice(i, i+=limit);
        piece = yield piece.map((item) => {
            return iteratee(item);
        });
        result = result.concat(piece);
    }
    return result;
}

/**
 * filter
 * @param {Array} coll - 遍历集合
 * @param {Number} limit - 单次最大并发数
 * @param {*Function} iteratee - 遍历函数，需要返回布尔值
 * @return {Array}
 */
function *filterLimit(coll, limit, iteratee) {
    let result = yield eachLimit(coll, limit, iteratee);
    let rtn = [];
    for(let i = 0; i < result.length; i++) {
        // 过滤结果
        if(result[i]) {
            rtn.push(coll[i]);
        }
    }

    return rtn;
}

module.exports =  {
    each,
    eachLimit,
    filterLimit
};
