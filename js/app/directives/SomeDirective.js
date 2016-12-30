function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(element) {
			return {
				pre: function(scope, element, attrs) {
					element.text("Something else!");
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function(event) {
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
