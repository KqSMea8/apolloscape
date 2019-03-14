var fs = require('fs');
var xlsx = require('node-xlsx');
var config = require('./config');

//读取文件内容
var output = config.output;
var file = config.file;

for (var i = 0, len = file.length; i < len; i++) {
    var res = read(file[i]);
    write(file[i], res);
}

function read(fileName) {

    var input = config.input;
    var obj = xlsx.parse(input + fileName + '.xlsx');
    var excelObj = obj[0].data;

    var messages = {
        en: {},
        zh: {}
    };

    for (var i in excelObj) {
        var temp= {};

        var row = excelObj[i];
        var id = row[0];

        if (messages['zh'][id]) {
            console.log("------------------------重复的Id： " + id + "-----------------------");
        }

        if (!!id) {
            messages['zh'][id] = row[1] || '';
            messages['en'][id] = row[2] || '';
        }

    }

    return messages;
}

function write(fileName, data) {
    console.log(data);
    var data = JSON.stringify(data);

    fs.writeFile(output + fileName + '.json', data, function(err){
        if(!err) {
            console.log("写入成功！")
        }
        else {
            console.log(err);
        }
    });
}