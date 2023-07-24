import './Form.css'
import TextField from '../TextField/TextField'
import SuspendList from '../SuspendList/SuspendList'
import Button from '../Button/Button'
import { useState } from 'react'

const Form = () => {

    const teams = ['Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const saveForm = (event) => {
        event.preventDefault()
    }

    return(
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name} 
                    updatingTextField={value => setName(value)}
                />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    updatingTextField={value => setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    updatingTextField={value => setImage(value)}
                />
                <SuspendList 
                    label="Time" 
                    items={teams}>
                    value={team}
                    updatingTextField={value => setTeam(value)}
                </SuspendList>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form