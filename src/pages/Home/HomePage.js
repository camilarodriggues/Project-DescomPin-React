import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../components/Card/Card';
import { CardContainer } from '../../Containers/Card/Card';
import { ModalSavePin } from '../../components/../Containers/modalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../Containers/modalSavePin/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notifications/Notication';
import { UseAppContext } from '../../store/AppContext';

export const HomePage = () => {
  const { state, dispatch } = UseAppContext();
  return (
    <div>
      <ModalSavePin open={state.mode === 'savePin'} />
      <ModalCreateFolder open={false} />
      <Notification
        message={'Criado com sucesso!'}
        onClose={() => {
          console.log('Clicou em fechar')
        }}
      />
      
        
      <Container fluid>
      <Row>
        <Col xs={12} md={3}><CardContainer title="Matemática" image="https://www.youtz.com.br/wp-content/uploads/2019/10/YOUTZ-MATEMATICA-ENEM.jpg" total={0} /></Col>
        <Col xs={12} md={3}><CardContainer title="Curso" image="https://picosimagem.com.br/wp-content/uploads/2020/05/clinika_blog_2-1000x580.jpg" total={0} /></Col>
        <Col xs={12} md={3}><CardContainer title="Tecnologia" image="https://portallitoralsul.com.br/wp-content/uploads/2023/04/mulheres-na-tecnologia-1000x580.jpg" total={0} /></Col>
        <Col xs={12} md={3}><CardContainer title="História" image="https://ctb.org.br/wp-content/uploads/2021/03/Comuna-1000x580-1.jpg" total={0} /></Col>
      </Row>
    </Container>
    </div>
  );
};
