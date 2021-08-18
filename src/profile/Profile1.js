
import PropTypes from "prop-types";


const style = {
    fontSize: '50px',
    color: 'blue',

}

const Profil =(props)=>{
    const{fullName, Bio, profession , handleName,age,img} = props;


    return (
        <div className='style'>
            <button style={style} onClick={handleName} >name</button>
            <h1> {fullName}</h1>
            <h1> {Bio}</h1>
            <h1> {profession}</h1>
            <h1> {age}</h1>
            <img src={img} />
        </div>
    )
}


Profil.defaultProps = {
    fullName: 'UNKNOWN', Bio: 'UNKNOWN', profession: 'UNKNOWN',
    age: 'UNKNOWN'
}

 Profil.propTypes = {
    
        fullName: PropTypes.string.isRequired,
        bio: PropTypes.string,
        profession: PropTypes.func,
        handleName: PropTypes.func.isRequired,
        age:PropTypes.number,
    
}

export default Profil;