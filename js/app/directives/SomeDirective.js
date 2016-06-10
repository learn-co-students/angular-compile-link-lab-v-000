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
							// element[0].html = 'Something else!'
							element[0].innerHTML = 'Something else';
            },
            post: function (scope, element, attrs) {
              element[0].addEventListener("click",function(){
            alert("Changed");
            }
        }
    },
		link: function (scope, elem, attrs) {

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
