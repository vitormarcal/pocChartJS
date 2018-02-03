package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController()
@RequestMapping(value = "/veiculos")
public class DataSetsController {
    private final HashMap<Integer, Integer> resultadoBanco = new HashMap<>();


    @GetMapping("/countQuantidadeVeiculosMes")
    public DataSetDTO countQuantidadeVeiculosMes() {

        gerarValores();
        String label = "Veiculos";
        DataSetDTO dataSetDTO = new DataSetDTO(label, 12);
        for (Map.Entry<Integer, Integer> pair : resultadoBanco.entrySet()){
                dataSetDTO.set(pair.getKey(), pair.getValue());
        }
        return dataSetDTO;
    }

    private Map<Integer, Integer> gerarValores(){
        int scale = 12;

        Random randomGenerator = new Random();
        for (int i = 1; i <= scale; i++) {
            resultadoBanco.put(i, randomGenerator.nextInt(100));
        }

        return resultadoBanco;
    }
}
