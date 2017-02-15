function SomeDirective() {
	return {

		template: [
			'<div ng-controller="counter">',
				'Replace this text!', '{{counter.count}}',
			'</div>'
		].join(''),
		scope: {},
		controller: function() {
			this.count = 0;
			this.addOne = function() {
				this.count += 1
			}
		},
		controllerAs: 'counter',
		//link: function (scope, elem, attrs) {
		//}
		compile: function($element, $attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].innerText += 'changed to counter' //targeted element innerText correctly
					//element.text().replace(element.text(), "this") //didn't target correctly
					//element.replaceWith("changed that shit"); //changed the whole element
				},
				post: function(scope, element, attrs) {
					//element[0].setAttribute("ng-controller", "counter")
					//element[0].setAttribute("ng-click", "counter.addOne()");
					element[0].addEventListener('click', function () {
						alert('Hi!');
					});
				//element[0].addEventListener('ng-click', "counter.addOne()")
					//element[0].innerText += '{{counter.count}}'
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
