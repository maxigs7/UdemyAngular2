import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  static defaultImage: string = 'assets/img/noimage.png';
  constructor(private _domSanitizer: DomSanitizer) {
  }
  transform(value: any[]) {
    let image = NoImagePipe.defaultImage;
    if (!value) {
      return image;
    }

    if (!value.length) {
      return image;
    }

    let imageVal = value[1];
    return imageVal.url;//this._domSanitizer.bypassSecurityTrustUrl(imageVal.src);
  }

}
