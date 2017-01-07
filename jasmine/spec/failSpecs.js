describe ("Max array finder", function(){
	it ("should not return 20 as the highest", function(){
		expect (findMax([21, 20, 23, 45, 2, 8])).not.toEqual(20);
	});
});

describe("Min array finder", function(){
	it ("should not return 5 as the lowest", function(){
		expect(findMin([4, 5, 8, 34, 32, 34, 3, 2])).not.toEqual(5);
	});
});