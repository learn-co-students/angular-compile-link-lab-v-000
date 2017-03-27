function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(element, attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].innerText = "Something Else!"
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener("click", function(e){
						alert("Hello")
					}, false)
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);