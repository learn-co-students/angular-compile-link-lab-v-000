function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].innerText = 'this is new text';
				},
				post: function(scope, element, attrs) {
					element[0].on('click', function() {
						alert('Clicked');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
