import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/card/card';
import { ModalSavePin } from '../../components/../Containers/modalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../Containers/modalSavePin/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notifications/Notication'

export const HomePage = () => {
  return (
    <div>
      <ModalSavePin open={false} />
      <ModalCreateFolder open={false} />
      <Notification
        message={'Criado com sucesso!'}
        onClose={() => {
          console.log('Clicou em fechar')
        }}
      />
      <Container fluid>
      <Row>
        <Col xs={12} md={3}><Card title="Matemática" image="https://www.youtz.com.br/wp-content/uploads/2019/10/YOUTZ-MATEMATICA-ENEM.jpg" total={0} /></Col>
        <Col xs={12} md={3}><Card title="Curso" image="https://picosimagem.com.br/wp-content/uploads/2020/05/clinika_blog_2-1000x580.jpg" total={0} /></Col>
        <Col xs={12} md={3}><Card title="Tecnologia" image="https://portallitoralsul.com.br/wp-content/uploads/2023/04/mulheres-na-tecnologia-1000x580.jpg" total={0} /></Col>
        <Col xs={12} md={3}><Card title="História" image="https://ctb.org.br/wp-content/uploads/2021/03/Comuna-1000x580-1.jpg" total={0} /></Col>
      </Row>
    </Container>
    </div>
  );
};
