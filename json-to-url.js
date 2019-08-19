#!/sbin/node
if(process.argv.length<3){
    console.log("Usage: \n"+process.argv[1]+" ./test.json\n\
or\n\
yarn convert ./test.json");
    process.exit(1);
}

let input = require(process.argv[2]);

input.map((item, ind)=>{
    if(item.disabled===true)return false;
    let url=new URL('http://example.org');
    url.protocol=item.scheme;
    url.host=item.domain_name;
    url.port=item.port;
    url.pathname=item.path;
    if(item.query!==undefined)for(i in item.query){
	url.searchParams.set(i, item.query[i]);
    }
    if(item.fragment!==undefined)
	url.hash=item.fragment;
    console.log(url.toString());
});