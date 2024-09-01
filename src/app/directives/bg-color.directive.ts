import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective implements OnInit {

  constructor(
    private _renderer: Renderer2,
    private _el: ElementRef
  ) { }

  @Input('color') color: string = "";

  ngOnInit(): void {
    this.changeBackgroundColor(this.color);
  }

  changeBackgroundColor(color: string) {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', color);
    this._renderer.setStyle(this._el.nativeElement, 'display', 'block');
    this._renderer.setStyle(this._el.nativeElement, 'color', 'white');
  }

}
