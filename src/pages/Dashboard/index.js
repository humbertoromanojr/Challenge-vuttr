import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Form } from '@rocketseat/unform';

import NotFound from '../../components/NotFound';
import Modal from '../../components/Modal';

import {
  Container,
  ToolsListItem,
  AlignHorizontal,
  Description,
  Tags,
  HeaderForm,
  ButtonAddHome,
  InputSearch,
  CheckBox,
  ContainerButtonTop,
  HeaderFormButtons,
} from './styles';

import {
  getToolsRequest,
  deleteToolRequest,
  createToolRequest,
  updateToolRequest,
} from '../../store/modules/tools/actions';

import DeleteIcon from '../../assets/images/delete2.svg';
import EditIcon from '../../assets/images/share.svg';
import AddIcon from '../../assets/images/plus2.png';

function Dashboard({ match }) {
  const tools = useSelector(state => state.tools.data);

  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
/*  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState(''); */

  const [openModal, setOpenModal] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);

  const [selectedTool, setSelectedTool] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToolsRequest(search));
  }, [dispatch, search]);

  useEffect(() => {
    setOpenModal(false);
    setOpenModalForm(false);
  }, [tools]);

  function handleCloseModal() {
    setOpenModal(false);
    setOpenModalForm(false);
  }

  function handleOpenModal(tool) {
    setSelectedTool(tool);
    setOpenModal(true);
  }

  function handleSubmit() {
    const { id } = selectedTool;
    dispatch(deleteToolRequest(id));
  }

  function handleOpenModalForm() {
    setOpenModalForm(true);
  }

  function handleCreate(data, { resetForm }) {
    dispatch(createToolRequest(data));
    resetForm();
  }

  function handleUpdate(data) {
    const { id } = match.params;

    dispatch(updateToolRequest(id, data));
  }


  return (
    <Container>
      <header>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
      </header>
      <HeaderForm>
        <InputSearch>
          <input type="text" size="10" name="search" placeholder="search" onChange={e => setSearch(e.target.value)} />
        </InputSearch>
        <CheckBox>
          <input type="checkbox" value="tags" name="tags" onChange={e => setSearch(e.target.value)} /> <small>search in tags only</small>
        </CheckBox>
        <ButtonAddHome>
          <input type="button" value="Add" onClick={() => handleOpenModalForm()} />
        </ButtonAddHome>
      </HeaderForm>
      {
        tools.length === 0 ? (
          <NotFound />
            ) : (
          tools.map(tool => (
            <div>
              <ToolsListItem key={tool.id}>
                <AlignHorizontal>
                  <span>{tool.title}</span>
                  <ContainerButtonTop>
                    <div>
                      <img src={EditIcon} width="10" height="10" alt="Icon edit" />
                      <Link to={`/dashboard/${tool.id}/edit`}>editar</Link>
                    </div>
                    <div>
                      <img src={DeleteIcon} alt="Icon delete" />
                      <input type="button" value="Remove" onClick={() => handleOpenModal(tool)} />
                    </div>
                  </ContainerButtonTop>
                </AlignHorizontal>
                <Description>{tool.description}</Description>
                <span>{tool.link}</span>
                <Tags>#{tool.tags}</Tags>
              </ToolsListItem>
            </div>
          ))
      )}
      {openModal && (
        <Modal>
          <HeaderFormButtons>
            <img src={DeleteIcon} alt="Icon delete" />
            <p>Remove tool</p>
          </HeaderFormButtons>
          <p>
            Deseja deletar esta Ferramenta: <strong>{selectedTool.title}</strong>
          </p>
          <div>
            <button type="button" onClick={handleSubmit}>
              Confirmar
            </button>
            <button type="button" onClick={handleCloseModal}>
              Cancelar
            </button>
          </div>
        </Modal>
      )}

      {openModalForm && (
        <Modal>
          <HeaderFormButtons>
            <img src={AddIcon} alt="Icone de inserção" />
            <p>Add new tool</p>
          </HeaderFormButtons>
          <Form onSubmit={match.params.id ? handleUpdate : handleCreate}>
            <label>Tool Name</label>
            <Input
              type="text"
              placeholder="Add Title"
              name="title"
              required
              selected={title}
              onChange={date => setTitle(title)}
            />

            <label>Tool Link</label>
            <Input
              type="text"
              placeholder="Add link"
              name="link"
              required
            />

            <label>Tool description</label>
            <Input
              multiline
              name="description"
              placeholder="Add message"
            />
            <label>Tags</label>
            <Input
              type="text"
              placeholder="Add Tags"
              name="tags"
              required
            />

          <div>
            <button type="submit">
              Confirmar
            </button>
            <button type="button" onClick={handleCloseModal}>
              Cancelar
            </button>
          </div>
          </Form>

        </Modal>
      )}
    </Container>
  );

}

export default Dashboard;

Dashboard.propTypes = {
  tools: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.string,
      }),
    ),
  }).isRequired,
};
