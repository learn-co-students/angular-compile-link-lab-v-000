function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		controller: function(){
		},
		compile: function ($element, $attrs){
			return{
				pre: function(scope, element, attrs){
					 '<div>I replaced this text!</div>'
				},
				post: function(scope, element, attrs){
					 '<div ng-show="active"></div>'
				};
			};
		};
	};
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);