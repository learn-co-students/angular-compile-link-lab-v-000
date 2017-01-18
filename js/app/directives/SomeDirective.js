function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		// link: function (scope, elem, attrs) {

		// }
		compile: function ($element, $attrs) {

			return {
				pre: function (scope, element, attrs) {
					element[0].innerText = "Original text, no more!"
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('click', function () {
						element[0].innerText = "Event listener changed this text!"
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);