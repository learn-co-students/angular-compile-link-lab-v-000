function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (elem) {
			return {
				pre: function (scope,element,attrs) {
					element.text( "Replaced You!");
				},
				post: function (scope,element,attrs) {
					element.on('click', function () {
						alert('Whats up?');
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
