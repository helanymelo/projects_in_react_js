import React from "react";
import Header from "../../components/Headers/Header";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup  from "yup";
import "./Posts.css";


const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(100),
    description: yup.string().required("A descrição é obrigatória").max(100),
    content:yup.string().required("O conteúdo é obrigatório").max(1000)
})

function Posts(){

    const {register, handleSubmit, formState:{errors}}=useForm({resolver: yupResolver(validationPost)})

    const onSubmit = data => console.log(data)

    return(
        <div>
            <Header/>
            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    <div className="line-post"></div>
                    <div className="body-post">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" name="title"{...register("title")}/>
                                <p className="error-message">{errors.title?. message}</p>
                            </div>

                            <div className="field">
                                <label>Descrição</label>
                                <input type="text" name="description"{...register("description")}/>
                                <p className="error-message">{errors.description?. message}</p>
                            </div>

                            <div className="field">
                                <label>Conteúdo</label>
                                <textarea type="text" name="content"{...register("content")}></textarea>
                                <p className="error-message">{errors.content?. message}</p>
                            </div>
                            
                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>

                        </form>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Posts;