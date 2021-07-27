import React from 'react';
import * as S from './styled';

export default function Menu() {
    return (
        <S.Menu>
        <h2>Gestão de Cadastros</h2>
        <S.Links>
        <a href="/produtos">Produtos</a>
        <a href="/clientes">Clientes</a>
        </S.Links>
        </S.Menu>
    );
}