import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @ViewChild('target') myDiv: ElementRef;
  constructor(private _elementRef : ElementRef) { }

  ngOnInit() {}
  scrollToElement($element): void {
    console.log($element);
    console.log(this._elementRef.nativeElement.querySelector(`#target`));
    console.log(this.myDiv.nativeElement)
    this.myDiv.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
