import { Evento } from "../evento/evento";

export const EVENTOS: Evento[] = [

    //EventosHoy

    new Evento('Cumple pepe', new Date(2018, 6, 2, 16, 30), 'Casa de Manolo', 'Manolo'),
    new Evento('Recital Pepo', new Date(2018, 6, 5, 19, 15), 'Bar 3', 'Manager'),
    //Eventos semana que viene
    new Evento('Casamiento', new Date(2018, 6, 7, 18, 15), 'Salon', 'Pedro'),
    //Eventos proximos
    new Evento('Casamiento Laura', new Date(2018, 6, 11, 18, 15), 'Salon', 'Tomas'),
    new Evento('Muestra canto', new Date(2018, 11, 26, 15, 0), 'Teatro', 'Martin'),
    new Evento('Muestra canto2', new Date(2019, 1, 3, 19, 0), 'Teatro', 'Martin'),
];