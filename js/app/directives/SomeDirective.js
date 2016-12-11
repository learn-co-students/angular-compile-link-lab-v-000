function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(scope, attrs) {
			return {
				pre: function(scope, element, attrs) {
					element["0"].innerText = "Different text";
				},
				post: function(scope, element, attrs) {
					element.on('click', function() {
						alert('you clicked the directve');
					});
				}
			};
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);