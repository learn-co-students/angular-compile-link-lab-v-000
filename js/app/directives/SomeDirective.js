function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(elem, attrs) {
			
			return {
				pre: function(scope, elem, attrs) {
					elem[0].innerHTML = "<div>I'm new text!</div>"
				},
				post: function(scope, elem, attrs) {
					elem[0].addEventListener('click', function() {
						alert('im attached!');
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);