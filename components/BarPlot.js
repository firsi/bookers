import { Chart, Tooltip, Axis, Bar } from 'viser-react';

const scale = [{
  dataKey: 'value',
  tickInterval: 2,
}];

const BarPlot = ({data}) => {
  
      return (
        <Chart forceFit height={300} data={data} scale={scale}>
          <Tooltip />
          <Axis />
          <Bar position="label*value" />
        </Chart>
      );
    
}

export default BarPlot;



