import React, { useState } from "react";
import {
  ListDropdownSelect,
  ListPanelContainer,
  ListPanelForm,
  ListPanelInput,
  ListPanelTitle,
} from "./ListPanelStyles";

export const ListPanel = ({ onCreateList, userLists, onListChange }) => {
  const [listName, setListName] = useState("");

  // Function to handle list creation
  const onCreateListSubmit = (e) => {
    e.preventDefault();
    if (listName) {
      onCreateList(listName);
      setListName("");
    }
  };

  return (
    <ListPanelContainer>
      <ListPanelTitle>List Panel</ListPanelTitle>

      <ListPanelForm onSubmit={onCreateListSubmit}>
        <ListPanelInput
          type='text'
          placeholder='List name'
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button type='submit'>Create List</button>
      </ListPanelForm>
      <ListPanelTitle>Movies Lists</ListPanelTitle>
      <ListDropdownSelect
        name='user-lists'
        id='user-lists'
        onChange={(e) => onListChange(e.target.value)}
      >
        <option value=''>Select a List</option>
        {userLists &&
          Object.values(userLists).map((list) => (
            <option key={list.id} value={list.id}>
              {list.name}
            </option>
          ))}
      </ListDropdownSelect>
    </ListPanelContainer>
  );
};
