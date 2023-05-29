import { db } from "../database/db.connection.js";

export function createPassagemDB(destino, origem, companhia, horarioPartida, horarioChegada, precoPassagem, urlFoto) {
    return db.query(
        `INSERT INTO passagem (destino, origem, companhia, "horarioPartida", "horarioChegada", "precoPassagem", "urlFoto") 
            VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
        [destino, origem, companhia, horarioPartida, horarioChegada, precoPassagem, urlFoto]
    );
}

export function getPassagemDB() {
    return db.query(
        `SELECT * FROM passagem;`
    );
}

export function getPassagemByIdDB(id) {
    return db.query(
        `SELECT * FROM passagem WHERE id=$1;`,
        [id]
    );
}