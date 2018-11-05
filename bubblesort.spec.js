describe('Bubble Sort', function () {
    var array;
    beforeEach(function () {
        sortedArray = [1, 4, 12, 15, 18, 34, 56, 77, 78, 80];
        unsortedArray = [23, 5, 86, 32, 11, 45, 72, 15, 32];
        stringArray = ['apple', 'dog', 'cat', 'banana'];

        spyOn(window, 'swap').and.callThrough(); // looking for swap calls
    });

    it('determines if number of swap calls is correct', function () {
        bubbleSort([1,2]);
        expect(swap.calls.count()).toEqual(1);
    }); 


    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it('handles a single value array', function () {
        expect(bubbleSort([1])).toEqual([1]);
    });

    it('handles an array with only two values', function () {
        expect(bubbleSort([1, 2])).toEqual([1, 2]);
        expect(bubbleSort([2, 1])).toEqual([1, 2]);
    });

    it('determines if swap sort is correct', function () {
        expect(swap(23, 15)).toEqual([15, 23]);
        expect(swap(15, 23)).toEqual([15, 23]);
        expect(swap(15, 15)).toEqual([15, 15]);
    });

    it('determines if swap sort is correct', function () {
        expect(bubbleSort(sortedArray)).toEqual([1, 4, 12, 15, 18, 34, 56, 77, 78, 80]);
        expect(bubbleSort(unsortedArray)).toEqual([5, 11, 15, 23, 32, 32, 45, 72, 86]);
    });

    it('can handle string values', function () {
        expect(bubbleSort(stringArray)).toEqual(['apple', 'banana', 'cat', 'dog']);
    });

});