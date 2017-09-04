import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis'
})

export class EllipsisPipe implements PipeTransform {
    transform(value: string, length: number = 140): string {

        if (value.length > length)
            return value.substring(0, length) + '...';

        return value;
    }
}