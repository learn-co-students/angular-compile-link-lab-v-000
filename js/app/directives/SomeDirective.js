function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			$element.text('nope');
			return {
				post: function (scope, element, attrs) {
					element.on('click', function (event) {
						alert('howdy');
					})
				}
			}
		}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
