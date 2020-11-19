import { LoggerService, ProductService } from "../service.index";
import { Product } from './products.data';

describe("Product Service",()=>{
    let ps:ProductService = new ProductService(new LoggerService());

    it("GetProductsList should return value",()=>{
        expect(ps.GetProductsList()).toBeInstanceOf(Object);
    });

    it("GetProductsList should be truthy",()=>{
        expect(ps.GetProductsList()).toBeTruthy();        
    });
    it("GetProductsList should be of length 5",()=>{
        expect(ps.GetProductsList().length).toEqual(5);
    });
    
});