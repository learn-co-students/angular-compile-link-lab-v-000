function SomeDirective() {
	return {
		template: `
			<div>
				Replace this text!
			</div>
		`,
		// link: function (scope, elem, attrs) {
		//
		// }
		compile: function ($element, $attrs) {
			$element.text("Changed!!!");
			return {
				post: function (scope, element, attrs) {
					console.log(scope);
					console.log(element[0]);
					console.log(attrs);
					element[0].addEventListener("click", function(){element.text("Changed again!")});
					}

				}
			}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
