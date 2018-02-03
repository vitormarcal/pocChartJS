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

    @GetMapping("/countQuantidadeVeiculosCompradosMes")
    public DataSetDTO countQuantidadeVeiculosCompradosMes() {
        DataSetDTO dataSetDTO = populaDataSet(gerarValores(), "Veiculos Comprados");
        dataSetDTO.setBackgroundColor(0, "rgba(255,  99, 132, 0.2)");
        dataSetDTO.setBackgroundColor(1, "rgba( 54, 162, 235, 0.2)");
        dataSetDTO.setBackgroundColor(2, "rgba(255, 206,  86, 0.2)");
        dataSetDTO.setBackgroundColor(3, "rgba( 75, 192, 192, 0.2)");
        dataSetDTO.setBackgroundColor(4, "rgba(153, 102, 255, 0.2)");
        dataSetDTO.setBackgroundColor(5, "rgba(255, 159,  64, 0.2)");

        dataSetDTO.setBorderColor(0, "rgba(255,  99, 132, 1)");
        dataSetDTO.setBorderColor(1, "rgba( 54, 162, 235, 1)");
        dataSetDTO.setBorderColor(2, "rgba(255, 206,  86, 1)");
        dataSetDTO.setBorderColor(3, "rgba( 75, 192, 192, 1)");
        dataSetDTO.setBorderColor(4, "rgba(153, 102, 255, 1)");
        dataSetDTO.setBorderColor(5, "rgba(255, 159,  64, 1)");
        return dataSetDTO;
    }

    @GetMapping("/countQuantidadeVeiculosVendidosMes")
    public DataSetDTO countQuantidadeVeiculosVendidosMes() {

        DataSetDTO dataSetDTO = populaDataSet(gerarValores(), "Veiculos vendidos");
        dataSetDTO.setBackgroundColor(0, "rgba(220, 199,  32, 0.2)");
        dataSetDTO.setBackgroundColor(1, "rgba( 30, 102, 135, 0.2)");
        dataSetDTO.setBackgroundColor(2, "rgba(255,  26, 126, 0.2)");
        dataSetDTO.setBackgroundColor(3, "rgba(  8, 129, 210, 0.2)");
        dataSetDTO.setBackgroundColor(4, "rgba(123, 122, 200, 0.2)");
        dataSetDTO.setBackgroundColor(5, "rgba(127, 195, 246, 0.2)");

        dataSetDTO.setBorderColor(0, "rgba(220, 199,  32, 1)");
        dataSetDTO.setBorderColor(1, "rgba( 30, 102, 135, 1)");
        dataSetDTO.setBorderColor(2, "rgba(255,  26, 126, 1)");
        dataSetDTO.setBorderColor(3, "rgba(  8, 129, 210, 1)");
        dataSetDTO.setBorderColor(4, "rgba(123, 122, 200, 1)");
        dataSetDTO.setBorderColor(5, "rgba(127, 195, 246, 1)");
        return dataSetDTO;
    }

    private DataSetDTO populaDataSet(final Map<Integer, Integer> resultadoBanco, final String label) {
        DataSetDTO dataSetDTO = new DataSetDTO(label, 12);
        for (Map.Entry<Integer, Integer> pair : resultadoBanco.entrySet()){
            dataSetDTO.set(pair.getKey(), pair.getValue());
        }
        return dataSetDTO;
    }

    private Map<Integer, Integer> gerarValores(){
        int scale = 12;
        Map<Integer, Integer> resultadoBanco = new HashMap<>();
        Random randomGenerator = new Random();
        for (int i = 1; i <= scale; i++) {
            resultadoBanco.put(i, randomGenerator.nextInt(10000));
        }

        return resultadoBanco;
    }
}
