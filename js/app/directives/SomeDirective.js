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
			$element[0].textContent = "New content!";
			return {
				pre: function(scope, element, attrs){
					console.log('pre-link');
				},
				post: function(scope, element, attrs){
					console.log(element);
					element[0].addEventListener('click', function(){
						alert("Hello");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
