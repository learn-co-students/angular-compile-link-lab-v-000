function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function (scope, elem, attrs) {
			return {
				pre: function(scope, elem, attrs) {
					elem[0].innerText = "Changed text using compile!";
				},
				post: function(scope, elem, attrs)  {
					elem[0].addEventListener('mouseOver', function(){
						elem[0].innerText = "Easy with the clicking!";
					})
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
