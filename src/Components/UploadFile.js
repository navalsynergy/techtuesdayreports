import React,{useState} from 'react'
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Loader from 'react-loaders'


const UploadFile = () =>{
    
    const [newFile, SetNewFile] = useState([]); 
    let loader = <Loader type="ball-scale-ripple-multiple" />
    
    const fileChange = (event) => {
        SetNewFile( event.target.files[0] );
     };

    const onFormSubmit = () =>{
    console.log(newFile);
    // let formData;
    // formData.append("file", newFile);
    // axios.post('upload_file', formData, {
    //    headers: {
    //    'Content-Type': 'multipart/form-data'
    //   }
    // });
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
          <Button type="submit" color='teal' fluid size='large'>
            Upload
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid> 
    )
}

export default UploadFile;
