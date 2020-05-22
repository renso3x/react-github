import React, { useState, ChangeEvent } from 'react';
import { Row, Col, Input, FormGroup, Button } from 'reactstrap';

export interface SearchInputProps {
  onSearchInput: (q: string) => void;
}

const SearchInput: React.SFC<SearchInputProps> = ({
  onSearchInput
}) => {
  const [search, setSearch] =  useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    onSearchInput(search);
  }
  return (
    <header className="App-header">
      <Row>
        <Col md={9}>
          <FormGroup>
            <Input
              type="text"
              className="form-control"
              placeholder="Find a repository"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <Button
            type="submit"
            color="primary"
            className="btn-block"
            onClick={onSubmit}
          >Search</Button>
        </Col>
      </Row>
    </header>
  );
}

export default SearchInput;