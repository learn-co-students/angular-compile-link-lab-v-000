var s, e, a;

function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(element, attr){

			return {
				pre: function (scope, elem, attrs) {
					elem[0].innerText = "replaced"
				},
				post: function(scope, elem, attrs){
					elem[0].on("click", function(){
						console.log("clicked!");
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
