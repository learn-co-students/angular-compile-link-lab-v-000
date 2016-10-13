function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			
		},
		compile: function ($element, $attrs) {
			return {
				pre: function() {
					$element[0].textContent = "Some other text!";
				},
				post: function() {
					$element[0].addEventListener("click", function() {
						console.log("Clicked!");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);