// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be defined as a function', function(){
        expect(typeof sayHello) .toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return Hello, Jane!', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return Hello, Alex!', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
    describe('isFive', function(){
     it('should be defined as a function', function(){
         expect(typeof isFive).toBe("function" );
     })
        it('should return a boolean', function(){
            expect(isFive(true || false)).toBe("boolean" );
        })
        it('should return a 5', function(){
            expect(isFive(5)).toBe(5 );
        })
        it('should return a \'5\'', function(){
            expect(isFive("5")).toBe("5");
        })
});
        describe('isEven', function (){
        it('should be define as a function', function(){
            expect(typeof isEven).toBe("function")
        })
        it('should return a boolean no matter the input', function (){
            expect(typeof isEven()).toBe('boolean')
        })
        it('returns true when executed with isEven(2)', function(){
            expect(isEven(2)).toBe(true)
        })
        it('returns true when executed with isEven(-4)', function(){
            expect(isEven(-4)).toBe(true)
        })
        it('returns false when executed with isEven(3)', function(){
            expect(isEven(3)).toBe(false)
        })
        it('returns false when called with isEven banana', function(){
            expect(isEven("banana")).toBe(false)
        })
        it('returns true when called with isEven("8")', function(){
            expect(isEven(8)).toBe(true)
        })
        it('returns false when called with isEven(Infinity)', function(){
            expect(isEven("Infinity")).toBe(false)
        })
        it('return false when called with a boolean input like isEventrue or isEvenfalse', function(){
            expect( isEven()).toBe(false)
        })
         it('returns false when called without an argument like', function(){
         expect(isEven()).toBe(false)
        })
    });
        describe('isVowel', function (){
            it('should be define as a function', function(){
                expect(typeof isVowel).toBe("function")
    })
        it('should always return a boolean', function(){
            expect(typeof isVowel()).toBe('boolean')
        })
});