angular
	.module('app')
	.directive('someDirective', SomeDirective);
	
function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function ($scope, $elem, $attrs) {
		
		}, 
		compile: function($scope, $elem, $attrs) {
			$elem["$$element"][0].textContent = 'Something different!';
			
			return {
				post: function($scope, $elem, $attrs) {
					$elem.on('click', function() {
						$elem.addClass('highlight');
					});
				}
			};
		}
	};
}

