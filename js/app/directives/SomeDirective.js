function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return {
				pre: function(scope, element, attrs){

					element[0].textContent = "Kris";
				},
				post: function(scope, element, attrs) {
					element.on('click',function(){
						alert('sweet!');
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
