var calculator = require('../app/calculator')
var assert = require('chai').assert

describe('calculator tests',function(){
    describe('addition tests',function(){
        it('adds two number together: 5 + 2 = 7',function(){
            assert.equal(calculator.add(5,2),7)
        })
        it('adds two number together: 5 + 2 = 8',function(){
            assert.equal(calculator.add(5,2),8)
        })
    })

    describe('subtraction tests',function(){
        it('subtracts two numbers: 5 - 2 = 3',function(){
            assert.equal(calculator.subtract(5,2),3)
        })
        it('subtracts two numbers: 5 - 2 = 1',function(){
            assert.equal(calculator.subtract(5,2),1)
        })
    })

    describe('multiplication tests',function(){
        it('multiplies two number together: 5 * 2 = 10',function(){
            assert.equal(calculator.multiply(5,2),10)
        })
        it('multiplies two number together: 5 * 2 = 12',function(){
            assert.equal(calculator.multiply(5,2),12)
        })
    })

    describe('division tests',function(){
        it('divides two number: 10 / 2 = 5',function(){
            assert.equal(calculator.divide(10,2),5)
        })
        it('divides two number: 10 / 2 = 8',function(){
            assert.equal(calculator.divide(10,2),8)
        })
    })

    
})