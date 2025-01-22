let humburgerBtn = document.querySelector('.displayHidden');
let displaySidebar = document.querySelector('.bgColor');

humburgerBtn.addEventListener("click", (e) => {
    displaySidebar.classList.toggle('show');
});

// Chart options
const baseChartOptions = {
    chart: {
        height: 100,
        type: "area",
        toolbar: { show: false },
    },
    stroke: { width: 3 },
    dataLabels: { enabled: false },
    grid: {
        show: false,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: false } },
    },
    xaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
        tickAmount: 0,
    },
    yaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        floating: true,
    },
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
};

// chart options
const chartOptions = [
    {
        elementId: "#totalCustomer",
        series: [
            { name: "Total Customers", data: [2, 10, 7, 17, 10, 14, 9, 5, 11] },
        ],
        fillColors: ['#F7B422'],
    },
    {
        elementId: "#totalOrders",
        series: [
            { name: "Total Orders", data: [2, 10, 7, 15, 10, 14, 9, 5, 2] },
        ],
        fillColors: ['#A682EF'],
    },
    {
        elementId: "#totalPending",
        series: [
            { name: "Total Pending", data: [15, 10, 14, 17, 13, 10, 7, 5, 10, 4] },
        ],
        fillColors: ['#1ABCB0'],
    },
    {
        elementId: "#totalDeliver",
        series: [
            { name: "Total Delivery", data: [15, 10, 14, 17, 13, 10, 7, 5, 10, 4] },
        ],
        fillColors: ['#EB61A5'],
    },
];

// Rendering all charts
chartOptions.forEach(option => {
    const chartConfig = {
        ...baseChartOptions,
        series: option.series,
        fill: {
            ...baseChartOptions.fill,
            colors: option.fillColors
        }
    };
    const chart = new ApexCharts(document.querySelector(option.elementId), chartConfig);
    chart.render();
});





var optionsMap = {
    series: [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 400,
    type: 'treemap'
  },

  colors: [
    '#3B93A5',
    '#F7B844',
    '#ff6347',
    '#EC3C65',
    '#00008b',
    '#C1F666',
    '#D43F97',
    '#1E5D8C',
    '#421243',
    '#7F94B0',
    '#EF6537',
    '#C0ADDB'
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  }
  };

  var chartMap = new ApexCharts(document.querySelector("#indiaMap"), optionsMap);
  chartMap.render();



// Circle Chart
var optionsCircle = {
    chart: {
        height: 150,
        type: 'radialBar'
    },
    series: [67], 
    colors: ['#1ABCB0'], 
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 10,
                size: '70%' 
            },
            dataLabels: {
                total: {
                    show: true,
                    label: '67%', 
                    fontSize: '30px',
                    color: '#111',
                },
                name: {
                    show: false, 
                },
                enabled: false, 
                value: {
                    color: '#111',
                    fontSize: '30px',
                    show: true, 
                }
            }
        }
    },
    annotations: {
        position: 'front',
        text: ''
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        lineCap: 'round',
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: function (value) {
                return value + ' %'; 
            }
        }
    }
};

var chartCircle = new ApexCharts(document.querySelector("#circleChart"), optionsCircle);
chartCircle.render();

// Adding event listeners to custom labels
document.querySelectorAll('.label').forEach(function (label) {

    label.addEventListener('mouseenter', function () {
        if (label.firstChild.classList.contains('borderColor')) {
            label.firstChild.classList.toggle('borderColor');
        } else {
            label.firstChild.classList.toggle('borderColor');
        }
        // label.firstChild.classList.add('borderColor');
        var value = label.getAttribute('data-value');
        chartCircle.updateSeries([parseInt(value)]);
        chartCircle.updateOptions({
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        total: {
                            label: value + '%',
                        }
                    }
                }
            }
        });
    });
    console.log(label);

    label.addEventListener('mouseleave', function () {
        if (label.firstChild.classList.contains('borderColor')) {
            label.firstChild.classList.toggle('borderColor');
        } else {
            label.firstChild.classList.toggle('borderColor');
        }
        // label.firstChild.classList.remove('borderColor');

        chartCircle.updateSeries([67]);
        chartCircle.updateOptions({
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        total: {
                            label: '67%',
                        }
                    }
                }
            }
        });
    });
});


// Pie Chart
var optionsPie = {
    chart: {
        height: 200,
        type: 'donut'
    },
    series: [60, 45, 25, 20],
    labels: ['Profits', 'Margin', 'Others', 'Lost'],
    colors: ['#F3B74C', '#7690E5', '#46CA83', '#E96559'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '60%'
            },
            expandOnClick: true,
        }
    }
}


var piechart = new ApexCharts(document.querySelector("#pieChart"), optionsPie);
piechart.render();


// Multiaxis Chart
var optionsMultiaxis = {
    chart: {
        height: 200,
        type: "line",
        stacked: false,
        toolbar: {
                        show: false,
                    }
    },
    click: undefined,
    
    dataLabels: {
        enabled: false
    },
    colors: ['#E96559', '#46CA83'],
    series: [

        {
            name: '$ 256.48',
            type: 'column',
            data: [4,5, 8, 9, 7, 9, 5]
        },
        {
            name: "$ 187.39",
            type: 'column',
            data: [4, 9, 7, 5, 5, 8, 4]
        }
    ],
    stroke: {
        width: [3, 3]
    },
    plotOptions: {
        bar: {
            columnWidth: "25%",
            hideZeroBarsWhenGrouped:true,
        }
    },
    xaxis: {
        categories: ['SUN', 'MON', "TUE", "WED", "THUR", "FRI", "SAT"]
    },
    yaxis: [
        {
            seriesName: 'Column A',
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false,
            }
        },
        {
            seriesName: 'Column A',
            show: false
        }
    ],
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    yaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        floating: true
    },
    tooltip: {
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: "left",
        offsetX: 0,
        offsetY: 15,
        fontSize: '12px',
        labels: {
            colors: ['#E96559', '#46CA83']
        },
        itemMargin: {
            horizontal: 40,
            vertical: 5,
        }
    }
};

var Multiaxischart = new ApexCharts(document.querySelector("#multiAxisChart"), optionsMultiaxis);

Multiaxischart.render();




