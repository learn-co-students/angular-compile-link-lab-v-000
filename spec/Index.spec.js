var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');
	var content = element(by.css('some-directive'));

	it('should change the text', function() {
		expect(content.getText()).not.toEqual('Replace this text!');
	});

	it('should trigger a click event', function() {
		content.click();
 		var alertDialog = browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
	});

});