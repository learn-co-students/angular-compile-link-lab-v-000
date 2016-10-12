function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (elem, attrs) {

			return{	
				pre: function(scope,elem,attrs){
					elem[0].innerText = "Changed Text";
				},

				post: function(scope,elemn,attrs){
					elem[0].addEventListener('click', function(){
						this.innerText = "clicked!"
					})
				}
			}


		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);