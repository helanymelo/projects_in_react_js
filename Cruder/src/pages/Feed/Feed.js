import React from "react";
import HeaderMain from "../../components/Headers/HeaderMain";
import {FiMoreVertical} from 'react-icons/fi';
import "./Feed.css";
import {Link} from "react-router-dom"

function Feed(){
    return(
        <div>
            <HeaderMain/>
                <main>
                    <div className="cards">
                        <div className="card">
                            <header>
                                <h2>Curso consumindo API</h2>
                                <FiMoreVertical/>
                            </header>

                        <div className="line"></div>

                            <p>Consumo de API</p>
                            
                            <div className="btns">
                                <div className="btn-edit">
                                        <Link to="editar">
                                            <button>Edit</button>
                                        </Link>
                                </div>

                            <div className="btn-readmore">
                                <Link to="lermais">
                                        <button>Read More</button>
                                </Link>
                            </div>

                            <div className="btn-delete">
                                    <Link to="delete">
                                        <button>Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </main>
        </div>
    )
}

export default Feed;