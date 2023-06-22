import { Modal } from '../../../components/Modal/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const ModalCreateFolder = ({ open }) => {
  const [folderName, setFolderName] = useState('');

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fez o submit!', folderName);
  };

  return (
    <Modal
      open={open}
      title="Criar pasta"
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: false,
          type: 'submit',
          form: 'form-criar-pasta',
        },
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Matemática"
            value={folderName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Modal>
  );
};
