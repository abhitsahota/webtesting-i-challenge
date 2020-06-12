const enhancer = require('./enhancer.js');
// test away!

describe('testing the video game item features', () => {

    let testItem = {
        name: 'sword',
        durability: 50,
        enhancement: 10
    }
    
    let expected = null
    let result = null

    beforeEach(() => {
        testItem = {
            name: 'sword',
            durability: 50,
            enhancement: 10
        }
    
        expected = null
        result = null
    })

    describe('repair feature', () => {
        it('repair to restore durability to 100', () => {
            expected = 100
            result = enhancer.repair(testItem)
            expect(result.durability).toBe(expected)
        })
    })

    describe('enhancement feature', () => {

        describe('success scenarios', () => {
            it('increase the level of an item that is not maxed', () => {
                expected = 11
                result = enhancer.succeed(testItem)
                expect(result.enhancement).toBe(expected)
            })

            it('try to increase the level of an item that is maxed', () => {
                expected = 20
                testItem.enhancement = 20
                result = enhancer.succeed(testItem)
                expect(result.enhancement).toBe(expected)
            })
        })

        describe('fail scenarios', () => {
            

            it('fail to enhance a enchancement level 1-14 item, durability decreases by 5', () => {
                testItem.enhancement = 10
                expected = testItem.durability - 5
                result = enhancer.fail(testItem)
                expect(result.durability).toBe(expected)
            })

            it('fail to enhance a enchancement level 15 item', () => {
                testItem.enhancement = 15
                expected = testItem.durability - 10
                result = enhancer.fail(testItem)
                expect(result.durability).toBe(expected)
            })

            it('fail to enhance a enchancement level 17 item', () => {
                testItem.enhancement = 17

                expected = testItem.enhancement - 1
                result = enhancer.fail(testItem)
                expect(result.enhancement).toBe(expected)

                testItem.durability = 50
                expected = testItem.durability - 10
                expect(result.durability).toBe(expected)
            })
        })
        
    })

})