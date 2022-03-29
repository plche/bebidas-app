import './App.css';
import {useEffect, useState} from "react";
import FormularioBebida from "./components/FormularioBebida/FormularioBebida";
import Bebida from "./components/Bebida/Bebida";
import axios from "axios";

function App() {
    const [nombreBebida, setNombreBebida] = useState('');
    const [listaBebidas, setListaBebidas] = useState([]);

    const buscarBebida = (event) => {
        event.preventDefault();
        setNombreBebida((nombreBebidaPrev) => event.target.nombreBebida.value);
    }

    /*useEffect(() => {
        async function request() {
            try {
                let respuesta = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida}`);
                setListaBebidas((listaBebidasPrev) => respuesta.data.drinks);
            }
            catch(err) {
                console.log(err);
            }
        }
        request();
    }, [nombreBebida]);*/

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida}`)
            .then(respuesta => {
                setListaBebidas((listaBebidasPrev) => respuesta.data.drinks);
            })
            .catch(err => {
                console.log(err);
            });

    }, [nombreBebida] );

    return (
        <div className="App">
            <FormularioBebida buscarBebida={buscarBebida} />
            {
                listaBebidas.map((bebida, indice) => <Bebida key={`bebida_`+indice} bebida={bebida} />)
            }
        </div>
    );
}

export default App;
