function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($element, $attributes){
			$element.text('Text replaced!');

			return {
				post: function($scope, $element, $attributes){
					$element.on('click', function(){
						console.log('event fired!');
					});
				}				
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);