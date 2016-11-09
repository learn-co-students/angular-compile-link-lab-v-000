function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(elem){
			return {
				pre: function(scope, elem, attrs){
					elem[0].innerText = 'Changed!'
				},
				post: function(scope, elem, attrs){
					elem[0].addEventListener('click', function(){
						alert("changed again!");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
