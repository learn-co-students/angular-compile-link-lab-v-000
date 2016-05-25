function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function (elem, attrs){
			elem[0].innerText = "Hello hello!";
			return {
				post: function(scope, elem, attrs){
					elem[0].addEventListener('click', function(){
						console.log("Just clicked");
						elem[0].innerText = "Good bye!";
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);