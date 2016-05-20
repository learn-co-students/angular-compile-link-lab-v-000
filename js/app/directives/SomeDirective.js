function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function ($elem, $attrs) {
                  return {
                    pre: function($scope, $elem, $attrs){
                      $elem[0]innerText("seek and destroy, by Steve and Seagulls");
                    },
                    post: function($scope, $elem, $attrs){
                      $elem[0].addEventListener('click', function(){
                        console.log("such a good listener");
                      });
                    }
                  };
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
