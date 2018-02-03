(function () {

    function gerarGrafico(datasets) {
        var ctx = $('#areaChart').get(0).getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                    'Julho','Agosto','Setembro','Outubro','Novembro', 'Dezembro'],
                datasets: datasets
                // datasets: [{
                //     label: '# of Votes',
                //     data: [12, 19, 90, 5, 20, 3],
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)'
                //     ],
                //     borderColor: [
                //         'rgba(255,99,132,1)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)'
                //     ],
                //     borderWidth: 1
                // },
                //     {
                //         label: '# of csasa',
                //         data: [8, 30, 15, 5, 29, 7],
                //         backgroundColor: [
                //             'rgba(220, 199, 32, 0.2)',
                //             'rgba(30, 102, 135, 0.2)',
                //             'rgba(255, 26, 126, 0.2)',
                //             'rgba(8, 129, 210, 0.2)',
                //             'rgba(123, 122, 200, 0.2)',
                //             'rgba(127, 195, 246, 0.2)'
                //         ],
                //         borderColor: [
                //             'rgba(220, 199, 32, 1)',
                //             'rgba(30, 102, 135, 1)',
                //             'rgba(255, 26, 126, 1)',
                //             'rgba(8, 129, 210, 1)',
                //             'rgba(123, 122, 200, 1)',
                //             'rgba(127, 195, 246, 1)'
                //         ],
                //         borderWidth: 1
                //     }]
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

    $(function () {
        montarGrafico();


    });

    function montarGrafico() {

        let promises = [];
        promises.push(countDados());
        promises.push(countDados());
        promises.push(countDados());
        promises.push(countDados());

        Promise.all(promises)
            .then((dataSets) => gerarGrafico(dataSets))
            .catch((err) => console.log(err));

    }


    function countDados() {
        return new Promise((onSucces, onError) => {
            $.get({url: "../veiculos/countQuantidadeVeiculosMes", contentType: 'application/x-www-form-urlencoded; charset=utf8'})
            .then(onSucces)
            .catch(onError);
        })
    }

    function getRandomColor(usedColors) {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        if (usedColors.indexOf(color) > -1) {
            color =  getRandomColor(usedColors);
        }
        usedColors.push(color);
        return color;
    }
    function getRamdomRGBA(usedRgbas, opacity) {
        let o = Math.round, r = Math.random, s = 255;
        let opcaityUsed = null;
        if (opacity) {
            opacityUsed = opacity;
        } else {
            opacityUsed = r().toFixed(1);
            opacityUsed = opacityUsed === '0.0' ? '0.3' : opacityUsed;
        }

        let rgba = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + opacityUsed + ')';
        if (usedRgbas.indexOf(rgba) > -1) {
            rgba =  getRamdomRGBA(usedRgbas);
        }
        usedRgbas.push(rgba);
        return rgba;
    }

})();