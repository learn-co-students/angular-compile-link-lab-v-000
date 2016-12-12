function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),

		link: function (scope, elem, attrs) {
		},

		compile: function ($element, $attrs) {
				return {
						pre: function (scope, element, attrs) {
								console.log(element.text("Yo"));
						},
						post: function (scope, element, attrs) {
						}
				}
		 }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
