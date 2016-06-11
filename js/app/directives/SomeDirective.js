function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
		        
			return {
             pre: function (scope, element, attrs) {

                 element[0].innerText = "new text!";
             },
             post: function (scope, element, attrs) {
                 element[0].addEventListener("click", function(){ alert("Hello World!"); })	;
             }
         }
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
