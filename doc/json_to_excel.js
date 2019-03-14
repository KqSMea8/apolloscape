var fs = require('fs');
var xlsx = require('node-xlsx');

var config = {
    file: [
    'apollo_data_apply',
    'apollo_data_applying_data',
    'apollo_data_auth_data',
    'apollo_data_documents',
    'apollo_data_download',
    'apollo_data_fixedtool',
    'apollo_data_footer',
    'apollo_data_header',
    'apollo_data_help',
    'apollo_data_home',
    'apollo_data_problem',
    'apollo_data_sd_aside',
    'apollo_data_sim_list',
    'apollo_data_upload',
    'apollo_data_upload_data',
    'apollo_data_uploaded_data',
    ],
    input: __dirname + '/document/',
    output: __dirname + '/excel/'
}

config.file.forEach(function (element, index) {
    //读取文件内容
    fs.readFile(config.input + element + '.json', 'utf-8', function (err, res) {
        var data = [{name: 'sheet1', data: JSON.parse(res)}];
        var buffer = xlsx.build(data);
        fs.writeFile(config.output + element + '.xlsx', buffer, function(err) {  
            if (err) throw err;
            console.log('has finished');
        });
    });
});
