function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem.append(scope);
		},
		compile: function($element, $attrs) {
			$element.text('New text!');
		},
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);