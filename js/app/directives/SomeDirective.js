function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(element){
			return {
				pre: function(scope, element, attrs){
					element[0].innerText = 'Something!';
				},
				post: function(scope, element, attrs){
					element[0].addEventListener('click', function(){
						alert('Changed!!');
					});
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
