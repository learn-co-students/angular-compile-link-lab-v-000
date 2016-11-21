function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function($element, $attrs) {
		return {
            pre: function (scope, element, attrs) {
							element.find('div').replaceWith('<h1>i am new text.</h1>')
						},
						post: function(scope, element, attrs) {
							element.find('h1').on('click', function() {
								element.find('h1').replaceWith('<h2>surprise!</h2>')
							})

						}
		}
  }
 }
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
