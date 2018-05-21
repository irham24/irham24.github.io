 $(function(){
var myChart = echarts.init(document.getElementById('pieechart'));

	var option = {
    title : {
        text: 'Statistik Berdasarkan Tipe Wisata',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Air Terjun','Bukit atau Gunung','Desa Wisata','Goa','Hutan atau Kebun','Pantai','Telaga atau Waduk','Wisata Lain']
    },
    series : [
        {
            name: 'Jumlah Post Instagram',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:616, name:'Air Terjun'},
                {value:1772, name:'Bukit atau Gunung'},
                {value:191, name:'Desa Wisata'},
                {value:1962, name:'Goa'},
                {value:350, name:'Hutan atau Kebun'},
                {value:17561, name:'Pantai'},
                {value:794, name:'Telaga atau Waduk'},
                {value:976, name:'Wisata Lain'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
        // use configuration item and data specified to show chart
        myChart.setOption(option);
});