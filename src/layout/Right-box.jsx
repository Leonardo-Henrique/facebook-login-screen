import React from 'react'

export default () => {
    return(
        <div className="right-box">
            <div className="form">
                <form>
                    <input type="text" placeholder="Email ou telefone"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="submit" value="Entrar"></input>
                </form>
                <a href="#">Esqueceu a senha?</a>

                <div className="hr"></div>
                
                <button className="new-account">Criar nova conta</button>
            </div>

            <p><a href="">Criar uma Página</a> para uma celebridade, banda ou empresa.</p>

        </div>
    )
}