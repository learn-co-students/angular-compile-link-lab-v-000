function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {
			return{
				pre: function(scope, element, attrs){element[0].innerText = 'Tadaaaa';}
			},
			post:function(scope, element, attrs){
				element[0].adEventListener('click', function(){
					alert('ALERT');
				});
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
