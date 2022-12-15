import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41 ],
      labels: ['A', 'B', 'C']
    }
  }

  render() {

    return (
      <>
      <div className='d-flex justify-content-center'>
      <div className="donut" style={{marginTop:'-20px'}}>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="280" style={{marginBottom:'15px'}} />
      </div>
      </div>
      </>
    );
  }
}

export default Donut;