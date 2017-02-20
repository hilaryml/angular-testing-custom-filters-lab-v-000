describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should return the people with that favorite food', function () {
		var array = [{name: 'Adam', favoriteFood: 'chips'}, {name: 'Lisa', favoriteFood: 'pizza'}];
		expect($filter('favoriteFood')(array, 'chips')).toEqual([{name: 'Adam', favoriteFood: 'chips'}]);
	});

});
