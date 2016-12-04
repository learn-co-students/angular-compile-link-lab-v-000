function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function ($element, $attrs) {
        return {
            pre: function (scope, element, attrs) {
                element[0].innerText = 'Some other text!'
            },
            post: function (scope, element, attrs) {
							element[0].addEventListener('click', function () {
								alert('Hello!');
							});
            }
        }
    }
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
