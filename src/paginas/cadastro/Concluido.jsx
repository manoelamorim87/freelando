import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import conclusao from './assets/Cadastro pronto-cliente - crop.png';
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";



const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {
    return (<>
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Seu perfil está completo!
            </Tipografia>
            <Tipografia variante="body" componente="body">
                Agora é só começar a se conectar com os melhores freelancers do mercado!
            </Tipografia>
        </div>
        <figure>
            <ImagemEstilizada src={conclusao} alt="" />
        </figure>
        <Row justify="center">
            <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                <Link to='/cadastro'>
                    <Botao variante="secundaria">
                        Voltar para a home
                    </Botao>
                </Link>
            </Col>
        </Row>
    </>)
}

export default Concluido;