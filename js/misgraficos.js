/* Script de las gráficas */

function draw(){

	var ctx1 = document.getElementById("graf").getContext("2d");
    var grafico = new Chart(ctx1).Bar(datosBarras,opcionesBarras);
    
  	legend(document.getElementById("leyenda"), datosBarras);
    
    var ctx2 = document.getElementById("espGraf").getContext("2d");
    var espGrafico = new Chart(ctx2).Pie(datosESP,opcionesBarras);
 
    legend(document.getElementById("leyendaESP"), datosESP);

};

var datosBarras = {
    labels: ["Comedia", "Acción", "Romance", "Drama", "Sci-fi", "Gore"],
    datasets:[
        {
            label: "Europa",
            fillColor: "#01579b",
            strokeColor: "rgba(0,0,0,0)",
            data: [400, 450, 375, 123, 221, 90]
        },
		{
            label: "América",
            fillColor: "#b71c1c",
            strokeColor: "rgba(0,0,0,0)",
            data: [654, 234, 464, 789, 687, 445]
        },
		{
            label: "Asia",
            fillColor: "#fdd835",
            strokeColor: "rgba(0,0,0,0)",
            data: [500, 300, 550, 726, 600, 400]
        },
		{
            label: "África",
            fillColor: "#6d4c41",
            strokeColor: "rgba(0,0,0,0)",
            data: [43, 12, 43, 76, 55, 45]
        },
		{
            label: "Oceanía",
            fillColor: "#558b2f",
            strokeColor: "rgba(0,0,0,0)",
            data: [123, 78, 131, 346, 233, 165]
        }
    ]
};

var datosESP = [
    {
        value: 20,
        color:"#558b2f",
        highlight: "lime",
        label: "Comedia"
    },
    {
        value: 25,
        color:"darkmagenta",
        highlight: "purple",
        label: "Accion"
    },
    {
        value: 25,
        color:"#b71c1c",
        highlight: "red",
        label: "Romance"
    },
    {
        value: 5,
        color:"#1a237e",
        highlight: "blue",
        label: "Drama"
    },
    {
        value: 15,
        color:"#0097a7",
        highlight: "turquoise",
        label: "Sci-fi"
    },
	{
        value: 10,
        color:"gold",
        highlight: "yellow",
        label: "Gore"
    }
];

var opcionesBarras ={
   //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};




