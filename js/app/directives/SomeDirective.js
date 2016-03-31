function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (elem, attrs) {
			return{
				pre:function(scope, elem, attrs){
					elem[0].innerText = "New Content";
				},
				post:function(scope, elem, attrs){
					elem[0].addEventListener("click", function(){
						alert("EVENT!!!!1");
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);