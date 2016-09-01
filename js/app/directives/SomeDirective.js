function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return {
				pre: function(scope, element, attrs) {
					element.text('Replaced!!')
				},
				post: function(scope, element, attrs) {
					element.on('click', function(e) {
						alert('Hi there :)');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
