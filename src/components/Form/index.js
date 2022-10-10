import { Button } from '../Button';
import { DropDown } from '../DropDown';
import { TextField } from '../TextField';
import './Form.css'
export const Form = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const onSaved = (e) => {
        e.preventDefault();
        console.log("Form foi submetido")
    }

    return (
        <section className='section-form'>
            <form onSubmit={onSaved}>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown obrigatorio={true} label="Time" itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}