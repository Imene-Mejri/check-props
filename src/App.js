
import './App.css';
import Profile1 from './profile/Profile1';




function App() {
  const person = 
    {
      fullName:'kaies',
      Bio: 56,
      profession: 'devloper',
      img:'/images/pic1.jpg',
      age:30,
    }
  
  
console.log (person)
 
 const handleName = (fullName) => alert(`Hi it 's my name : ${person.fullName}`);




  return (
    <div className="App">
      <Profile1  fullName={person.fullName} Bio={person.Bio}  profession={person.profession} age={person.age} img={person.img} handleName={handleName}/>
    </div>
  );
}

export default App;
