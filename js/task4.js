 // Write code under this line
class StringBuilder {
    constructor(_value) {
          this._value = _value
    }
    get value() {
        return this._value;
    }
    append(str) {
        return  this._value += str;
    }
    prepend(str) {
        this._value = str + this._value;
        return this._value;
    }
    pad(str) {
    this.append(str);
    this.prepend(str);
    return this._value;

    }
  }

 console.log(typeof StringBuilder);
// 'function'


 const builder = new StringBuilder('.');

 builder.append('^');
 console.log(builder.value); // '.^'

 builder.prepend('^');
 console.log(builder.value); // '^.^'

 builder.pad('=');
console.log(builder.value); // '=^.^='
