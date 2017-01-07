describe ("Array Finder", function(){
	var arrayData = [3, 4, 2, 5, 6];
	it ("should return 6 as the highest", function(){
		expect(findMax(arrayData)).toEqual(6);
	});

	// it ("should return 50 as the highest value", function(){
	// 	expect (findMax([23, 40, 50, 56, 87, 87, 23])).toEqual(50);
	// });


});

describe ("Array Finder for min", function(){
	var arrayData = [3, 5, 6, 7, 8, 2];
	it ("should return 2 as the lowest value", function(){
		expect (findMin(arrayData)).toEqual(2);
	});
});

describe ("Progression determiner", function(){
	var arrayData = [2, 3, 4, 5, 6, 7];
	it ("should return 'arithmetic'", function(){
		expect(arithGeo(arrayData)).toEqual("arithmetic");
	});

	var arrayData = [2, 4, 6, 8, 10, 12];
	it ("should return 'arithmetic'", function(){
		expect(arithGeo(arrayData)).toEqual("arithmetic");
	});

	var arrayData = [1, 3, 5, 7, 9, 11, 13, 15];
	it ("should return 'arithmetic'", function(){
		expect(arithGeo(arrayData)).toEqual("arithmetic");
	});

	
});

describe("Progression Checker", function(){
	var arrayData = [2, 4, 8, 16, 32, 64];
	it ("should return 'geometric'", function(){
		expect(arithGeo(arrayData)).toEqual("geometric");
	});

	var arrayData = [1, 3, 9];
	it ("should return 'geometric'", function(){
		expect(arithGeo(arrayData)).toEqual("geometric");
	});

	it ("should return -1", function(){
		expect(arithGeo([2, 5, 3, 7, 9])).toEqual(-1);
	})
})
