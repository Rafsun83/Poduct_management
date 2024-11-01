import { Stores } from "../db";

export const getStoreData = <T>(storeName: Stores): Promise<T[]> => {
    return new Promise((resolve) => {
     const request = indexedDB.open('myDB');
  
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const res = store.getAll();
        res.onsuccess = () => {
          resolve(res.result);
        };
      };
    });
  };