function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function($elem, $attrs){
			pre: function(scope,element, attrs){
				element.text("Hey")
			},
			post: function(scope, element, attrs){
				element[0].addEventListener("click", function(){
					alert("Click Click Click")
				})
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
