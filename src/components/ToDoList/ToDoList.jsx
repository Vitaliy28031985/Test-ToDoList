function ToDoList({ state, toggle }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>DESCRIPTION</td>
            <td>STATUS</td>
          </tr>

          {state?.map(({ id, title, description, status }) => (
           
              <tr key={id} onClick={() => toggle(id)}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description.split("").slice(0, 15).join("")}</td>
                <td>
                  <input type="checkbox" value={status} />
                </td>
              </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
