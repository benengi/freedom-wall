import { Directive, HostListener, ElementRef } from '@angular/core';
import { WallService } from 'src/app/services/wall/wall.service';

@Directive({
  selector: '[appBoardCreate]'
})
export class BoardCreateDirective {

  constructor(private wall: WallService, private elr: ElementRef) { }

  @HostListener('click')
  async onclick() {
    this.elr.nativeElement.disabled = true;
    await this.wall.createBoard();
    this.elr.nativeElement.disabled = false;
  }

}
