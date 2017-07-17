'use strict';
/**
 * <plusmancn@gmail.com> created at 2016.12.13 10:29:08
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 *
 * co 异步控制集 测试文件
 */
const co = require('co');
const should = require('should');

const coKit = require('../');
const random = function *(value) {
    return yield new Promise(function (resolve) {
        let number = parseInt(Math.random(100) * 100);
        setTimeout(function () {
            resolve(value + '-kitty');
        }, number);
    });
};

describe('#coKit', function () {
    describe('#each', function () {
        it('return in order with -kitty suffix', function () {
            return co(function *() {
                let res = yield coKit.each([
                    'Peter',
                    'Zulia',
                    'Tom',
                    'Jimmy',
                    'Snow',
                    'Gusting',
                    'Robot'
                ], random);
                should(res).have.length(7);
                res[0].should.equal('Peter-kitty');
                res[6].should.equal('Robot-kitty');
            });
        });
    });

    describe('#eachLimit', function () {
        it('return in order with -kitty suffix', function () {
            return co(function *() {
                let res = yield coKit.eachLimit([
                    'Peter',
                    'Zulia',
                    'Tom',
                    'Jimmy',
                    'Snow',
                    'Gusting',
                    'Robot'
                ], 2, random);

                should(res).have.length(7);
                res[0].should.equal('Peter-kitty');
                res[6].should.equal('Robot-kitty');
            });
        });
    });

    describe('#filterLimit', function () {
        it('return in order with -kitty suffix', function () {
            return co(function *() {
                let res = yield coKit.filterLimit([
                    'Peter',
                    'Zulia',
                    'Tom',
                    'Jimmy',
                    'Snow',
                    'Gusting',
                    'Robot'
                ], 2, function *(item) {
                    return item.length > 4;
                });
                
                should(res).have.length(5);
                res[0].should.equal('Peter');
            });
        });
    });
});
