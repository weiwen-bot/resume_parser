const IndividualWE = {
    chart: {
        width: 675,
        height: 400,
    },
    title: {
        text: 'Overall Work Experience'
    },

    subtitle: {
        text: ''
    },
    credits: {
        enabled: false,
    },
    xAxis: {
        categories: ['Software Engineer', 'Data Engineer', 'Finance', 'Web Developer']
    },

    yAxis: {
        title: {
            text: 'No. of years'
        }
    },

    series: [{
        type: 'column',
        colorByPoint: true,
        name: 'No. of years',
        data: [2, 2.5, 1.3, 0.8],
        showInLegend: false,
    }]

};

export default IndividualWE;