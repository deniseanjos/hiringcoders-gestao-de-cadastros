import React from 'react';
import * as S from './styled';

export default function Clientes() {
    return (
        <S.Container>

            <h1>Cadastro de Clientes</h1>

            <form>

                <div>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Sobrenome" />
                </div>
                
                <div>
                    <input type="email" placeholder="E-mail" />
                    <input type="phone" placeholder="Telefone" />
                </div>
                <div>
                    <button>Cadastrar Cliente</button>
                </div>
            </form>


            <h1>Clientes Cadastrados</h1>

            <table class="table">

                <thead>
                    <tr class="">
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="">
                        <td>Nome Teste</td>
                        <td>Sobrenome Teste</td>
                        <td>E-mail Teste</td>
                        <td>Telefone Teste</td>
                    </tr>
                </tbody>

            </table>

        </S.Container>

    );
}