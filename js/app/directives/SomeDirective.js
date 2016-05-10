function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		// compile: function($element, $attrs) {
		// 	$element.text("this");
		// },
		link: function ($scope, $element, $attrs) {
			debugger;
			$element.on("click", function(){
				alert("hello world");
			});
		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);