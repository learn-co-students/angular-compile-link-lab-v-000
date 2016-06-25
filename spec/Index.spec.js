var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should change the text', function() {
		var content = element(by.css('some-directive'));

		expect(content.getText()).not.toEqual('Replace this text!');
	});

});