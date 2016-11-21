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
					element[0].innerHTML = "<div>Things & Stuff</div>"
				},
				post: function (scope, element, attrs) {
					element.on('click', function(){
						alert('direc');
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
