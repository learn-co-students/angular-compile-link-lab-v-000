function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (element) {
			return {
				pre: function (scope, element, attrs) {
					element[0].innerText = "Click to change";
				}
				post: function (element) {
					element[0].addEventListener('click', function() {
						alert('Thanks for clicking!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);