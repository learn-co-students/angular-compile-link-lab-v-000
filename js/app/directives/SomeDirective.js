function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
	

		compile: function($elem, $attrs) {
		
			return {

				pre: function(scope,elem,attrs) {
				debugger
				},

				post: function(scope, elem, attrs) {
					elem.replaceWith('<some-directive>Hudson</>')
				
				
				}
			}

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);