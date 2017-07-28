var should = require('should')
var fun = require('./mathfun')


//how to run, in this folder
// 'mocha 2-mocha.js'
//generate report
// 'mocha -R spec 2-mocha.js'


describe('MathFun', () => {
    describe('When used synchronously', () => {
        //it.only(  'run this case only'
        //it.skip(  'skip this test'
        it('should double even numbers correctly', () => {
            fun.evenDoublerSync(2).should.equal(4)
        })

        it('should throw on odd numbers', (done)=>{
            (()=>{fun.evenDoublerSync(3)}).should.throw(/Odd/)
            done()
        })
    })

    describe('when used asynchronously',()=>{
        it('should double even numbers correctly',(done)=>{
            fun.evenDoubler(2,(err,results)=>{
                should.not.exist(err)
                results.should.equal(4)
                done()
            })
        })
    })
})





var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});