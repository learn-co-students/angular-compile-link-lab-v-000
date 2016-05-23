function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs){
			return {
				pre: function(scope, element, attrs){
					// debugger;
					element.text("replaced")
				},

				post: function(scope, element, attrs){
					// debugger;
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