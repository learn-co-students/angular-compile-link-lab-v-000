function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(elem, attrs){
			// elem.html('<div>some other text</div>');
			elem[0].innerText = 'some other text';
			return {
				post: function(scope, elem, attrs){
					elem[0].addEventListener('click', function(){
						alert('click!!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);