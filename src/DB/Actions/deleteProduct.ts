export const deleteProduct = (
  storeName: string,
  key: string,
  version = 1
): Promise<boolean> => {
  return new Promise((resolve) => {
    const request = indexedDB.open("myDB", version);

    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const res = store.delete(key);

      res.onsuccess = () => {
        resolve(true);
      };
      res.onerror = () => {
        resolve(false);
      };
    };
  });
};
