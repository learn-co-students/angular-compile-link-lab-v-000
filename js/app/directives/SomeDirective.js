function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		}
		compile: function (elem, attrs) {
			return {
				pre: function (scope, elem, attrs) {
					elem[0].textContent = "content";
				}
				post: function (scope, elem, attrs) {
					elem[0].addEventListener('click', function(){
						alert("More content");
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
