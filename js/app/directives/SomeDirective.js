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
					element[0].innerText = "Something New!";
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function() {
						alert("It works!");
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);