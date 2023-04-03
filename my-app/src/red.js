import './App.css';
import {Button} from 'reactstrap';
document.title = "Mudar Cor React";


const red = () => {
  document.body.style.backgroundImage = "url('https://img.freepik.com/psd-gratuitas/projeto-abstrato-do-fundo_1297-82.jpg?w=2000')";
  document.getElementById('lk').style.backgroundColor = "red";
  


}

const yellow = () => {
  document.body.style.backgroundImage = "url('https://elements-cover-images-0.imgix.net/4dbaff21-8e06-4cb7-9b96-efb05033ef13?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=c041b20d843a99f1d29b8b9edbb30111')";
  document.getElementById('ll').style.backgroundColor = "yellow";
}

const green = () => {
  document.body.style.backgroundImage = "url('https://img.freepik.com/vetores-gratis/fundo-abstrato-gradiente-monocromatico_52683-74300.jpg')";
  document.getElementById('pp').style.backgroundColor = "green";
}


const Red = () => {
  return (
    <div id="vv" className="ps">
    <div class="titulo">
    <h1 class="wi">Escolha uma cor:</h1>
    </div>
    <div id="lkk" className="principal">
     <Button id="lk" color="info" onClick={red}><h2>vermelho</h2></Button>
     <Button id="ll" color="info" onClick={yellow}><h2>amarelo</h2></Button>
     <Button id="pp" color="info" onClick={green}><h2>verde</h2></Button>
  
    </div>
    </div>
    
  );
}
export default Red;
