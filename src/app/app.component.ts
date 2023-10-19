import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public name!: string;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Angular';
  }
  /*
    On Change The Project Name FRom Child
  */
  public onChangeProject(data: string): void {
    this.name = data;
  }
}
