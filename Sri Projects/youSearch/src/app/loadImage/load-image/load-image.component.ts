import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {
  @Input() videoL: any;
   @Input() z: number;
   @Input() videosL: any;

  constructor() {}

  ngOnInit() {}
}
