import Base from '../Base/Base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//function
function Students({students, setStudents}) {
   const history = useHistory();
    // delete functionality
    const deleteStudent = async (studId)=>{
      
      const response = await fetch(`https://644b33bc4bdbc0cc3a8ce28c.mockapi.io/users/${studId}`, {
         method:"DELETE",
      });

      const data = await response.json()
     if(data){
       const remainingStudents = 
       students.filter((stud, idx)=> stud.id !== studId)
       setStudents(remainingStudents)
     }
    }

  
  return (
    <Base 
    title={"Students Dashboard"}
    description={"The page contains all students data"}
    >

         <div className='card-container'>
            {students.map((stud, idx)=>(
                     <div key={idx}>
                      <div className='content'>
                      <Card style={{ width: '18rem' }}>
                      <Card.Body>
                      <Card.Text>
                     <h3>{stud.name}</h3>
                     <p>{stud.batch}</p>
                     <p>{stud.gender}</p>
                     <p>{stud.qualification}</p>
                     </Card.Text>
                     <Button variant="primary" onClick={()=>history.push(`/edit/${stud.id}`)}>edit</Button> {" "}
                     <Button variant='primary' onClick={()=>deleteStudent(stud.id)}>delete</Button>
                     </Card.Body>
                     </Card>
                     </div>

                     
                     
                     </div>
                    
            ))}
     </div>

    </Base>
  )
}

export default Students
