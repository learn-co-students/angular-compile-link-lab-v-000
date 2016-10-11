function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs){
 					// console.log('$element:');
 					// console.log($element);
 					// console.log('$attrs:');
 					// console.log($attrs);
 			return {
 				pre: function(scope, element, attrs) {
 					element[0].innerText = 'Replacement text.';
 					// console.log('Scope:');
 					// console.log(scope);
 					// console.log('Element:');
 					// console.log(element);
 					// console.log('Attrs:');
 					// console.log(attrs);
 				},
 				post: function(scope, element, attrs) {
 					element[0].addEventListener('click', function() {
 						console.log("There isn't even any test for this event listener.");
 					});
				//  console.log('Scope:');
 				// 	console.log(scope);
 				// 	console.log('Element:');
 				// 	console.log(element);
 				// 	console.log('Attrs:');
 				// 	console.log(attrs);
 				}
 			}
  	}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);