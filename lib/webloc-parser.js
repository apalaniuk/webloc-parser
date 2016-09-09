const bplist = require('bplist');
const xml2js = require('xml2js');
const fs = require('fs');
const pify = require('pify');

function getUrlFromFile(fileName) {
    var data = fs.readFileSync(fileName);

    var myPromise = new Promise(
        function(resolve, reject) {
            pify(xml2js).parseString(data).then(result => {
                resolve(result.plist.dict[0].string[0]);
            }, function(err) {
                bplist.parseFile(fileName, function(err, object) {
                    if (err) {
                        reject('Couldn\'t parse ' + fileName + '...');     
                    } else {
                        resolve(object[0].URL);
                    }
                });
            })
        }
    );
    
    return myPromise;
}

module.exports = {
    getUrlFromFile: getUrlFromFile
};