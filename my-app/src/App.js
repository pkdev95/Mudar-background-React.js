import { useState } from 'react';
import { Button } from './components/Button';
import './App.css';
document.title = "Mudar Cor React";


export const App = () => {

  

  const [cor, setCor] = useState(
    {
      cor1: '',
      cor2: '',
      cor3: '',
    });
  const [back, setBack] = useState('');

  document.body.style.backgroundImage = back;
  

  const colBtn = (cor) => {

    setCor((prevState) => {
      return {
        ...prevState,
        cor1: cor
      }
    }
    );
  }

  const colBtn2 = (cor) => {

    setCor((prevState) => {
      return {
        ...prevState,
        cor2: cor
      }
    }
    );
  }

  const colBtn3 = (cor) => {

    setCor((prevState) => {
      return { ...prevState,
         cor3: cor }
    }
    );
  }


  const red = () => {
    colBtn('red');
    setBack("url('https://img.freepik.com/psd-gratuitas/projeto-abstrato-do-fundo_1297-82.jpg?w=2000')");

  }

  const yellow = () => {
    colBtn2('yellow');
    setBack("url('https://elements-cover-images-0.imgix.net/4dbaff21-8e06-4cb7-9b96-efb05033ef13?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=c041b20d843a99f1d29b8b9edbb30111')");

  }

  const green = () => {
    colBtn3('green');
    setBack("url('https://img.freepik.com/vetores-gratis/fundo-abstrato-gradiente-monocromatico_52683-74300.jpg')");
  }

  return (
    <div id="vv" className="ps">
      <div className="titulo">
        <h1 className="wi">Escolha uma cor:</h1>
      </div>
      <div id="lkk" className="principal">
        <Button propriedades={[
          {
            id: "lk",
            label: "vermelho",
            onClick: red,
            style: { backgroundColor: cor.cor1 },
            value: 'btn'

          },
          {
            id: "ll",
            label: "amarelo",
            onClick: yellow,
            style: { backgroundColor: cor.cor2 },
            value: 'btn2'
          },

          {
            id: "pp",
            label: "verde",
            onClick: green,
            style: { backgroundColor: cor.cor3 },
            value: 'btn3'
          }
        ]}></Button>
      </div>
    </div>

  );
}

