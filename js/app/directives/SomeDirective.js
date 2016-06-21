function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),

	compile: function (elem, attrs) {
		debugger;
				return {
					pre: function (scope, elem, attrs) {
						elem[0].textContent = "replaced the text!";
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
