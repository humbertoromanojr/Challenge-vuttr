import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Form } from '@rocketseat/unform';

import NotFound from '../../components/NotFound';
import Modal from '../../components/Modal';
import Loading from '../../components/Loading';

import api from '../../services/api';

import { Container, ToolsListItem, AlignHorizontal, HeaderFormButtons,
  HeaderForm, ButtonAddHome, InputSearch, CheckBox,
} from './styles';

import { getToolsRequest, deleteToolRequest, createToolRequest,
  updateToolRequest,
} from '../../store/modules/tools/actions';

import DeleteIcon from '../../assets/images/delete2.svg';
import EditIcon from '../../assets/images/share.svg';
import AddIcon from '../../assets/images/plus2.png';

function Dashboard() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);

  const [selectedTool, setSelectedTool] = useState(null);

  useEffect(() => {
    async function loadTools() {
      setLoading(true);

      const response = await api.get(`tools`);

      const data = response.data.map(tool => ({
        ...tool,
      }));

      setTools(response.data);
      setLoading(false);
    }

    loadTools();
  }, [tools]);

  useEffect(() => {
    dispatch(getToolsRequest(search));
  }, [dispatch, search]);

  useEffect(() => {
    setLoading(false);
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
    setOpenModal(false);
  }

  function handleOpenModalForm() {
    setOpenModalForm(true);
  }

  function handleCreate(data, { resetForm }) {
    dispatch(createToolRequest(data));
    resetForm();
    setOpenModalForm(false);
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
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
      <>
      {tools.length === 0 ? (
          <NotFound />
            ) : (
          tools.map(tool => (
            <div>
              <ToolsListItem key={tool.id}>
                <AlignHorizontal>
                  <span>{tool.title}</span>
                  <HeaderFormButtons>
                    <div>
                      <img src={EditIcon} width="10" height="10" alt="Icon edit" />
                      <Link to={`/dashboard/${tool.id}/edit`}>editar</Link>
                    </div>
                    <div>
                      <img src={DeleteIcon} alt="Icon delete" />
                      <input type="button" value="Remove" onClick={() => handleOpenModal(tool)} />
                    </div>
                  </HeaderFormButtons>
                </AlignHorizontal>
                <p>{tool.description.length < 182
                    ? `${tool.description}`
                    : `${tool.description.substring(0, 180)}...`}
                </p>
                <span>{tool.link}</span>
                <label>#{tool.tags}</label>
              </ToolsListItem>
            </div>
          ))
      )}
      </>
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
          <Form onSubmit={handleCreate}>
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
