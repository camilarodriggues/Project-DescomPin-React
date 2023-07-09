import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { UseAppContext } from '../../store/AppContext';
import { closeModalsAction, fetchFoldersAction } from '../../store/actions';
import { fetchFoldersInitAction } from '../../store/actions';

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = UseAppContext();
  const handleClose = () => {
    console.log('fechando!')
    dispatch(closeModalsAction())

  }

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, [])
    return (
        <Modal
         title="Salvar pin"
         open={open}
         onHide={handleClose}
         controls={[
            {
                label: "Criar pasta",
                variant: 'secondary',
                loading: false,
                loadingLabel: 'Criando',
                onclick: () => {
                    console.log('Clicou em criar pasta')
                }
            }
         ]}>
            <ListGroup variant="flush">
              {state.folders.map((folder, folderIndex) => (
                <ListGroup.Item key={folderIndex}>
                  <Row>
                    <Col xs={8}>{folder.name}</Col>
                    <Col xs={4} className="text-end">
                      <button label="Salvar" loadingLabel="Salvando"/>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}

            </ListGroup>
          </Modal>
    )
      }