import { Chart, Tooltip, Axis,  Coord, Pie, Legend } from 'viser-react';


  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];
  
const PiePlot = ({data}) => {
    
    return(
      <Chart forceFit height={300} data={data} scale={scale}>
        <Tooltip showTitle={false}/>
        <Axis />
        <Legend dataKey="item" />
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Pie position="percent" color="item" style={{ stroke: '#fff', lineWidth: 1 }}
          label={['percent', {
            formatter: (val, item) => {
              return  val ;
            }
          }]}
        />
        
      </Chart>
    )
}

export default PiePlot;