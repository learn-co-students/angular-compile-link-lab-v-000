function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(scope, element, attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].innerText = "I used compile to replace this text!";
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function() {
						alert('This is a post compile eventlistenere');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
