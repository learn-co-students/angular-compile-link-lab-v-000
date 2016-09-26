function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (elem) {
			return {
				// should change the text
				pre: function functionName(scope, elem, attr) {
					elem[0].innerHTML = 'Different Text'
				},
				// should change the text again on click
				post: function functionName(scope, elem, attr) {
					elem[0].addEventListener('click', function () {
						elem[0].innerHTML = 'cRaZy TeXt *&#@ :p'
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
