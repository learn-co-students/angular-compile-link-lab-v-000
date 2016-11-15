function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function($element, $attrs) {
			return {
				pre: function(scope, element, attrs){
						element[0].textContent = 'Hey!'
				},
				post: function(scope, element, attrs){
						element[0].addEventListener('click', function(e){
							this.text('Bye!')
						})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
