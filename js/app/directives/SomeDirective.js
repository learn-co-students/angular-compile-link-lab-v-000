function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (elem, attrs) {
			return {
				pre: function (scope, element, attrs) {
					console.log(element);
					element[0].innerText = "My Text";
				},
				post: function (scope, element, attrs) {
					console.log(element);
					element[0].addEventListener('click', function(){
						alert('Yo');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);