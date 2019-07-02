import React from 'react';

import { Container, HeaderModal, FormModal } from './styles';

const HeaderModalAdd = () => (
  <Container>
    <HeaderModal>Add new tool</HeaderModal>
    <FormModal>
      <form>
        <input type="text" name="title" />

        <label>Tool Link</label>
        <input type="text" name="link" />

        <label>Tool description</label>
        <textarea cols={20} rows={5} name="description" />

        <label>Tags</label>
        <input type="text" name="tags" />

        <button>Add tool</button>
      </form>
    </FormModal>
  </Container>
);

export default HeaderModalAdd;
