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
					element[0].innerText = "New Text";
				}
				post: function (element) {
					element[0].innerText = "Post Text";
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);