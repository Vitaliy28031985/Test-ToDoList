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
    setEmptyTitle(true);
    setEmptyDescription(true);
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
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="title">
            Title
            <input
              className={emptyTitle ? "input" : "empty-input"}
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </label>
          {!emptyTitle && <p className="emptyText">This field is empty</p>}
        </div>
        <div>
          <label className="description">
            Description
            <input
              className={emptyDescription ? "input" : "empty-input"}
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </label>
          {!emptyDescription && (
            <p className="emptyText">This field is empty</p>
          )}
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default CreateToDoList;
