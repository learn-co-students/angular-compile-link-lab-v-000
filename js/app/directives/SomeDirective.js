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
$element.text('nope');
 
return {
post: function (scope, element, attrs) {
element.on('click', function (event){
	alert('hello!');
})
}
}
}

	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);