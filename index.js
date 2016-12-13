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
 * alias as forEach
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
 * alias as forEach
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

module.exports =  {
    each: each,
    eachLimit: eachLimit
};
