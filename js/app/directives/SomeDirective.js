function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function ($scope, $element, $attrs) {

		},
		compile: function ($element, $attrs) {
			$('div').text('New Text!');

			post: function (scope, element, attrs) {
				$('div').click(function (event) {
					this.text('Change it again');
				})
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);