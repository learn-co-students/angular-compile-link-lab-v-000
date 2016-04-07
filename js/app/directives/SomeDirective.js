function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return {
				pre: function ($scope, $element, $attrs){
					$element[0].innerText = 'Other text';
				},
				post: function ($scope, $element, $attrs){
					$element[0].addEventListener('click', function(){
						alert('You called?');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);