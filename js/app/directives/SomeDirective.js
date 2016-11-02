function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		// link: function ($scope, $elem, $attrs) {   //not required - equivalent to post-link
		// },
		compile: function($element, $attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].textContent = "New text"
				},

				post: function(scope, element, attrs) {
					element.on('click', function() {
						alert('Does this work?');
					});
				}
			}
		}

	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
