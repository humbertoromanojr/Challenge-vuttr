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
  HeaderForm, ButtonAddHome, InputSearch, CheckBox, HeaderModal,
} from './styles';

import { getToolsRequest, deleteToolRequest, createToolRequest,
  updateToolRequest,
} from '../../store/modules/tools/actions';

import DeleteIcon from '../../assets/images/delete2.svg';
import EditIcon from '../../assets/images/share.svg';
import AddIcon from '../../assets/images/plus.svg';

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

      const response = await api.get(`tools?q=${search}`);

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
        <div>
          <InputSearch>
            <input type="text" size="20" name="search" placeholder="search" onChange={e => setSearch(e.target.value)} />
          </InputSearch>
          <CheckBox>
            <input type="checkbox" value="tags" name="tags" onChange={e => setSearch(e.target.value)} /> <small>search in tags only</small>
          </CheckBox>
        </div>
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
                    {/* <div>
                      <img src={EditIcon} width="10" height="10" alt="Icon edit" />
                      <Link to={`/dashboard/${tool.id}/edit`}>editar</Link>
                    </div> */}
                    <div>
                      <img src={DeleteIcon} alt="Icon delete" />
                      <input type="button" value="remove" onClick={() => handleOpenModal(tool)} />
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
          <HeaderModal>
            <img src={DeleteIcon} alt="Icon delete" />
            <p>Remove tool</p>
          </HeaderModal>
          <p>
            Deseja deletar esta Ferramenta: <strong>{selectedTool.title}</strong>
          </p>
          <div>
            <button type="button" onClick={handleCloseModal}>
              Cancel
            </button>
            <button type="button" onClick={handleSubmit}>
              Yes, remove
            </button>
          </div>
        </Modal>
      )}

      {openModalForm && (
        <Modal>
          <HeaderModal>
            <img src={AddIcon} alt="Icone de inserção" />
            <p>Add new tool</p>
          </HeaderModal>
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
            <button type="button" onClick={handleCloseModal}>
              Cancelar
            </button>
            <button type="submit">
              Add tool
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
