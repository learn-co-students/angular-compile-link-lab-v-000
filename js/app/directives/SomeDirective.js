function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($scope, $elem) {
			return {
				pre: function (scope, element, attrs) {
					(element.text("New Text"));
				},
				post: function (scope, element, attrs) {
					element.on('click', function () {
						console.log('Look at me--I was clicked!');
					})
				},
			};
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
