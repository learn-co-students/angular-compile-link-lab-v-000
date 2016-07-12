function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function () {
			return {
				pre: function(scope, element , attrs) {
					element[0].innerText= "New value!";
				},
				post: function (scope, element, attrs) {
					element[0].addEventListener('click', function () {
						alert('Hey!');
					});
			}
		}
	},
		link: function (scope, elem, attrs) {
       elem[0].addEventListener('click', function() {
				 alert("I am clicked!");
			 });
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
