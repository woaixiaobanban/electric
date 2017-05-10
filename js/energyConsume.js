/**
 * Created by BanTing on 2017/4/11.
 */
var dchart,wchart,mchart,ychart,pchart;
var wpchart,mpchart,ypchart;
$(document).ready(function () {
    /*---查看天---*/
})
function eSearch() {
    var roomId=$("#roomId").find("option:selected").val();
    $.ajax({
        type:'get',
        dataType:'json',
        data:{roomId:roomId},
        url:'../data.json',
        success:function (data) {
            /*-----日用电量----*/
            dchart = {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                exporting: {
                    enabled: false
                },
                colors:['#41C5BE'],
                title: {
                    text: '日用电量',
                    style: {
                        fontWeight: 'bold',
                        fontSize:'14px'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'center',
                    verticalAlign: 'top',
                    x:240,
                    y:10,
                    borderWidth: 0
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    tickInterval:2,
                    title: {
                        text: '能耗(KW/h)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;font-size: 13px">{series.name}: </td>' +
                    '<td style="padding:0"><b style="font-size:13px">{point.y:.1f} KW/h</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function(event) {
                                $("#result-two").html("<div style='text-align: center;padding-top: 5px'><span>" +
                                    "时间:</span>"+event.point.category+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能耗: '+event.point.y+"KW/h</div>");
                            }
                        }
                    }
                },
                series: [{
                    name: '能耗',
                    data: []
                }]
            };
            dchart.xAxis.categories = data.dchart.time; //把categories赋值给xAxis
            dchart.series[0].data = data.dchart.altitude; //把数值赋值给data]
            $('#dContainer').highcharts(dchart);
            /*-------周用电量-------*/
            wchart = {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                exporting: {
                    enabled: false
                },
                colors:['#41C5BE'],
                title: {
                    text: '周用电量',
                    style: {
                        fontWeight: 'bold',
                        fontSize:'14px'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'center',
                    verticalAlign: 'top',
                    x:240,
                    y:10,
                    borderWidth: 0
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    tickInterval:2,
                    title: {
                        text: '能耗(KW/h)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;font-size: 13px">{series.name}: </td>' +
                    '<td style="padding:0"><b style="font-size:13px">{point.y:.1f} KW/h</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function(event) {
                                $("#result-two").html("<div style='text-align: center;padding-top: 5px'><span>" +
                                    "时间:</span>"+event.point.category+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能耗: '+event.point.y+"KW/h</div>");
                            }
                        }
                    }
                },
                series: [{
                    name: '能耗',
                    data: []
                }]
            };
            wchart.xAxis.categories = data.wchart.time; //把categories赋值给xAxis
            wchart.series[0].data = data.wchart.altitude; //把数值赋值给data]
            $('#wContainer').highcharts(wchart);
            /*--------月用电量-------*/
            mchart = {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                colors:['#41C5BE'],
                exporting: {
                    enabled: false
                },
                title: {
                    text: '月用电量',
                    style: {
                        fontWeight: 'bold',
                        fontSize:'14px'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'center',
                    verticalAlign: 'top',
                    x:240,
                    y:10,
                    borderWidth: 0
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    tickInterval:2,
                    title: {
                        text: '能耗(KW/h)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;font-size: 13px">{series.name}: </td>' +
                    '<td style="padding:0"><b style="font-size:13px">{point.y:.1f} KW/h</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function(event) {
                                $("#result-two").html("<div style='text-align: center;padding-top: 5px'><span>" +
                                    "时间:</span>"+event.point.category+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能耗: '+event.point.y+"KW/h</div>");
                            }
                        }
                    }
                },
                series: [{
                    name: '能耗',
                    data: []
                }]
            };
            mchart.xAxis.categories = data.mchart.time; //把categories赋值给xAxis
            mchart.series[0].data = data.mchart.altitude; //把数值赋值给data]
            $('#mContainer').highcharts(mchart);
            /*------年用电量-----*/
            ychart = {
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                exporting: {
                    enabled: false
                },
                colors:['#41C5BE'],
                title: {
                    text: '年用电量',
                    style: {
                        fontWeight: 'bold',
                        fontSize:'14px'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'center',
                    verticalAlign: 'top',
                    x:240,
                    y:10,
                    borderWidth: 0
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    tickInterval:2,
                    title: {
                        text: '能耗(KW/h)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:13px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;font-size: 13px">{series.name}: </td>' +
                    '<td style="padding:0"><b style="font-size:13px">{point.y:.1f} KW/h</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        cursor: 'pointer',
                        events: {
                            click: function(event) {
                                $("#result-two").html("<div style='text-align: center;padding-top: 5px'><span>" +
                                    "时间:</span>"+event.point.category+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能耗: '+event.point.y+"KW/h</div>");
                            }
                        }
                    }
                },
                series: [{
                    name: '能耗',
                    data: []
                }]
            };
            ychart.xAxis.categories = data.ychart.time; //把categories赋值给xAxis
            ychart.series[0].data = data.ychart.altitude; //把数值赋值给data]
            $('#yContainer').highcharts(ychart);
            /*-----饼状图----*/
            pchart={
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                title: {
                    text: '电器当日用电量占比'
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        formatter: function() {
                            //Highcharts.numberFormat(this.percentage,2)格式化数字，保留2位精度
                            return '<b>'+ this.point.name +'</b>: '+Highcharts.numberFormat(this.percentage,2) +' %';
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '用电量占比',
                    data: [
                    ]
                }]
            };
            var browses=new Array();
            $.each(data.ddatas,function(i,item){
                /*------表格填充-----*/
                $("table[id='dConsume'] tbody").html("").append("<tr><td>"+item.name+"</td>" +
                    "<td>"+item.energy+"</td>" +
                    "<td>"+Number(0.8*item.energy).toFixed(2)+"</td></tr>");
                browses.push([item.name,item.percent]);
            });
            alert("----");
            pchart.series[0].data = browses;
            $('#pContainer').highcharts(pchart);
            /*----周饼状图----*/
            wpchart={
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                title: {
                    text: '电器周用电量占比'
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        formatter: function() {
                            //Highcharts.numberFormat(this.percentage,2)格式化数字，保留2位精度
                            return '<b>'+ this.point.name +'</b>: '+Highcharts.numberFormat(this.percentage,2) +' %';
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '用电量占比',
                    data: [
                    ]
                }]
            };
            var wbrowses=new Array();
            $.each(data.wdatas,function(i,item){
                /*------表格填充-----*/
                $("table[id='wConsume'] tbody").append("<tr><td>"+item.name+"</td>" +
                    "<td>"+item.energy+"</td>" +
                    "<td>"+Number(0.8*item.energy).toFixed(2)+"</td></tr>")
                wbrowses.push([item.name,item.percent])
            });
            wpchart.series[0].data = wbrowses;
            $('#wpContainer').highcharts(wpchart);
            /*------月饼状图-----*/
            mpchart={
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                title: {
                    text: '电器月用电量占比'
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        formatter: function() {
                            //Highcharts.numberFormat(this.percentage,2)格式化数字，保留2位精度
                            return '<b>'+ this.point.name +'</b>: '+Highcharts.numberFormat(this.percentage,2) +' %';
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '用电量占比',
                    data: [
                    ]
                }]
            };
            var mbrowses=new Array();
            $.each(data.mdatas,function(i,item){
                /*------表格填充-----*/
                $("table[id='mConsume'] tbody").append("<tr><td>"+item.name+"</td>" +
                    "<td>"+item.energy+"</td>" +
                    "<td>"+Number(0.8*item.energy).toFixed(2)+"</td></tr>")
                mbrowses.push([item.name,item.percent])
            });
            mpchart.series[0].data = mbrowses;
            $('#mpContainer').highcharts(mpchart);
            /*----年饼状图-----*/
            ypchart={
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    text: '',
                    href: ''
                },
                title: {
                    text: '电器年用电量占比'
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        formatter: function() {
                            //Highcharts.numberFormat(this.percentage,2)格式化数字，保留2位精度
                            return '<b>'+ this.point.name +'</b>: '+Highcharts.numberFormat(this.percentage,2) +' %';
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '用电量占比',
                    data: [
                    ]
                }]
            };
            var ybrowses=new Array();
            $.each(data.ydatas,function(i,item){
                /*------表格填充-----*/
                $("table[id='yConsume'] tbody").append("<tr><td>"+item.name+"</td>" +
                    "<td>"+item.energy+"</td>" +
                    "<td>"+Number(0.8*item.energy).toFixed(2)+"</td></tr>")
                ybrowses.push([item.name,item.percent])
            });
            ypchart.series[0].data = ybrowses;
            $('#ypContainer').highcharts(ypchart);

        }
    })
}
