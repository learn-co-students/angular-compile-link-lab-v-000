function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		controller: function () {

      this.sendAlert = function () {
        alert('Alert!');
      };

    },
		link: function (scope, elem, attrs) {

		},
		compile: function ($element, $attrs) {
				console.log('compile');
				angular.element('div').value().replaceWith('New Text')
				return {

						post: function (scope, element, attrs) {
								angular.element('div').append('<button class="btn btn-info" ng-click="sendAlert()">Alert</button>';)
						}
				}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
