import React from 'react'
import { Container,Table, } from 'react-bootstrap';

interface IProps {
    
    council : {
        councilname: string,
    }
    club1 : {
        clubname: string,
        clubsec: string,
    }
    club2 : {
        clubname: string,
        clubsec: string,
    }
    club3 : {
        clubname: string,
        clubsec: string,
    }
    // club4 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club5 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club6 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club6 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club3 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club7 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club8 : {
    //     clubname: string,
    //     clubsec: string,
    // }
    // club9 : {
    //     clubname: string,
    //     clubsec: string,
    // }
  }


const Clubsndetails = (prop : IProps) => {
    return (
        <Container className="my-5">
            <div className="my-5">
        <h3>{prop.council.councilname} Clubs Info.</h3>
      </div>
        <div>
                <Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>{prop.council.councilname} Clubs</th>
      <th>Club Secretary</th>
      <th>Club Members</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{prop.club1.clubname}</td>
      <td>{prop.club1.clubsec}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>{prop.club2.clubname}</td>
      <td>{prop.club2.clubsec}</td>
      <td>@fat</td>
    </tr>
    
    <tr>
      <td>{prop.club3.clubname}</td>
      <td>{prop.club3.clubname}</td>
      <td>{prop.club3.clubsec}</td>
      <td>{prop.club3.clubname}</td>
    </tr>
    
    {/* <tr>
      <td>4</td>
      <td>Larry thne Bird</td>
      <td>@twitter</td>
      <td>smmlsc</td>
    </tr> */}
  </tbody>
</Table>



        </div>
        </Container>
    )
}


export default Clubsndetails