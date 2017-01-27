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
					element[0].textContent = "Some new text!";
					// element[0].innerText = "Some new text!";
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function() {
						alert("What's up?");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
