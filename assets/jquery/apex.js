// echart 
var options = {
  series: [{
    name: 'Total Collections',
    data: [89, 40, 28, 51, 42, 19, 60]
  }, {
    name: 'Total Earnings',
    data: [0, 32, 61, 32, 34, 52, 41]
  }],
  chart: {
    height: '100%',
    type: 'area',
    foreColor: '#aaaaaa'
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: ['blue', 'red'],
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Income',
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '22px',
      fontWeight: 'bold',
      fontFamily: undefined,
    },
  },
  xaxis: {
    type: 'Days',
    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

  },
  yaxis: {
    type: 'Income',
    categories: ["0", "10", "20", "30", "40", "50", "100"]
  }
};

var chart = new ApexCharts(document.querySelector("#echart"), options);
chart.render();


// expchart
var options = {
  series: [{
    name: 'Rent',
    data: [76, 91, 114, 94]
  }, {
    name: 'Cash Expense',
    data: [35, 41, 36, 26]
  }],
  chart: {
    type: 'bar',
    height: '100%',
    foreColor: '#aaaaaa',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  title: {
    text: 'Expenses',
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '22px',
      fontWeight: 'bold',
      fontFamily: undefined,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['jan', 'Feb', 'Mar', 'Apr'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    colors: ['#dfff00', '#ca2c92'],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#expchart"), options);
chart.render();


var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// nutrition
var options = {
  series: [
    {
      name: "",
      data: [200, 330, 548, 740, 880, 990, 1100, 1380],
    },
  ],
  chart: {
    type: 'bar',
    height: '100%',
    foreColor: '#aaaaaa',
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    '#624cab',
    '#8b3103',
    '#355e3b',
    '#36311f',
    '#008080',
    '#5cf64a',
    '#472c4c',
    '#9F0909',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Diet Guide',
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '22px',
      fontWeight: 'bold',
      fontFamily: undefined,
    },
  },
  xaxis: {
    categories: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
  },
  legend: {
    show: true,
  },
};

var chart = new ApexCharts(document.querySelector("#nut"), options);
chart.render();




