import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

export default function Home() {

    return (
        <>
        <S.TituloH1>Home works</S.TituloH1>
        <Link to="/clientes">Clientes</Link>
        <div>
        <Link to="/produtos">Produtos</Link>
        </div>
        </>
    );
}