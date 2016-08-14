function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (elem, attrs){
			return{
				pre: function (scope, elem, attrs) {
					debugger
					elem[0].innerText = "Changed text";
				},
				post: function (scope, elem, attrs) {
					elem[0].addEventListener('click', function(){
						alert('You clicked me!');
					});
				}
			}
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);