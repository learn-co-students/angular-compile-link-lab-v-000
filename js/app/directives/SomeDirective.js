function SomeDirective() {
	return {
		template: [
			'<div>',
			'Replace this text!',
			'</div>'
		].join(''),
		compile: function (tElement, tAttrs) {
			console.log(tElement)
			return {
				pre: function (scope, iElement, iAttrs) {
					console.log('pre');
					console.log(iElement);
					iElement[0].textContent = 'Something else';
				},
				post: function (scope, iElement, iAttrs) {
					console.log('post');
					console.log(iElement);
					console.log(iAttrs);
					iElement[0].onclick = function () {
						alert('Event listener is working.');
					};
				}
			}
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);