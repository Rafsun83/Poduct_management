export const getDataById = (storeName: string, id: string, version = 1) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("myDB", 1);

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const getRequest = store.get(id);
      getRequest.onsuccess = () => {
        if (getRequest.result) {
          resolve(getRequest.result);
        } else {
          resolve(null);
        }
      };
      getRequest.onerror = (error) => {
        reject(error);
      };
    };

    request.onerror = (error) => {
      reject(error);
    };
  });
};
