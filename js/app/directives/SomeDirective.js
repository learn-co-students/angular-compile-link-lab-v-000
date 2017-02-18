function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		controller: function(){
			console.log("in the controller");
		},
		compile: function(element, attrs){
			console.log(element.html());
			element.text("changed");
			return{
				post: function (scope, element, attrs){
					console.log(element.text());
					element[0].addEventListener('click', function(e){
						alert("you just clicked this");
					});
				}
			};
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
