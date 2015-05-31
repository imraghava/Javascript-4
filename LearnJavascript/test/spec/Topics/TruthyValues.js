'use strict';

describe('Thruthy Values', function () {

  /*Truthy  Values*/
  //In Javascript,any value that is NOT 'false',0,'undefined','NaN',"" or null is considered Truthy
  it('you can evaluate to false any Falsy value', function () {
    var value;
    value = ("String") ? true : false;
    expect(value).toBe(true);
    value = (1) ? true : false;
    expect(value).toEqual(true);
    var definedVar = value ;
    value = (definedVar) ? true : false;
    expect(value).toEqual(true);
    value = (-2) ? true : false;
    expect(value).toEqual(true);
    value = ([]) ? true : false;
    expect(value).toEqual(true);
    value = ({}) ? true : false;
    expect(value).toEqual(true);
    value = (Object.prototype) ? true : false;
    expect(value).toEqual(true);
  });

});
