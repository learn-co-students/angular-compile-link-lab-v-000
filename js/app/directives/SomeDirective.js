function SomeDirective() {
	return {
		template: [
			'<div>',
				'{{ message }}',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function (elem, attrs) {
      return {
        pre: function (scope, elem, attrs) {
        	scope.message = 'Replace this text!';
        },
        post: function (scope, elem, attrs) {
          scope.message = 'New text';
        }
      }
    }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);