CREATE TABLE passagem (
    id SERIAL PRIMARY KEY,
    destino VARCHAR(100) NOT NULL,
    origem VARCHAR(100) NOT NULL,
    companhia VARCHAR(100) NOT NULL,
    "horarioPartida" VARCHAR(100) NOT NULL,
    "horarioChegada" VARCHAR(100) NOT NULL,
    "precoPassagem" DECIMAL(8, 2) NOT NULL,
    "urlFoto" TEXT NOT NULL
);

CREATE TABLE hospedagem (
    id SERIAL PRIMARY KEY,
    "localHospedagem" VARCHAR(100) NOT NULL,
    "precoHospedagem" DECIMAL(8, 2) NOT NULL,
    "descricaoHospedagem" VARCHAR(100) NOT NULL,
    "fotoPrincipal" TEXT NOT NULL
);

CREATE TABLE fotos (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    "hospedagemId" INTEGER NOT NULL,
    FOREIGN KEY ("hospedagemId") REFERENCES hospedagem(id)    
);

CREATE TABLE comodidades (
    id SERIAL PRIMARY KEY,
    comodidade VARCHAR(100) NOT NULL,
    "hospedagemId" INTEGER NOT NULL,
    FOREIGN KEY ("hospedagemId") REFERENCES hospedagem(id)    
);