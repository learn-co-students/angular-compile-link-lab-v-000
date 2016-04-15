function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (element) {
			return {
				pre: function(scope,element,attrs){
					element[0].innerText = ("Hello thar");
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('click',function(){
						alert("Test");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);