const https = require('https');

const reset = "\x1b[0m";
const blue = "\x1b[34m";

function check_for_multiple_pkg(packageNames,callback){
    for(let i=0;i<packageNames.length;i++){
    const url = `https://registry.npmjs.org/${packageNames[i]}`;

    https.get(url,(res)=>{

        let data = '';
        res.on('data',(chunk)=>{
            data+=chunk;
        })
        res.on('end',()=>{
            const jsonData = JSON.parse(data);

            if (jsonData.error && jsonData.error === 'Not found') {
                callback(null, blue+`'${packageNames[i]}' is available`+reset);
              } else {
                callback(null, `'${packageNames[i]}' is already taken`);
              }
        });
    }).on('error', (err) => {
        callback(err.message,null)
      });


}
}



module.exports=check_for_multiple_pkg