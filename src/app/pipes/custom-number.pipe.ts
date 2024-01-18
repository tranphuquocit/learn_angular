import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customNumber'
})

export class CustomNumberPipe implements PipeTransform{
  transform(value: any, decimal: any) {
    const newValue = value.split('.');
    // console.log(value.split('.'))
    const charsInteger = newValue[0];
    const charsDecimal = newValue[1];
    // console.log(charsInteger);
    // console.log(charsDecimal);

    //xu ly integer
    let resultInteger = '';
    const reverseChars = charsInteger.split('').reverse();
    for(let idx in reverseChars) {
      if(((+idx + 1) % 3) == 0 && ((+idx + 1) < reverseChars.length)) {
        reverseChars[idx] = ',' + reverseChars[idx];
      }
    }
    resultInteger = reverseChars.reverse().join('');

    //xu ly decimal
    let resultDecimal = '';
    let rawDecimal = charsDecimal.slice(0, decimal);
    // console.log(rawDecimal)
    let arrayDecimal = rawDecimal.split('');
    // console.log(arrayDecimal)

    if((Number(arrayDecimal[decimal - 1])) >= 5) {
      arrayDecimal[decimal - 1] = '0';
      arrayDecimal[decimal - 2] = (Number(arrayDecimal[decimal - 2]) + 1).toString();
    }
    // console.log(arrayDecimal)

    resultDecimal = arrayDecimal.join('');
    // console.log(resultDecimal);
    const result = resultInteger + '.' + resultDecimal;
    return result;
  }
}
