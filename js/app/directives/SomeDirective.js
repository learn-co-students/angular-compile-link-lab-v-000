function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
    compile: function(element) {
      element[0].innerHTML = "Text changed";
      return {
        pre: function (scope, element, attrs) {
          element[0].onclick = function() {
            console.log("Clicked");
          };
        }
      };
    }
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
