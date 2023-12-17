$(document).ready(function () {
  $('.fa-bars-staggered').click(function () {
    $('aside').toggleClass('w-80px');
    $('header').toggleClass('ml-80px');
    $('main').toggleClass('ml-80px');
    $('.logo-img').toggleClass('d-none');
    $('.fa-bars-staggered').toggleClass('fa-xmark');
    $('.nav-title').toggleClass('d-none');
    $('.fa-chevron-right').toggleClass('d-none');
  });
  $('.profile').click(function () {
    $(this).children('.admin-list').slideToggle(500);
  });
  $('.language').click(function () {
    $(this).children('.lang-list').slideToggle(500);
  });
  $('.nav-list').click(function () {
    $(this).children('.dropdown').slideToggle(500);
    $('.dropdown').not($(this).children()).slideUp(500);
  });
  $('.sm-screen').click(function () {
    $('.h-right').slideToggle('2000');
  });
  $('.fa-bars').click(function () {
    $('aside').toggle('2000');
  });
  // modeswitch
  $('.fa-cloud-moon').click(function () {
    $(this).hide();
    $('.fa-sun-plant-wilt').show();
    $(':root').css('--white', '#121212');
    $(':root').css('--black', '#ffffffba');
    $(':root').css('--bgprime', '#000000');
    $(':root').css('--primary', '#121212');
    $(':root').css('--icnblue1', '#ffffffba');
    // lightshades
    $(':root').css('--lightred', '#4c1a1a');
    $(':root').css('--lightblu', '#0e293f');
    $(':root').css('--lightorng', '#472c10');
    $(':root').css('--limegreen', '#0b3b20');
  });
  $('.fa-sun-plant-wilt').click(function () {
    $(this).hide();
    $('.fa-cloud-moon').show();
    $(':root').css('--white', '#ffffff');
    $(':root').css('--black', '#000000');
    $(':root').css('--bgprime', '#f0f1f3');
    $(':root').css('--primary', '#042954');
    $(':root').css('--icnblue1', '#042954');
    // lightshades
    $(':root').css('--lightred', '#FFEAEA');
    $(':root').css('--lightblu', '#E1F1FF');
    $(':root').css('--lightorng', '#FFF2D8');
    $(':root').css('--limegreen', '#D1F3E0');
  });




});


// counter js 
$(document).ready(function () {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 10);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

// calender js 
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

// mapjs
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("bchart", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_india2019High;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(0).brighten(1),
  min: chart.colors.getIndex(1).brighten(0.3),
  // logarithmic: true
  // "min": am4core.color("#ffd7b1"), 
});


// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = [
  {
    id: "IN-JK",
    value: 10
  },
  {
    id: "IN-MH",
    value: 12
  },
  {
    id: "IN-UP",
    value: 10
  },
  {
    id: "US-AR",
    value: 13
  },
  {
    id: "IN-RJ",
    value: 30
  },
  {
    id: "IN-AP",
    value: 40
  },
  {
    id: "IN-MP",
    value: 90
  },
  {
    id: "IN-TN",
    value: 40
  },
  {
    id: "IN-JH",
    value: 3
  },
  {
    id: "IN-WB",
    value: 0
  },
  {
    id: "IN-GJ",
    value: 0
  },
  {
    id: "IN-BR",
    value: 0
  },
  {
    id: "IN-TG",
    value: 0
  },
  {
    id: "IN-GA",
    value: 0
  },
  {
    id: "IN-DN",
    value: 0
  },
  {
    id: "IN-DL",
    value: 0
  },
  {
    id: "IN-DD",
    value: 0
  },
  {
    id: "IN-CH",
    value: 0
  },
  {
    id: "IN-CT",
    value: 0
  },
  {
    id: "IN-AS",
    value: 0
  },
  {
    id: "IN-AR",
    value: 0
  },
  {
    id: "IN-AN",
    value: 0
  },
  {
    id: "IN-KA",
    value: 0
  },
  {
    id: "IN-KL",
    value: 0
  },
  {
    id: "IN-OR",
    value: 0
  },
  {
    id: "IN-SK",
    value: 0
  },
  {
    id: "IN-HP",
    value: 15
  },
  {
    id: "IN-PB",
    value: 14
  },
  {
    id: "IN-HR",
    value: 13
  },
  {
    id: "IN-UT",
    value: 12
  },
  {
    id: "IN-LK",
    value: 12
  },
  {
    id: "IN-MN",
    value: 5
  },
  {
    id: "IN-TR",
    value: 4
  },
  {
    id: "IN-MZ",
    value: 3
  },
  {
    id: "IN-NL",
    value: 2
  },
  {
    id: "IN-ML",
    value: 1
  }
];

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#ff7d01");



