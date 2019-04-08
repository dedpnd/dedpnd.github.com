import { Pipe, PipeTransform } from '@angular/core';
import { Iinfo } from './mock/info';

@Pipe({
  name: 'infoFilter'
})
export class InfoFilterPipe implements PipeTransform {

  transform(value: Iinfo[], search?: string): any {
    if (!search) {
      return value;
    }
    return value.filter((info: Iinfo) => {
      return info.type.toLowerCase().includes(search);
    });
  }

}
