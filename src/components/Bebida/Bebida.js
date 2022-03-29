import './Bebida.css';

function Bebida(props) {
    const {bebida} = props;
    const ingredientes = [];
    let cont = 1;

    while(bebida['strIngredient' + cont]) {
        ingredientes.push(<li>{bebida['strIngredient' + cont]} {bebida['strMeasure' + cont]}</li>);
        cont ++;
    }

    return(
        <div className="bebida">
            <h2 className="bebidaTitulo">{bebida.strDrink}</h2>
            <div className='bebidaContenedor'>
                <img className="bebidaImagen" src={bebida.strDrinkThumb} alt={bebida.strDrink} />
                <ul>{ingredientes}</ul>
            </div>
            <p className="bebidaInstrucciones">{bebida.strInstructions}</p>
        </div>
    );
}

export default Bebida;