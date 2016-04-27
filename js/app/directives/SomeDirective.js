function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($element, $attrs) {

        return {
            pre: function (scope, element, attrs) {
                element[0].innerText = "This is getting harder";
            },
            post: function (scope, element, attrs) {
                element[0].addEventListener;
            }
        }
    }
  };
}
angular
	.module('app')
	.directive('someDirective', SomeDirective);
