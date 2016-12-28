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
					element[0].innerText = "The text has been replaced!";
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function() {
						alert("There's an event listener here now!");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
