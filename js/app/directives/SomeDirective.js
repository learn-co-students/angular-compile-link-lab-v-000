function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function {
			return {
				pre: function(scope, element , attrs) {
					element.value= "New value!";
				}
			}
		}
		link: function (scope, elem, attrs) {
       elem.addEventListener('click', function() {
				 console.log("I am clicked!");
			 });
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
