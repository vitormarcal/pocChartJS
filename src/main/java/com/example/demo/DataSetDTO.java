package com.example.demo;

import java.util.*;

public final class DataSetDTO {

    private final String label;
    private final List<Integer> data;

    public DataSetDTO(String label, int escala) {
        this.label = label;
        Integer[] integers = new Integer[escala];
        Arrays.fill(integers, 0);
        data = Arrays.asList(integers);
    }

    public String getLabel() {
        return label;
    }

    public void set(Integer pontoHorizontal, Integer valor) {
        if (pontoHorizontal < 1 || pontoHorizontal > data.size()) {
            throw new UnsupportedOperationException();
        }
        data.set(pontoHorizontal -1, valor);
    }

    public List<Integer> getData() {
        return new ArrayList<>(data);
    }
}
