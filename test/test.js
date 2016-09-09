var weblocParser = require('..');
var assert = require('assert');

describe('Smoke test', function() {
    const urls = {
        xml: './test/data/xml.webLoc',
        bplist: './test/data/bplist.webLoc',
        invalid: './test/data/xml-broken.webLoc'
    };

    describe('Can read files', function(done) {
        it('Can read XML file', function(done) {
            weblocParser.getUrlFromFile(urls.xml).then(url => {
                console.log('URL: ' + url);
                done();
            }, function(err) {
                done(err);
            });
        });

        it('Can read binary plist file', function(done) {
            weblocParser.getUrlFromFile(urls.bplist).then(url => {
                console.log('URL: ' + url);
                done();
            }, function(err) {
                done(err);
            });
        });

        it('Fails if the given file can\'t be parsed', function(done) {
            weblocParser.getUrlFromFile(urls.invalid).then(url => {
                console.log('URL: ' + url);
                done('Thinks it resolved a URL when it shouldn\'t have!');
            }, function(err) {
                done();
            });
        });
    });
});