(function () {

    function gerarGrafico(datasets) {
        /* ChartJS
                 * -------
                 * Here we will create a few charts using ChartJS
                 */

        //--------------
        //- AREA CHART -
        //--------------

        // Get context with jQuery - using jQuery's .get() method.
        var areaChartCanvas = $('#areaChart').get(0).getContext('2d');
        // This will get the first returned node in the jQuery collection.
        var areaChart       = new Chart(areaChartCanvas);

        var areaChartData = {
            labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: datasets
        };

        var areaChartOptions = {
            //Boolean - If we should show the scale at all
            showScale               : true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines      : false,
            //String - Colour of the grid lines
            scaleGridLineColor      : 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth      : 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines  : true,
            //Boolean - Whether the line is curved between points
            bezierCurve             : true,
            //Number - Tension of the bezier curve between points
            bezierCurveTension      : 0.3,
            //Boolean - Whether to show a dot for each point
            pointDot                : false,
            //Number - Radius of each point dot in pixels
            pointDotRadius          : 4,
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth     : 1,
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius : 20,
            //Boolean - Whether to show a stroke for datasets
            datasetStroke           : true,
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth      : 2,
            //Boolean - Whether to fill the dataset with a color
            datasetFill             : true,
            //String - A legend template
            legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
            //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio     : true,
            //Boolean - whether to make the chart responsive to window resizing
            responsive              : true
        };

        //Create the line chart
        areaChart.Line(areaChartData, areaChartOptions);
    }

    $(function () {
        montarGrafico();


    });

    $("#areaChart").click(function(){
        montarGrafico();
    });

    function montarGrafico() {
        let datasets = [
            {
                label               : 'Electronics',
                fillColor           : 'rgba(210, 214, 222, 1)',
                strokeColor         : 'rgba(210, 214, 222, 1)',
                pointColor          : 'rgba(210, 214, 222, 1)',
                pointStrokeColor    : '#c1c7d1',
                pointHighlightFill  : '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data                : [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label               : 'Digital Goods',
                fillColor           : 'rgba(60,141,188,0.9)',
                strokeColor         : 'rgba(60,141,188,0.8)',
                pointColor          : '#3b8bba',
                pointStrokeColor    : 'rgba(60,141,188,1)',
                pointHighlightFill  : '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data                : [28, 48, 40, 19, 86, 27, 90]
            }
        ];


        let promises = [];
        promises.push(countDados());

        Promise.all(promises)
            .then((notPromises) => {
            let usedColors = [];
        let usedRgbas = []
        let datasets = notPromises.map((d) => {
            let rgbaColor = getRamdomRGBA(usedRgbas);
        let color = getRandomColor(usedColors);
        let dataSet = {
            fillColor           : rgbaColor,
            strokeColor         : rgbaColor,
            pointColor          : rgbaColor,
            pointStrokeColor    : color,
            pointHighlightFill  : color,
            pointHighlightStroke: rgbaColor,
            label: d.label,
            data: d.data
        };
        return dataSet
    });

        gerarGrafico(datasets);
    }).catch((err) => {
            console.log(err);
    });
    }


    function countDados() {
        return new Promise((onSucces, onError) => {
            $.get({url: "../veiculos/countQuantidadeVeiculosMes", contentType: 'application/x-www-form-urlencoded; charset=utf8'})
            .then(onSucces)
            .catch(onError);
        });
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
    function getRamdomRGBA(usedRgbas) {
        let o = Math.round, r = Math.random, s = 255;
        let opacity = r().toFixed(1);
        opacity = opacity === '0.0' ? '0.3' : opacity;
        let rgba = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + opacity + ')';
        if (usedRgbas.indexOf(rgba) > -1) {
            rgba =  getRamdomRGBA(usedRgbas);
        }
        usedRgbas.push(rgba);
        return rgba;
    }

})();