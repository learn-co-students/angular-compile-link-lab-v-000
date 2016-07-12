function SomeDirective() {
	return {

		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),

		compile: function ($elements, $attrs) {
			return {

				pre: function(scope, elements, attrs) {
					elements[0].innerText = "Something else";
				},
				post: function(scope, elements, attrs) {
					elements[0].onclick = function(){
						alert("You clicked me.");
					};
				}

			}
		}
		// End of compile
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);