"use client"

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    no: "1",
    stories: "As a new user, I want to sign up for an account so that I can save my to-do items and access them from any device."
  },
  {
    key: "2",
    no: "2",
    stories: "As an existing user, I want to log in to my account so that I can access my saved to-do items"
  },
  {
    key: "3",
    no: "3",
    stories: "As a user, I want to log out of my account."
  },
  {
    key: "4",
    no: "4",
    stories: "As a user, I want to create a new to-do item so that I can keep track of my tasks."
  },
  {
    key: "5",
    no: "5",
    stories: "As a user, I want to view a list of all my to-do items so that I can see what tasks I need to complete."
  },
  {
    key: "6",
    no: "6",
    stories: "As a user, I want to mark a to-do item as completed so that I can keep track of what I have accomplished."
  },
  {
    key: "7",
    no: "7",
    stories: "As a user, I want to edit a to-do item so that I can update its details if they change."
  },
  {
    key: "8",
    no: "8",
    stories: "As a user, I want to delete a to-do item so that I can remove tasks I no longer need."
  },
  {
    key: "9",
    no: "9",
    stories: "As a user, I want to sort my to-do items by different criteria (e.g., due date, status, creation date) so that I can manage my tasks more efficiently."
  },
  {
    key: "10",
    no: "10",
    stories: "As a user, I want to unhide/hide certain columns in the to-do list view so that I can focus only on the information that matters to me."
  },
  {
    key: "11",
    no: "1",
    stories: "As a user, I want to search for specific to-do items by keywords so that I can quickly find tasks related to certain topics or criteria."
  },
  {
    key: "12",
    no: "1",
    stories: "As a user, I want to toggle between dark mode and light mode so that I can choose the theme that is easiest on my eyes."
  },



];

const columns = [
  {
    key: "no",
    label: "No.",
  },
  {
    key: "stories",
    label: "User Stories",
  }
];

export default function UserStoriesTable() {
  return (
    <Table  
    isCompact
    aria-label="User stories table"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
