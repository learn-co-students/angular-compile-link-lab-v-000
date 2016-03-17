function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (element) {
			return {
				pre: function (scope, element, attrs) {
					element[0].innerText = "Click me";
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('click', function() {
						alert("Hey, thanks for clicking!");
					});
				}
			}
		}
		// link: function (scope, elem, attrs) {

		// }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);