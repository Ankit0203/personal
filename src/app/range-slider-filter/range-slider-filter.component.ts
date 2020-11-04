
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-range-slider-filter',
  templateUrl: './range-slider-filter.component.html',
  styleUrls: ['./range-slider-filter.component.css']
})
export class RangeSliderFilterComponent implements OnInit {


  name = 'Angular';
  myForm: FormGroup;
  filteredProducts = [];
  PriceFilter = [
    {
      "TagId": 20,
      "Type": "Budget",
      "Value": 15,
      "Values": null,
      "DisplayText": "$15",
      "Order": null
    },
    {
      "TagId": 20,
      "Type": "Budget",
      "Value": 25,
      "Values": null,
      "DisplayText": "$25",
      "Order": null
    },
    {
      "TagId": 20,
      "Type": "Budget",
      "Value": 50,
      "Values": null,
      "DisplayText": "$50",
      "Order": null
    }]

  Stores = [
    {
      "Products": [
        {
          "ProductId": 206419,
          "Price": 39.99,
          "PriceLabel": "$39.99",
          "ProductTags": [1, 2]
        },
        {
          "ProductId": 206419,
          "Price": 15.99,
          "PriceLabel": "$15.99",
          "ProductTags": [1, 2]
        },
        {
          "ProductId": 206419,
          "Price": 10.99,
          "PriceLabel": "$10.99",
          "ProductTags": [1, 2]
        },
        {
          "ProductId": 206419,
          "Price": 55.99,
          "PriceLabel": "$55.99",
          "ProductTags": [1, 2]
        },
        {
          "ProductId": 206419,
          "Price": 1.99,
          "PriceLabel": "$1.99",
          "ProductTags": [1, 2]
        },
        {
          "ProductId": 206419,
          "Price": 3.99,
          "PriceLabel": "$9.99",
          "ProductTags": [1, 2]
        }
      ]
    }]

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      filterProduct: ['']
    })
  }

  getValue(index) {
    if(index === 0)
      return { 
        lower: 0, 
        displayText: this.PriceFilter[index].DisplayText, 
        upper: this.PriceFilter[index].Value 
      };
    else {
      return { 
        lower: this.PriceFilter[index - 1].Value, 
        upper: this.PriceFilter[index].Value,
        displayText: `${this.PriceFilter[index - 1].DisplayText} - ${this.PriceFilter[index].DisplayText}`
      };
    }
  }

  ngOnInit() {
    this.filteredProducts = [...this.Stores[0].Products];

    this.myForm.get('filterProduct').valueChanges.subscribe(
      value => {
        console.log(value);
        this.filteredProducts = [...this.Stores[0].Products.filter(product => product.Price >= value.lower && product.Price <= value.upper )]
      }
    )
  }
}

