function SomeDirective() {
  return {
    template: [
      '<div>',
        'Replace this text!',
      '</div>'
    ].join(''),
    compile: function(scope, elem, attrs){
      return {
        pre: function(scope, element, attrs){
          element.html('Hello, World!');
        },
        post: function(scope, element, attrs){
          element[0].addEventListener('click', function(){
            alert('You clicked me');
          })
        }
      }
    }
  }
}

angular
  .module('app')
  .directive('someDirective', SomeDirective);
