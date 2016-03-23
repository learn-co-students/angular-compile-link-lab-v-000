function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		controller: function() {
			console.log('controller');
		},
		compile: function($element, $attrs) {
			console.log('compile');
			return{
				pre: function(scope, element, attrs) {
					console.log(element[0].innerText = 'this is different');
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function(){alert('did this work?')});
				}
				// console.log($element);
				// console.log($attrs.$$element[0].outerText);
				// $element.outerText = "this is different";
				// console.log($element.outerText)
			}
			// Use the compile function to change the textContent of our directive.
		},
		link: function (scope, elem, attrs) {

			// Then, use the link function to add an event listener to the directive.
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
