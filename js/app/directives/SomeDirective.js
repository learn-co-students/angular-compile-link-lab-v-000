function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(element, attrs){
			element[0].innerText = "I changed the text";
		},
		link: function (scope, elem, attrs) {
			elem[0].addEventListener('click', function () {
				alert('I added an event listener!');
			});
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);