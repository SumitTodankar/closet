import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  ngOnInit() {
    this.route.params.subscribe((p: any) => {
      this.apiService.getProductByID(p.id).subscribe((res) => {
        console.log(res);
        this.product = res;
      });
    });
  }
}
