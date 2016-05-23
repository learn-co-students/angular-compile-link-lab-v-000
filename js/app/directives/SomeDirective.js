function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		// link: function (scope, elem, attrs) {

		// },
		compile: function (elem, attrs) {
			return {
				pre: function (scope, elem, attrs) {
					elem[0].textContent = "new stuff";
				},
				post: function (scope, elem, attrs) {
					elem[0].addEventListener("click", function() {
						alert("I was clicked!");
					});
				}
			}
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);