import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Row,Button } from 'reactstrap';
import { CardTitle, CardGroup,  Container, Form, Input, InputGroup,
   InputGroupAddon, InputGroupText} from 'reactstrap';


class App extends React.Component {
constructor(props){
  super(props);

  this.state= {
    idcontenido:'',
    user:'',
    contraseña:''
    
    
  }
  
  this.buscarContenido=this.buscarContenido.bind(this);
  this.EnviarContenido=this.EnviarContenido.bind(this);
}


   buscarContenido(e){

   let corr = document.getElementById("Usuario").value;
   let pass = document.getElementById("Id").value;
   
    axios.get('http://localhost:8090/api/sps/helloworld/v1'
      ).then(res =>{
        console.log(res);

      this.setState({user:res.data.correo})
      this.setState({contraseña:res.data.password});

       console.log(this.state.user);

      if(res.data.correo==corr && res.data.password==pass){
          alert('Inicio de Sesión Correcto');
      }
      else{
        alert('Datos Incorrectos');
      }
      })   
      
    
   
  }


  EnviarContenido(e){

   let corr = document.getElementById("Usuario").value;
   let pass = document.getElementById("Id").value;
   // console.log('SI LEE: '+idcont);

   
    let datos={
      correo:corr,
      password:pass
    }
  

    axios.post('http://localhost:8090/api/sps/helloworld/v1',datos
      ).then(res =>{
        console.log(res);

     alert('Usuario registrado correctamente');
       

      })   
    
   
  }
  render(){
    return(
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <center>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Ingresa con tu cuenta<br/><span className="alert-danger">{this.state.mensaje}</span></p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="correo" id="Usuario" autoComplete="correo" name="correo" value={this.state.correo} onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" id="Id" autoComplete="current-password" name="password" value={this.state.password} onChange={this.handleChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary"  onClick={this.buscarContenido}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0"  onClick={this.EnviarContenido}>Registrar</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                  </center>
                </Card>
                
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
