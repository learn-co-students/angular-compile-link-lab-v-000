function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
    compile: (element, attrs) => {
      return {
        pre: (scope, element, attrs) => {
          element.html('new text')
        },
        post: (scope, element, attrs) => {
          element.on('click', (e) => {
            console.log('clicked')
          })
        }
      }
    }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
