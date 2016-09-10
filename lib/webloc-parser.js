'use strict';

const fs = require('fs');
const bplistParser = require('bplist-parser');
const xmldoc = require('xmldoc');

function getUrl(data) {
    return createPromise(data);
}

function getUrlFromFile(fileName) {
    let data = fs.readFileSync(fileName);

    return createPromise(data);
}

function createPromise(data) {
     let myPromise = new Promise(
        function(resolve, reject) {
            try {
                let xmlDocument = new xmldoc.XmlDocument(data);
                let url = xmlDocument.valueWithPath('dict.string');

                if (url) {
                    resolve(url);
                } else {
                    reject('Could not parse XML schema.');
                }
            } catch (e) {
                // If we couldn't parse the XML file, assume it's a binary plist
                bplistParser.parseFile(data, function(err, object) {
                    if (err) {
                        reject(err);     
                    } else {
                        resolve(object[0].URL);
                    }
                });
            }
        }
    );
    
    return myPromise;
}

module.exports = Object.freeze({
    getUrl: getUrl,
    getUrlFromFile: getUrlFromFile
});