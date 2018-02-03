package com.example.demo;

import java.util.*;

public final class DataSetDTO {

    private final String label;
    private final List<Integer> data;
    private final List<String> backgroundColor;
    private final List<String> borderColor;
    private Integer borderWith = 1;

    public DataSetDTO(String label, int escala) {
        this.label = label;
        Integer[] integers = new Integer[escala];
        Arrays.fill(integers, 0);
        data = Arrays.asList(integers);
        backgroundColor = Arrays.asList("","","", "", "", "");
        borderColor = Arrays.asList("","","", "", "", "");
    }

    public String getLabel() {
        return label;
    }

    public void set(Integer pontoHorizontal, Integer valor) {
        if (pontoHorizontal < 1 || pontoHorizontal > data.size()) {
            throw new UnsupportedOperationException(
                    String.format("Parametro informado estourou eixo horizontal. Informado %s", valor)
            );
        }
        data.set(pontoHorizontal -1, valor);
    }

    public void setBackgroundColor(int indice, String cor) {
        backgroundColor.set(indice, cor);
    }

    public void setBorderColor(int indice, String cor) {
        borderColor.set(indice, cor);
    }

    public List<Integer> getData() {
        return new ArrayList<>(data);
    }

    public List<String> getBackgroundColor() {
        return new ArrayList<>(backgroundColor);
    }

    public List<String> getBorderColor() {
        return new ArrayList<>(borderColor);
    }

    public void setBorder(Integer border) {
        this.borderWith = border;
    }

    public Integer getBorderWith() {
        return borderWith;
    }
}
