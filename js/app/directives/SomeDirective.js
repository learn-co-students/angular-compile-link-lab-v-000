function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($elem, $attrs) {
			return {
				pre: function(scope, elem, attrs){
					$('div').text = 'Changed text!';
				},
				post: function(scope, elem, attrs){
					$('div').on('click', function(){
						console.log("Attached listener!");
					});
				}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
