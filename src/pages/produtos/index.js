import React from 'react';
import * as S from './styled';

export default function Produtos() {

    return (
        <S.Container>

            <h1>Cadastro de Produtos</h1>

            <form>

                <div>
                    <input type="text" placeholder="Categoria" />
                    <input type="text" placeholder="Descrição" />
                </div>

                <div>
                    <input type="text" placeholder="Marca" />
                    <input type="number" placeholder="Quantidade" />
                </div>
                <div>
                    <button>Cadastrar Produto</button>
                </div>
            </form>


            <h1>Produtos Cadastrados</h1>

            <table class="table">

                <thead>
                    <tr class="">
                        <th scope="col">Categoria</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="">
                        <td>Categoria Teste</td>
                        <td>Descrição Teste</td>
                        <td>Marca Teste</td>
                        <td>Quantidade Teste</td>
                    </tr>
                </tbody>

            </table>


        </S.Container>
    );


}
