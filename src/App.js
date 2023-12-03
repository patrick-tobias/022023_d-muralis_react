import './App.css';
import InputText from './Components/Form/InputText';
import InputDropdownBox from './Components/Form/InputDropdownBox';
import ButtonDefault from './Components/Form/ButtonDefault';
import ButtonLarge from './Components/Form/ButtonLarge'

import cursos from './JS/Cursos'
import estados from './JS/Estados'
import cidades from './JS/Cidades'
import { useState } from 'react';

function App() {
  const [ingressanteNome, setIngressanteNome] = useState('');
  const [ingressanteCurso, setIngressanteCurso] = useState('');
  const [ingressanteEstado, setIngressanteEstado] = useState('');
  const [ingressanteCidade, setIngressanteCidade] = useState('');

  const handleIngressanteNomeChange = (event) => {
    setIngressanteNome(event.target.value);
  }

  const handleIngressanteCursoChange = (event) => {
    setIngressanteCurso(event.target.value);
  }

  const handleIngressanteEstadoChange = (event) => {
    setIngressanteEstado(event.target.value);
  }

  const getCidadesOptions = (ingressanteEstado) => {
    if(!ingressanteEstado)
      return [];

    return cidades.get(ingressanteEstado)
  }

  const handleIngressanteCidadeChange = (event) => {
    setIngressanteCidade(event.target.value)
  }

  const handleVoltarButton = () => {
    alert("Operação cancelada pelo usuário!")

    setIngressanteNome("");
    setIngressanteCurso("");
    setIngressanteEstado("");
    setIngressanteCidade("")
  }

  const handleConfirmarButton = () => {
    alert(`Ingressante cadastrado! ${ingressanteNome}, ${ingressanteCurso}, ${ingressanteEstado}, ${ingressanteCidade}`)

    setIngressanteNome("");
    setIngressanteCurso("");
    setIngressanteEstado("");
    setIngressanteCidade("")
  }

  return (
    <div className="App d-flex justify-content-center">

      <div className='container border border-primary m-3 pt-0'>
        <p className='bg-primary text-white text-capitalize text-center mt-0 p-2'>cadastro de ingressantes</p>

        <form className='px-3' onSubmit={handleConfirmarButton}>
          <InputText
            type="text"
            label="nome"
            required
            value={ingressanteNome}
            onchange={handleIngressanteNomeChange}
          >
            nome
          </InputText>

          <InputDropdownBox
            label="curso"
            required
            itens={cursos}
            value={ingressanteCurso}
            onchange={handleIngressanteCursoChange}
          >
            curso
          </InputDropdownBox>

          <InputDropdownBox
            label="estado"
            required
            itens={estados}
            value={ingressanteEstado}
            onchange={handleIngressanteEstadoChange}
          >
            estado
          </InputDropdownBox>

          <InputDropdownBox
            label="cidade"
            required
            itens={getCidadesOptions(ingressanteEstado)}
            value={ingressanteCidade}
            onchange={handleIngressanteCidadeChange}
          >
            cidade
          </InputDropdownBox>

          <div className='my-3 d-flex flex-wap justify-content-between align-items-center'>
            <ButtonDefault
              type={"button"}
              onclick={handleVoltarButton}
            >voltar</ButtonDefault>

            <ButtonLarge
              type={"submit"}
            >gravar</ButtonLarge>
          </div>
        </form>
        
      </div>


    </div>
  );
}

export default App;
