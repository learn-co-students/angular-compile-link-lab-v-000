function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (element, attrs) {
			element[0].textContent = "My name is Christian.";
			return {
				post: function (scope, element, attrs) {

				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
