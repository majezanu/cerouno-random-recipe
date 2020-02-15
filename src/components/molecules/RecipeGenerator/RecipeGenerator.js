import React from 'react';
import Button from '../../atoms/Button/Button';

const RandomGenerator = (props) => (
    <div className="card">
        <div className="card-body">
            <div className="card-title">
                <h1>¿Qué cenamos?</h1>
            </div>
            <h3 className="card-text">
                <p>
                ¿Cansado de hacer esa misma pregunta?,
                <br/>
                haga click para obtener una receta al azar
                </p>
            </h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Button action={props.getRandomAction}>OBTENER RECETA</Button>
                    </div>
                    <div className="col">
                        <Button action={props.getLastAction}>VER RECETA ANTERIOR</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default RandomGenerator;
