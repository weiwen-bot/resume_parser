const JobRoleEL = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Education Level',
        colorByPoint: true,
        data: [{
            name: 'Master',
            y: 55,
            sliced: true,
            selected: true
        }, {
            name: 'Bachelor',
            y: 30
        }, {
            name: 'PHP',
            y: 10
        }, {
            name: 'Diploma',
            y: 5
        }]
    }]
};

export default JobRoleEL;