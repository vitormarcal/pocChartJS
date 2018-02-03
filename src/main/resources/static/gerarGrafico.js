(function () {

    "use strict";

    $(function onLoadPage() {
        montarGrafico();
    });

    function montarGrafico() {

        let promises = [];

        promises.push(countQuantidadeVeiculosCompradosMes());
        promises.push(countQuantidadeVeiculosVendidosMes());

        Promise.all(promises)
            .then((dataSets) => gerarGrafico(dataSets))
    .catch((err) => console.log(err));

    }

    function gerarGrafico(datasets) {
        let ctx = $('#areaChart').get(0).getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                    'Julho','Agosto','Setembro','Outubro','Novembro', 'Dezembro'],
                datasets: datasets
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    function countQuantidadeVeiculosCompradosMes() {
        return new Promise((onSucces, onError) => {
            $.get({url: "../veiculos/countQuantidadeVeiculosCompradosMes", contentType: 'application/x-www-form-urlencoded; charset=utf8'})
            .then(onSucces)
            .catch(onError);
    })
    }

    function countQuantidadeVeiculosVendidosMes() {
        return new Promise((onSucces, onError) => {
            $.get({url: "../veiculos/countQuantidadeVeiculosVendidosMes", contentType: 'application/x-www-form-urlencoded; charset=utf8'})
            .then(onSucces)
            .catch(onError);
    })
    }

})();