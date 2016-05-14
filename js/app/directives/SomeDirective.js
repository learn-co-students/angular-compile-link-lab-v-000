function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (scope, elem, attrs) {

			return {
				pre: function (scope, elem, attrs){
					elem[0].textContent = 'Replaced';
				},

				post: function(s, e, a){
					e.on('click', function(){
						alert('yo');
					});
				}
			};

		},
	};

}

angular
	.module('app')
	.directive('someDirective', SomeDirective);