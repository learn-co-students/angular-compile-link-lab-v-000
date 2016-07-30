function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attrs){
			return {
				pre: function(scope, element, attrs) {
					element.text("Something else.");
				},
				post: function(scope, element, attrs) {
					element.on('click', function(e) {
						console.log(e);
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
