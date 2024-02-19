import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { filter, singleFilter } from './FilterData';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { mensPants } from '../../../../../assets/data/pants/MenPants';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [MatDividerModule, CommonModule, MatCheckboxModule, MatRadioModule, ProductCardComponent]
})
export class ProductsComponent {
  isSortMenuOpen: boolean = false;
  filterData: any;
  singleFilterData: any;
  menPants: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.filterData = filter
    this.singleFilterData = singleFilter;
    this.menPants = mensPants;
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(",") : [];
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1)
    }
    else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(",");
    }
    else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], { queryParams });
  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams });
  }

  toggleSortingMenu(): void {
    this.isSortMenuOpen = !this.isSortMenuOpen;
  }
}
