'use strict';

var getData = function getData() {
  return {
    title: '2016',
    dataArray: [{ date: '1 Jan 2015', value: 20.01 }, { date: '15 Jan 2015', value: 30.13 }, { date: '1 Feb 2015', value: 25.51 }, { date: '15 Feb 2015', value: 50.15 }, { date: '1 Mar 2015', value: 60.10 }, { date: '15 Mar 2015', value: 70 }, { date: '1 Apr 2015', value: 79.66 }, { date: '15 Apr 2015', value: 20.13 }, { date: '1 May 2015', value: 45.1 }, { date: '15 May 2015', value: 10.98 }, { date: '1 June 2015', value: 15.66 }, { date: '15 June 2015', value: 0 }, { date: '1 July 2015', value: 60.87 }, { date: '15 July 2015', value: 50.51 }, { date: '1 Aug 2015', value: 25.66 }, { date: '15 Aug 2015', value: 50.81 }, { date: '1 Sept 2015', value: 60.55 }, { date: '15 Sept 2015', value: 70.11 }, { date: '1 Oct 2015', value: 80 }, { date: '15 Oct 2015', value: 20.9 }, { date: '1 Nov 2015', value: 45.66 }, { date: '15 Nov 2015', value: 10.1 }, { date: '1 Dec 2015', value: 15.62 }, { date: '15 Dec 2015', value: 0.01 }]
  };
};

var data = getData();

var height = 250;
var width = 510;

var graphValues = data.dataArray;
var title = data.title;

var AxisYWidth = 30;

ReactDOM.render(React.createElement(App, {
  height: height,
  width: width,
  title: title,
  graphValues: graphValues,
  AxisYWidth: AxisYWidth
}), document.getElementById('root'));