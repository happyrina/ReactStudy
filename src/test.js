let arr = [2, 3, 5, 7]

arr.map(function (element, index, array) {
  {
    element !== 2 ? console.log('pass') : console.log(element)
  }
  //   console.log(index)
  //   console.log(array)
  return element
}, 80)

//map함수
