import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Category } from '../category';
@Component({
  selector: 'app-expense-insert',
  templateUrl: './expense-insert.component.html',
  styleUrls: ['./expense-insert.component.css']
})
export class ExpenseInsertComponent implements OnInit {
  Categories : Category[];
  constructor(private Service:ServicesService) { }

  ngOnInit() {
    this.Service.findCategory().subscribe(
      (data : Category[]) => { 
        console.log("Categories: " + data.length);
        console.log("Category names: " + data.values);
        this.Categories = data;
      }, error => {
        console.log(error);
      });
  }

}
