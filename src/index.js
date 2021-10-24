#!/usr/bin/env node

var fs = require('fs');

var regex0 = /(\/\*\*[\s\S]*?\*\/)/gm; // matches jsDoc comments
var regex1 = /^(?:[\t ]*(?:\r?\n|\r))+/gm; // matches empty lines

if (process.argv.length < 3) {
  console.log ('No file spec provided');
} else {
  var fileSpec = process.argv[2];  
};

try {
    fs.accessSync(fileSpec, fs.constants.F_OK);

    var file = fs.openSync(fileSpec,'r+', fs.constants.O_RDWR);
    var data = fs.readFileSync(file, 'utf8');
    var strippedData = data.replace(regex0, '');
    strippedData = strippedData.replace(regex1, '');

    fs.writeFileSync(fileSpec, strippedData);

    console.log (`jsDoc comments removed from ${fileSpec}`);
    return 'succes';
} catch (error) {
    console.error (`Error removing jsDoc comments from ${fileSpec}. System logged the following error: ${error}`);
};