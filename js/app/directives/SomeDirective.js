function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs){
			return {
				pre: function(scope, element, attrs){
					console.log(element[0]);
					element[0].innerText = "New text lol";
				},

				post: function(scope, element, attrs){
					element[0].addEventListener("mouseover", function(){
						alert("hey!")
					})
				}
			};
		},
		link: function (scope, elem, attrs) {

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);