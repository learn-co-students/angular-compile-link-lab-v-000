function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function (tElem, tAttrs) {
			return {
					pre: function (scope, iElem, iAttrs) {
						iElem[0].innerText = "This is some new text."
					},
					post: function (scope, iElem, iAttrs) {
						iElem[0].addEventListener("click", function () {
							iElem[0].innerText = "This is some newer text."
						})
					}
			}

		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
