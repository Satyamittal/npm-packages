/**
 * models are used to update the data in views
 */
export default class ProductModel{

    constructor(_id, _name, _desc, _price, _imageUrl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl
    }
    // static methods can directly be accessed from class itself , 
    // we don't have to create instance for these
    static get(){
        return products;
    }
    static add(newProduct)
    {
      newProduct.id = products.length + 1 ;
      products.push(newProduct) ;
    }
    static getById(id){
      return products.find(p=> p.id == id) ;
    }
    static update(productObj)
    {
      const index = products.findIndex(p => p.id == productObj.id) ;
      products[index] = productObj ;
    }
    static delete(id)
    {
      const index = products.findIndex( p=> p.id == id) ;
      products.splice(index,1);
    }
}

/** Without using data-base */
var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    )
  ]