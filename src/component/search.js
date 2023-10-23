import React from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";

const Search = () => {
  return (
    <InputGroup>
      <Form.Control
        aria-label="default"
        aria-activedescendant="InputGroup-sizing-default"
      />

      <Button variant="outline-secondary">Search</Button>
    </InputGroup>
  );
};

export default Search;
