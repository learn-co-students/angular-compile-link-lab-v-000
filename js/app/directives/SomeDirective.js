function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			$element.text('This is new text.');
			return {
				post: function ($scope, $element, $attrs) {
					$element.on("click", function() {
						alert("Hola!");
					})
				}
			}
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);