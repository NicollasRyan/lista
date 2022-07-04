import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function List() {
    return (
        <div>
            <h1>Sobre</h1>
            <a to="/">retornar a página inicial</a>
        </div>
    );
}

