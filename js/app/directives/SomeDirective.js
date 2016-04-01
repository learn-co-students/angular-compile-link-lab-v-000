function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function (scope, elem, attrs) {
			return {
				pre: function(scope, element, attrs) {
					element[0].innerText = 'New Text';
				},
				post: function(scope, element, attrs) {
					element[0].addEventListener('click', function(event){
						alert('You just clicked the elment!');
					});
				}
			};

		}
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);






	compile: function ($element, $attrs) {
        console.log('compile');
 
        return {
            pre: function (scope, element, attrs) {
                console.log('pre-link');
            },
            post: function (scope, element, attrs) {
                console.log('post-link');