$(function(){
// Build the chart
var mychart=Highcharts.chart('pie', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Presentase Data Berdasarkan Tipe Wisata'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Presentase',
    colorByPoint: true,
    data: [{
      name: 'Pantai',
      y: 72.50020642,
      sliced: true,
      selected: true
    },{
      name: 'Air Terjun',
      y: 2.543142598,
    }, {
      name: 'Bukit atau Gunung',
      y: 7.315663446
	}, {
      name: 'Desa Wisata',
      y: 0.788539344
    }, {
      name: 'Goa',
      y: 8.100074313
    }, {
      name: 'Hutan atau Kebun',
      y: 1.444967385
    }, {
      name: 'Telaga atau Waduk',
      y: 3.278011725
    }, {
      name: 'Wisata Lain',
      y: 4.029394765
    }]
  }]
});
});