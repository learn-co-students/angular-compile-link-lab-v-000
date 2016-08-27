function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($elem, $attrs) {
			return {
				pre: function(scope, element, attrs){
					(element.text("Replaced"));
				},
				post: function(scope, element, attrs) {
					element.on('click', function(){
						console.log("Replacement clicked");
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
