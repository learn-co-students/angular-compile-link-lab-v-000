function SomeDirective() {

	return {
		restrict: 'EA',
		link: function (scope, elem, attrs) {
			debugger;
			alert('ran')
		},
		compile: function ($element, $attributes) {
				$element[0].textContent = 'New Text';
		},
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
