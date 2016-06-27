function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($elem, $attrs) {
			return {
        pre: function (scope, element, attrs) {
        	console.log(element)
        	element.text('Replaced!')
        },
        post: function (scope, element, attrs) {
        	console.log(element[0])
        	element[0].addEventListener('click', function(){
        		alert('I just heard a click...')
        	});
        };
      };
		};
	};
};

angular
	.module('app')
	.directive('someDirective', SomeDirective);