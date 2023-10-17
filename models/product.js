const fs = require('fs');
const path = require('path')
const p = path.join(path.dirname(process.mainModule.filename),
 "data", 
"product.json");

const getProductsFromFile = (cb) => {
    fs.readFile(p, (error , data) => {
        if(error) {
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    })
}

module.exports = class Product {
    constructor(t){
        this.title = t
    }


save(){
    getProductsFromFile((products) => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products),(err)=>{
               console.log(err);
        })
    })
}


static fetchAll(cb) {
    getProductsFromFile(cb);
}
}