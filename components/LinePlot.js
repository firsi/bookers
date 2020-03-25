import { Chart, Tooltip, Axis, Line} from 'viser-react';


const scale = [{
  dataKey: 'value',
  min: 0,
  tickInterval: 2,
},{
  dataKey: 'label',
  min: 0,
  max: 1,
}];
const LinePlot = ({data}) => {
    
    return(
      <Chart forceFit height={300} data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Line position="label*value" />
        
      </Chart>
    )
}

export default LinePlot;