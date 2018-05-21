$(function(){
// Build the chart
var mychart=Highcharts.chart('stacked', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Statistik Berdasarkan Hari'
    },
    xAxis: {
        categories: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis',"Jum'at",'Sabtu']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Jumlah <i>post</i> Instagram'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'Post'
        }
    },
    series: [{
        name: 'Air Terjun',
        data: [113,120,69,72,85,66,91]
    }, {
        name: 'Bukit atau Gunung',
        data: [299,280,282,252,241,195,223]
    }, {
        name: 'Desa Wisata',
        data: [34,25,23,19,27,35,28]
    }, {
        name: 'Goa',
        data: [310,295,249,247,263,254,344]
    }, {
        name: 'Hutan atau Kebun',
        data: [46,53,62,40,55,46,48]
    }, {
        name: "Pantai",
        data: [2750,3044,2655,2369,2310,2103,2330]
    }, {
        name: 'Telaga atau Waduk',
        data: [148,151,115,113,87,77,103]
    }, {
        name: 'Wisata Lain',
        data: [162,122,142,162,135,117,136]
    }]
});
});