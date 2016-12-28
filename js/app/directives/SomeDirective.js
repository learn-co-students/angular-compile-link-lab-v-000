function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs) {
			$element.text('jason is awesome');
			return {
				post: function($scope,$element, $attrs) {
					$element.on('click', function() {
						alert('Hi there!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
