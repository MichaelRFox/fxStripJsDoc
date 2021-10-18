var fs = require('fs');

module.exports = function () {

    var regex = /(\/\*\*[\s\S]*?\*\/)/mg;
    var data;
    var file;
    var strippedData;
    var fileSpec;

    if (process.argv.length < 3) {
      console.log ('No file spec provided');
    } else {
      fileSpec = process.argv[2];  
    };

    try {

    fs.accessSync(fileSpec, fs.constants.F_OK);

    file = fs.openSync(fileSpec,'r+', fs.constants.O_RDWR);
    data = fs.readFileSync(file, 'utf8');
    strippedData = data.replace(regex, '');

    fs.writeFileSync(fileSpec, strippedData);

    console.log (`jsDoc comments removed from ${fileSpec}`);
    return 'succes';
    } catch (error) {
      console.log (`Error removing jsDoc comments removed from ${fileSpec}`);
      return error;
    };
}
