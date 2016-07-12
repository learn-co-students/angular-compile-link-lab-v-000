function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs) {
			$element.text("this");
			return {
				post: function (scope, element, attrs) {
					element[0].addEventListener('click', function () {
						alert("hello world");
					});
				}
			}
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
