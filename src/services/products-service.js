import { db } from "../config/firestore.js";
import {
  doc,
  updateDoc,
  getDoc,
  collection,
  getDocs,
  limit,
  query,
  orderBy,
  getCountFromServer,
  startAfter,
  where,
} from "firebase/firestore";

export const getAllProducts = async () => {
  const products = collection(db, "products");
  const snapshot = await getDocs(products);
  const productsList = snapshot.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
  return productsList;
};

export const getProductById = async (docId) => {
  const docRef = doc(db, "products", docId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Could not find product with id " + id);
  }
  return { ...snapshot.data(), docId: snapshot.id };
};

export const updateFavouriteProducts = async (docId, isLiked) => {
  const docRef = doc(db, "products", docId);
  await updateDoc(docRef, { favourite: isLiked });
};

export const getFavouriteProducts = async () => {
  const products = collection(db, "products");
  let favQuery = query(products, where("favourite", "==", true));
  const documentSnapshots = await getDocs(favQuery);
  const productsList = documentSnapshots.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
  console.log(productsList);
  return productsList;
};
export const getCountOfFavouriteProducts = async () => {
  const products = collection(db, "products");
  let favQuery = query(products, where("favourite", "==", true));
  const snapshot = await getCountFromServer(favQuery);
  return snapshot.data().count;
};
export const getFeaturedProducts = async () => {
  const products = collection(db, "products");
  let featuredQuery = query(products, where("featured", "==", true));
  const documentSnapshots = await getDocs(featuredQuery);
  const productsList = documentSnapshots.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
  return productsList;
};

export const getTotalCountOfProducts = async (category) => {
  const coll = collection(db, "products");
  const q = category
    ? query(coll, where("category", "==", category))
    : query(coll);
  const snapshot = await getCountFromServer(q);
  return snapshot.data().count;
};

export const getProductsByPage = async (
  pg = 1,
  numberOfProductsPerPage = 20,
  category = "",
  order = ""
) => {
  const numResults = pg * numberOfProductsPerPage;
  const products = collection(db, "products");
  let myQuery;

  if (category && order) {
    myQuery = query(
      products,
      where("category", "==", category),
      orderBy(order),
      limit(numResults)
    );
  } else if (category) {
    myQuery = query(
      products,
      where("category", "==", category),
      limit(numResults)
    );
  } else if (order) {
    myQuery = query(products, orderBy(order), limit(numResults));
  } else {
    myQuery = query(products, limit(numResults));
  }

  const documentSnapshots = await getDocs(myQuery);
  const productsList = documentSnapshots.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
  return productsList.slice(
    (pg - 1) * numberOfProductsPerPage,
    pg * numberOfProductsPerPage
  );
};

export const getInitialData = async (numberOfProductsPerPage = 20) => {
  const products = await getProductsByPage();
  const featured = await getFeaturedProducts();
  const totalCount = await getTotalCountOfProducts();
  return { products, featured, totalCount };
};

export const getProductsDataByPage = async (
  pg,
  numberOfProductsPerPage,
  sortBy = "",
  category = ""
) => {
  const products = await getProductsByPage(
    pg,
    numberOfProductsPerPage,
    category,
    sortBy
  );
  const totalCount = await getTotalCountOfProducts(category);
  return { products, totalCount };
};
