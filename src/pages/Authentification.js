import React, {useContext, useRef, useState} from 'react';
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";


function Authentification() {

    const {signIn} = useContext(UserContext);
    
    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
        inputs.current.push(el);
        }
    };
    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(inputs);
        try {
        await signIn(
        inputs.current[0].value,
        inputs.current[1].value
        );
        // à tester
        formRef.current.reset();
        setValidation("");
        //console.log(cred);
        //toggleModals("close");
        navigate("home");
        } catch {
        setValidation("attention, email ou mot de passe incorrect!")
        }
    };



    return (
        <>

            <div >
                <div className='container'>
                    <div className='row justify-content-center'>
                    <div className='col-md-12 p-40'>
                        {' '}
                        <span className='oliven-title-meta2 text-center'>Mariage Alejandra et Rainui</span>
                        <h2 className='oliven-title text-center'>Bienvenue </h2>
                        <br />
                        <form 
                            ref={formRef} 
                            onSubmit={handleForm}
                            className='row justify-content-center'>
                        
                        <div className='col-md-5'>
                            <div className='form-group'>
                            <input
                                ref={addInputs}
                                name='email' 
                                required
                                type='email' 
                                className='form-control' 
                                id='signInEmail'
                                placeholder='Email' />{' '}
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='form-group'>
                            <input
                                ref={addInputs}
                                name='pwd'
                                required
                                type='password'
                                className='form-control'
                                id='signInPwd'
                                placeholder='Mot de passe'
                            />{' '}
                            </div>
                        </div>
                        <div className='col-md-12 text-center'>
                            <div className='form-group'>
                            <button className='btn buttono'>Entrer</button>{' '}
                            </div>
                            <p className="text-danger mt-1 text-center">{validation}</p>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Authentification
