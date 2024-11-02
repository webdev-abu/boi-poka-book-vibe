import { toast } from "react-toastify";

const getStoredReadList = () => {
  const readList = localStorage.getItem("readList");
  if (readList) {
    const storedList = JSON.parse(readList);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
    // alert(id, "Already exists in the read list");
    toast("This book is Already exists in the read list");
  } else {
    storedReadList.push(id);
    const storedList = JSON.stringify(storedReadList);
    localStorage.setItem("readList", storedList);
    toast("This book is added to your Read list");
  }
};

const getStoredWishList = () => {
  const wishList = localStorage.getItem("wishList");
  if (wishList) {
    const storedList = JSON.parse(wishList);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    // alert(id, "Already exists in the wish list");
    toast("This book is Already exists in the wish list");
  } else {
    storedWishList.push(id);
    const storedList = JSON.stringify(storedWishList);
    localStorage.setItem("wishList", storedList);
    toast("This book is added to your wish list");
  }
};
export {
  addToStoredReadList,
  addToStoredWishList,
  getStoredReadList,
  getStoredWishList,
};
