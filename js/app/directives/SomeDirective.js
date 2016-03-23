function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			$element.text("I did it?!");
			return {
				post: function (scope, element, attrs) {
					element.on('click', function () {
						alert('I did it!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);