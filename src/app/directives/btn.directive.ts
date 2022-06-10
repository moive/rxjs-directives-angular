import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[btn]',
})
export class BtnDirective implements OnInit {
  @Input() bgColor = 'blue';

  @Input() textColor = 'white';

  @Input() width = '100%';

  constructor(private el: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.setColor();
    this.setWidth();
  }

  setColor() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.textColor;
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  setWidth() {
    this.el.nativeElement.style.width = this.width;
    this.el.nativeElement.style.padding = '1rem';
  }
}
