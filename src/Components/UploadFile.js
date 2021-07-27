import React,{useState} from 'react'
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Loader from 'react-loaders'
import { useHistory } from "react-router-dom";


const UploadFile = () =>{
    
    const [newFile, SetNewFile] = useState([]); 
    const [resultData, SetResultData] = useState([{"hello":"1"}]); 
    const [redirect, SetRedirect] = useState(false); 
    const history = useHistory();
    let loader = <Loader type="ball-scale-ripple-multiple" />

    const clickHandler = () => {
      
      // SetResultData([{"content_rating_score":{"excellent":8,"fair":1,"good":3,"poor":0,"very_good":6},"overall_rating_score":{"excellent":8,"fair":0,"good":3,"poor":0,"very_good":7},"overall_sentiment_score":{"negative":1,"neutral":0,"positive":17},"presenting_skills_rating_score":{"excellent":9,"fair":0,"good":2,"poor":0,"very_good":7},"total_reviews":18}])
      // setTimeout(function(){
        //   history.push({
          //     pathname:'/result',
          //     state:resultData
          //   })
          // },10000)
          let formData= new FormData();
          formData.append("file", newFile);
          axios.post('https://ttr-reports-generator.herokuapp.com/api/upload_csv_file', formData, {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response)=>{
            response.data ? SetResultData(response.data) : console.log("No data recd")
            SetRedirect(true)
    })
    .catch((err=>{
      console.log(err)
    }))

    }
    
    const clickHandler2 =  ()=>{
      history.push({
      pathname:'/result',
      state:resultData
    })
  }


    const fileChange = (event) => {
        SetNewFile( event.target.files[0] );
     };

    const onFormSubmit = () =>{
    console.log(newFile);
    }

    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Tech Tuesday Reviews Analysis
      </Header>
      <Form onSubmit={onFormSubmit} size='large'>
        <Segment stacked>
          {/* <Form.Input fluid icon='file' iconPosition='right' placeholder='Select File' /> */}
          <Form.Field>
            <label>Upload file</label>
            <input 
            id="file"
            type="file"
            onChange={fileChange}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
        </Form.Field>
          {/* <Button type="submit" color='teal' fluid size='large'> */}
          <Button onClick={clickHandler} color='teal' fluid size='large'>
            Upload
          </Button>
          <br/>
          <Button onClick={clickHandler2} color='teal' fluid size='large' disabled={!redirect}>
            Generate Result
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid> 
    )
}

export default UploadFile;
