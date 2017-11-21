function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		controller: function(){},
		compile: function($element, $attrs){
			$element[0].textContent = "hi"
			return {
				post: function(scope, element, attrs){
					element[0].addEventListener('click', function(){
						alert("awesome")
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);