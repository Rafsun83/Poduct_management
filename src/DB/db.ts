let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
}

export enum Stores {
  Products = 'products',
}

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open('myDB');

    request.onupgradeneeded = () => {
      db = request.result;
      if (!db.objectStoreNames.contains(Stores.Products)) {
        console.log('Creating users store');
        db.createObjectStore(Stores.Products, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log('request.onsuccess - initDB', version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};