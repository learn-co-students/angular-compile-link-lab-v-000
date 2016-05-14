function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function ($scope, $element, $attrs) {

		},
		compile: function($element, $attrs){
			return {
				pre: function(scope, element, attrs){
					element[0].innerText = 'Something';
				},
				post: function(scope, element, attrs){
					element[0].addEventListener('click', function(){
						alert('click');
					});
				}
			};
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
