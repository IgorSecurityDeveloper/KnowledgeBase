import DoencaCard from "./DoencaCard";
import FeLV from "./src/images/FeLV.jpg"
import FIV from "./src/images/FIV.jpg"
import Pneumonia from "./src/images/Pneumonia.jpg"

function CardGroup() {

    return (

        <>

{/* Futuramente buscar esses dados pelo Banco de dados KB-BD */}
            <div className="card-group mt-4 mb-4 shadow">
                <DoencaCard
                    tipoDoenca="Vírus"
                    nomeDoenca="FeLV"
                    infoGerais=" FeLV é a leucemia felina, também causada por um vírus que pode ser transmitido por meio de secreções como saliva, fezes, leite e urina de gatos infectados."
                    infoGeraisImg={FeLV}
                />

                <DoencaCard
                    tipoDoenca="Vírus"
                    nomeDoenca="FIV"
                    infoGerais="A FIV é a doença causada pelo vírus da imunodeficiência felina, que compromete o sistema imune do gato de forma parecida com o que o vírus HIV faz com seres humanos"
                    infoGeraisImg={FIV}
                />

                <DoencaCard
                    tipoDoenca="Vírus"
                    nomeDoenca="Pneumonia"
                    infoGerais="O animal com pneumonia apresenta cansaço, tosse, perda de peso, secreção nasal e respiração ofegante. Os sintomas podem ser muito parecidos com os da rinotraqueíte, mas em geral são mais intensos e perigosos."
                    infoGeraisImg={Pneumonia}
                />

            </div>

        </>

    );
}

export default CardGroup;