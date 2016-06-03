function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		}
		compile: function ($element, $attrs) {
			$element = '<div>REPLACED</div>';

			return {
				post: function (scope, element, attrs) {
					$('div').click(function() {
						console.log('div clicked');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
