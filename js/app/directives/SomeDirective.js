function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (element, attrs) {
			element.text('new text');
 			return {
 				post: function (scope, element, attrs) {
					element.on("click", function() {
						alert("Hello!");
					})
 				}
 			}
    }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);