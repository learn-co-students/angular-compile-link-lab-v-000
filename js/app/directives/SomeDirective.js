function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			$element.text('But I really dont want too, it looks so nice!');

			return {
				post: function (scope, element, attrs) {
					element.on('click', function (event) {
						alert("Hey, you clicked me!");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
