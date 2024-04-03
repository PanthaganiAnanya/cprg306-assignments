import { useContext } from "react";
import { UserContext } from "../_context/user-context";
import {
  getItems,
  addItem,
} from "../_services/shopping-list-service";
import { useEffect, useState } from "react";

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const user = useContext(UserContext);

  const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
  };

  useEffect(() => {
    loadItems();
  }, [user.uid]);

  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    setItems((prevItems) => [...prevItems, { id, ...item }]);
  };

  return (
    <>
      <div className=" mx-auto px-4 pt-16 pb-12">
        <h1 className="text-4xl font-heading mb-8">Shopping List</h1>
        <AddItemForm onSubmit={handleAddItem} />
        <ShoppingListItems items={items} />
      </div>
    </>
  );
}