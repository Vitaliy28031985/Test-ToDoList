import { useState } from "react";
function ToDoList({ state }) {
  return (
    <div class="table-responsive">
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>DESCRIPTION</td>
            <td>STATUS</td>
          </tr>
          
            {state?.map(({ id, title, description, status }) => (
              <><tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td></td>
              </tr>
              </>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;