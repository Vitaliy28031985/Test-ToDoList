function ModalToDo({ toggle, showModal, todo }) {
  return (
    <>
      <div className="backdrop">
        <div className="backdrop-modal">
          <div className="modal-container">
            <h2>{todo[0].title}</h2>
            <p>Description:</p>
            <p>{todo[0].description}</p>
                 <input type="checkbox" value={todo[0].status} />  
          </div>
          <button className="button-modal" onClick={() => toggle(showModal)} type="button">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ModalToDo;
