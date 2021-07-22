import "../result.css" ;
import { Pie } from 'react-chartjs-2';

const Result = () => {


const data = {
  labels: ['POOR', 'FAIR', 'GOOD', 'VERY GOOD', 'EXCELLENT'],
  datasets: [
    {
      label: 'Content Rating',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



    return(
        <div>
        <Pie data={data} />        
        <Pie data={data} />        
        <Pie data={data} />        
        </div>
    )
}

export default Result;