function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (element) {
			return {
				pre: function(scope, element, attrs) {
					element[0].textContent = "In case you were wondering...";
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('mouseover', function() {
						alert("My name is Christian.");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
