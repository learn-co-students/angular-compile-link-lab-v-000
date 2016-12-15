function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		    compile: function(element) {
 
        return {
            pre: function (scope, element, attrs) {
                element[0].innerText = "Jackie wrote all over this webpage. Click Me";
            },
            post: function (scope, element, attrs) {
                element[0].addEventListener('click', function() {
                	console.log('F Yeah thats badass')
                });
            }
        }
    }
  };
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);