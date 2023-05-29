import { createPassagemDB, getPassagemByIdDB, getPassagemDB } from "../repositories/passagem.repository.js";

export async function inserePassagem(req, res) {
    const { destino, origem, companhia, horarioPartida, horarioChegada, precoPassagem, urlFoto } = req.body;

    try {
        await createPassagemDB(destino, origem, companhia, horarioPartida, horarioChegada, precoPassagem, urlFoto);

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getPassagem(req, res) {
    try {
        const passagens = await getPassagemDB();

        res.status(200).send(passagens.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getPassagemById(req, res) {
    const { id } = req.params;
    try {
        const passagem = await getPassagemByIdDB(id);
        if (passagem.rowCount === 0) return res.status(404).send({ message: "passagem não existe!" });

        res.status(200).send(passagem.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
}