function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (scope, elem, attrs) {
      return post: function (scope, elem, attrs) {
        elemnt[0].addEventListener('click', function () {
          element[0].innerText = 'Changed Text!';
        })
      }
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
