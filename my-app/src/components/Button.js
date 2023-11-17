import Buttonbs from 'react-bootstrap/Button';

export const Button = ({propriedades = []}) => {
    return (
       <>
       {propriedades.map((propriedade,propIndex) =>
        
        <Buttonbs style={propriedade.style} id={propriedade.id} onClick={propriedade.onClick} key={propIndex}>{propriedade.label}</Buttonbs>
        )}
       

       </>
    );
}
