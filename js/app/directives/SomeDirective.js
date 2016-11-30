function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(element){
			let div = element[0];
			return {
				pre: function(scope, element, attrs){
					div.innerText = "Text Replaced!";
				},
				post: function(scope, element, attrs){
					div.addEventListener('click', function(){
						alert("Div has been clicked!");
					});
				}
			}
		}

	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
