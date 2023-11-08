const https = require('https');


const reset = "\x1b[0m";
const blue = "\x1b[34m";

function check_for_single_pkg(pkg_name,callback){
    const url = `https://registry.npmjs.org/${pkg_name}`;

    https.get(url,(res)=>{

        let data = '';
        res.on('data',(chunk)=>{
            data+=chunk;
        })
        res.on('end',()=>{
            const jsonData = JSON.parse(data);

            if (jsonData.error && jsonData.error === 'Not found') {
                callback(null, blue+`'${pkg_name}' is available`+reset);
              } else {
                callback(null, `'${pkg_name}' is already taken`);
              }
        });
    }).on('error', (err) => {
        callback(err.message,null)
      });


}



module.exports=check_for_single_pkg;