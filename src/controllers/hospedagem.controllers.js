import { createHospedagemDB, getComodidadesHospedagemByIdDB, getFotoHospedagemByIdDB, getHospedagemByIdDB, getHospedagemByLocalDB, getHospedagemDB, insertComodidadesHospedagemByIdDB, insertFotoHospedagemByIdDB } from "../repositories/hospedagem.repository.js";

export async function createHospedagem(req, res) {
    const { localHospedagem, precoHospedagem, descricaoHospedagem, fotoPrincipal } = req.body;
    const localHospedagemUpper = localHospedagem.toUpperCase();
    try {
        await createHospedagemDB(localHospedagemUpper, precoHospedagem, descricaoHospedagem, fotoPrincipal);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getHospedagem(req, res) {
    try {
        const hospedagem = await getHospedagemDB();

        res.status(200).send(hospedagem.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getHospedagemById(req, res){
    const { id } = req.params;
    try {
        const hospedagem = await getHospedagemByIdDB(id);
        if (hospedagem.rowCount === 0) return res.status(404).send({ message: "hospedagem não existe!" });

        res.status(200).send(hospedagem.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getHospedagemByLocal(req, res) {
    const cidade = req.query.cidade;
    const cidadeUpper = cidade.toUpperCase();

    try {
        const hospedagem = await getHospedagemByLocalDB(cidadeUpper);
        if (hospedagem.rowCount === 0) return res.status(404).send({ message: "hospedagens para esse destino não estão disponiveis!" });

        res.status(200).send(hospedagem.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function insertFotoHospedagemById(req, res){
    const { id } = req.params;
    const { url } = req.body;
    try {
        await insertFotoHospedagemByIdDB(url, id);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getFotoHospedagemById(req, res){
    const { id } = req.params;
    try {
        const fotos = await getFotoHospedagemByIdDB(id);
        if (fotos.rowCount === 0) return res.status(404).send({ message: "fotos de hospedagem não existe!" });

        res.status(200).send(fotos.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function insertComodidadesHospedagemById(req, res){
    const { id } = req.params;
    const { comodidade } = req.body;
    try {
        await insertComodidadesHospedagemByIdDB(comodidade, id);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getComodidadesHospedagemById(req, res){
    const { id } = req.params;
    try{
        const comodidades = await getComodidadesHospedagemByIdDB(id);
        if (comodidades.rowCount === 0) return res.status(404).send({ message: "comodidades de hospedagem não existe!" });
        
        res.status(200).send(comodidades.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}