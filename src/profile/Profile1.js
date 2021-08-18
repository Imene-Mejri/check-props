
import PropTypes from 'prop-types';

const style = {
    fontSize: '50px',
    color: 'blue',

}

const Profil = ({ product, handleName }) => {


    return (
        <div className='style'>
            <button style={style} onClick={handleName} >name</button>
            <h1> {product.fullName}</h1>
            <h1> {product.Bio}</h1>
            <h1> {product.profession}</h1>
            <h1> {product.age}</h1>
            <img src={product.img} />
        </div>
    )
}

export default Profil;
Profil.defaultProps = {
    img: 'UNKNOWN', fullName: 'UNKNOWN', Bio: 'UNKNOWN', profession: 'UNKNOWN',
    age: 'UNKNOWN'
}
Profil.propTypes = {
    person: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        bio: PropTypes.string,
        profession: PropTypes.string,
        handleName: PropTypes.func,
        age:PropTypes.number,
    })
}

