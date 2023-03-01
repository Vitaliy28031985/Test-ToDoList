import { useState } from "react";

function CreateToDoList({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [emptyTitle, setEmptyTitle] = useState(true);
  const [emptyDescription, setEmptyDescription] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setEmptyTitle(false);
      return;
    
    }
    if (description === "") {
      setEmptyDescription(false);
      return
    } 
    onSubmit(title, description);
    setEmptyTitle(true);
    setEmptyDescription(true);
      setTitle("");
      setDescription("");
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
          Title
          <input
            className={emptyTitle ? "input" : "empty-input"}
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
          {!emptyTitle && <p>This field is empty</p>}
        </div>
        <div>
        <label>
          Description
          <input
            className={emptyDescription ? "input" : "empty-input"}
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
          {!emptyDescription && <p>This field is empty</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default CreateToDoList;
