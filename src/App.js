
import './App.css';
import Profile1 from './profile/Profile1';




function App() {
  const person = 
    {
      fullName:'kais',
      Bio: 56,
      profession: 'devloper',
      img:'/images/pic1.jpg',
      age:'',
    }
  
  
console.log (person)
 
 const handleName = (fullName) => alert(`Hi it 's my name : ${person.fullName}`);




  return (
    <div className="App">
      <Profile1 product={person} handleName={handleName}/>
    </div>
  );
}

export default App;
