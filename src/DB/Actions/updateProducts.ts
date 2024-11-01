import { Product } from "../db";

export const updateExistingProduct = (
  storeName: string,
  id: string,
  updatedData: Product,
  version = 1
) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("myDB", version); 
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        if (getRequest.result) {
          const dataToUpdate = { ...getRequest.result, ...updatedData }; 
          const updateRequest = store.put(dataToUpdate);

          updateRequest.onsuccess = () => {
            resolve(dataToUpdate); 
          };
        } else {
          reject(`Record with ID ${id} not found.`);
        }
      }
      getRequest.onerror = (error) => {
        reject(`Error retrieving data: ${error}`);
      };
    };

    request.onerror = (error) => {
      reject(`Error opening database: ${error}`);
    };
  });
};
