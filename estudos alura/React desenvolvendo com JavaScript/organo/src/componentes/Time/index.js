import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Time

/* 
ANOTAÇÕES:

{} dentro das tags significa que ele será dinâmico

{{}} chaves dentro de chaves cria um objeto dentro da variavel

(props.colaboradores.length > 0) ?  renderização condicional em react (se for true ele vai retornar a section) (a condição sempre retornar o que esta a direita dele)
*/