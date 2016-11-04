function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(scope, elem, attrs) {
			return {
				pre: function(scope, elem, attrs){
					elem[0].innerText = 'Changed text';
				},
				post: function(scope, elem, attrs){
					elem[0].on('click', function(){
						console.log("attached listener");
					});
				}
			}
		}
	};
};

angular
	.module('app')
	.directive('someDirective', SomeDirective);