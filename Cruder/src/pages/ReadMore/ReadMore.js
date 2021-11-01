import React from "react";
import Header from "../../components/Headers/Header";
import {FiMoreVertical} from 'react-icons/fi';

function ReadMore(){
    return(
        <div>
            <Header/>
            <main>
                    <div className="cards">
                        <div className="card">
                            <header>
                                <h2>Curso consumindo API</h2>
                                <FiMoreVertical/>
                            </header>

                        <div className="line"></div>
                            <p>Consumo de API aqui no curso do Gabriel Dias</p>
                            <p>Consumo de API aqui no curso do Gabriel Dias</p>
                            <p>Consumo de API aqui no curso do Gabriel Dias</p>
                            <p>Consumo de API aqui no curso do Gabriel Dias</p>
                            

                            
                            
                        </div>
                    </div>
            </main>
        </div>
    )
}

export default ReadMore;