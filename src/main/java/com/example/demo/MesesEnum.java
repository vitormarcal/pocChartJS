package com.example.demo;

public enum MesesEnum {

    JANEIRO("Janeiro", 1),
    FEVEREIRO("Fevereiro", 2),
    MARCO("Março", 3),
    ABRIL("Abril", 4),
    MAIO("Maio", 5),
    JUNHO("Junho", 6),
    JULHO("Julho", 7),
    AGOSTO("Agosto", 8),
    SETEMBRO("Setembro", 9),
    OUTUBRO("Outubro", 10),
    NOVEMBRO("Novembro", 11),
    DEZEMBRO("Dezembro", 12);

    private final int numeroMes;
    private final String nomeMes;

    MesesEnum(String nomeMes, int numeroMes) {
        this.nomeMes = nomeMes;
        this.numeroMes = numeroMes;
    }

    public static MesesEnum of(int numeroMes) {
        if (numeroMes < 1 || numeroMes > 12) {
            throw  new UnsupportedOperationException(String.format("Apenas existem 12 meses. Informador %s", numeroMes));
        } else {
            return MesesEnum.values()[numeroMes - 1];
        }
    }

    public String getNomeMes() {
        return nomeMes;
    }

    public int getNumeroMes() {
        return numeroMes;
    }
}
