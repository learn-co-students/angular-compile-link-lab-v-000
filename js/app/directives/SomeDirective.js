function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {
			elem.html('THIS TEXT IS REPLACED')
			elem.css('background-color', 'red');
			elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
        elem.css('background-color', 'green');
      });
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);