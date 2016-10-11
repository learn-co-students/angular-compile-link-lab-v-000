function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function compile(tElement, tAttrs, transclude) {
      return { 
       pre: function preLink(scope, iElement, iAttrs, controller) { 
       	iElement[0].querySelector('div').innerHTML = "Changed the text using compile!!"; 
       },
       post: function postLink(scope, iElement, iAttrs, controller) { 
       	iElement[0].addEventListener('click', function(){
					alert('Clicked!!');
				});
       }
      }
    }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);