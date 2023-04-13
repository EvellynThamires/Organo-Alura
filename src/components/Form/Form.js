import './Form.css'
import TextField from '../TextField/TextField'
import SuspendList from '../SuspendList/SuspendList'
import Button from '../Button/Button'

const Form = () => {

    const teams = ['Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    const saveForm = (event) => {
        event.preventDefault()
        console.log('Form submetido')
    }

    return(
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <SuspendList label="Time" items={teams}></SuspendList>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form