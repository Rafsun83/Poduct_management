
export const addData = <T>(storeName: string, data: T, version = 1): Promise<T|string|null> => {
    return new Promise((resolve, reject) => {
     const request = indexedDB.open('myDB', version);
  
      request.onsuccess = () => {
       const  db = request.result;
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        store.add(data);
        resolve(data);
      };
  
      request.onerror = () => {
        const error = request.error?.message
        if (error) {
          resolve(error);
        } else {
          resolve('Unknown error');
        }
      };
    });
  };