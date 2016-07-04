function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		}, 
		compile: function($element, $attrs){
			return {
            pre: function (scope, element, attrs) {
                element.html("New text");
            },
            post: function (scope, element, attrs) {
                element.addEventListener("click", function(){ alert("Add event listener"); });
            }
        }
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);