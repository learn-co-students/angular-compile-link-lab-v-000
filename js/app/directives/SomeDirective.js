function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs) {
			return {
				pre: function(scope, element, attrs) {
					element.html("whatup");	
				},
				post: function(scope, element, attrs) {
					element.on('click', function() {
						alert("Hey!");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);