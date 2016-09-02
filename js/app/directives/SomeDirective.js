function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(elem, attrs) {
			//update directive DOM element text before it is loaded into DOM
			elem.html("This is new text!");
			return {
				//add event listener to DOM element after loaded into DOM
				post: function(scope, elem, attrs) {
					elem.on('click', function() {
						alert("You clicked me!");
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);