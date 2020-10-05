import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Services/products.data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  product:Product;
  constructor(private route:ActivatedRoute,private ps:ProductService,private router:Router) { }

  ngOnInit(): void {
    // let productId = +this.route.snapshot.params["id"];
    this.route.params.subscribe((parms)=>{
      let productId = +parms["id"];
      this.product =  this.ps.GetProductsDetails(productId);
    });    
  }

  LoadFive(){
    this.router.navigate(["productDetails","5"]);

  }

  Back(){
    this.router.navigate(["products"]);
  }

}
