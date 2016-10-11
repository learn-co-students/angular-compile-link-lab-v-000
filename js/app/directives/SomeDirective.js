function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
    compile: function(a, b) {
      console.log('compile');

      return {
        pre: function(scope, element, atts){
          console.log('pre-link');
          console.log(scope);
          console.log(element);
          console.log(atts);

          element[0].innerText = "This says something else!";
        },

        post: function(scope, element, atts) {
          console.log('post-link');
          console.log(scope);
          console.log(element);
          console.log(atts);
        }
      }
    },
		link: function (scope, elem, attrs) {
      // debugger;
      console.log('link');
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
