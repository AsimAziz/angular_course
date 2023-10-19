import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() public project!: string;
  @Output() public changeProjectName = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  /*
    On Change The Project Name
  */
  public onChangeName(data: string): void {
    this.changeProjectName.emit(data);
  }
}
