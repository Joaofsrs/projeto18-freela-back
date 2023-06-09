import { db } from "../database/db.connection.js";

export function createHospedagemDB(localHospedagem, precoHospedagem, descricaoHospedagem, fotoPrincipal) {
    return db.query(
        `INSERT INTO hospedagem ("localHospedagem", "precoHospedagem", "descricaoHospedagem", "fotoPrincipal")
            VALUES ($1, $2, $3, $4);
        `, [localHospedagem, precoHospedagem, descricaoHospedagem, fotoPrincipal]
    );
}

export function getHospedagemDB() {
    return db.query(
        `SELECT * FROM hospedagem;`
    );
}

export function getHospedagemByIdDB(id) {
    return db.query(
        `SELECT * FROM hospedagem WHERE id=$1;`,[id]
    );
}

export function getHospedagemByLocalDB(local) {
    return db.query(
        `SELECT * FROM hospedagem WHERE "localHospedagem"=$1;`,[local]
    );
}

export function insertFotoHospedagemByIdDB(url, id){
    return db.query(
        `INSERT INTO fotos (url, "hospedagemId")
            VALUES ($1, $2);
        `, [url, id]
    );
}

export function getFotoHospedagemByIdDB(id){
    return db.query(
        `SELECT * FROM fotos WHERE "hospedagemId"=$1;`,[id]
    );
}

export function insertComodidadesHospedagemByIdDB(comodidade, id){
    return db.query(
        `INSERT INTO comodidades (comodidade, "hospedagemId")
            VALUES ($1, $2);
        `, [comodidade, id]
    );
}

export function getComodidadesHospedagemByIdDB(id){
    return db.query(
        `SELECT * FROM comodidades WHERE "hospedagemId"=$1;`,[id]
    );
}