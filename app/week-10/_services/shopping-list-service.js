import { getItems, addItem } from "../_utils/firebase";

function displayItems(items) {
}

async function addNewItem(userId, item) {
  const newItemId = await addItem(userId, item);
  const updatedItems = await getItems(userId);
  displayItems(updatedItems);
}

addNewItem(userId, newItem);