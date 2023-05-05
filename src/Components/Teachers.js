import Base from '../Base/Base'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//function
function Teachers({teachers, setTeachers}) {
   const history = useHistory();
    // delete functionality
    const deleteStudent = async (studId)=>{
      
      const response = await fetch(`https://6454e410a74f994b334bcd96.mockapi.io/teachers/${studId}`, {
         method:"DELETE",
      });

      const data = await response.json()
     if(data){
       const remainingTeachers = 
       teachers.filter((stud, idx)=> stud.id !== studId)
       setTeachers(remainingTeachers)
     }
    }

  
  return (
    <Base 
    title={"Teachers Dashboard"}
    description={"The page contains all teachers data"}
    >

         <div className='card-container'>
            {teachers.map((stud, idx)=>(
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
                     <Button variant="primary" onClick={()=>history.push(`/updateteachers/${stud.id}`)}>edit</Button> {" "}
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

export default Teachers