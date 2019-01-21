import DeviceStorage from './DeviceStorage';

var needIndex;
var saved;

const removeFromLocal = (isbn) => {
  DeviceStorage.get('books')
    .then(res => {
      if(res) {
        res.forEach((elem,index) => {
          if(elem.isbn === isbn) {
            needIndex = index;
          }
        })
        saved = res;
      }
    })
    .then(() => {
      saved.splice(needIndex, 1);
      DeviceStorage.save('books', saved)
    })

  
}

export default removeFromLocal;