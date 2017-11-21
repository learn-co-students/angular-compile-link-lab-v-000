function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
    compile: function ($element, $attrs) {
      return {
        pre: function (scope, elem, attrs) { 
          $element[0].innerText = "This has been changed."; 
        }, //pre
        post: function (scope, elem, attrs) { 
          elem[0].addEventListener("click", function() {
            alert('clicked!');});
        } //post
      } //return
    } //compile
	} //return
} //directive

angular
	.module('app')
	.directive('someDirective', SomeDirective);
