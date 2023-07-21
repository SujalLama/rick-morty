import PropTypes from 'prop-types';
export default function Character({character}) {
  return (
    <div className="col-3">
        <div className="card">
            <img src={character.image} alt={character.name} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">{character.name}</h3>
                <p>{`Origin: ${character.origin && character.origin.name}`}</p>
            </div>
        </div>
    </div>
  )
}

Character.propTypes = {
    character: PropTypes.objectOf({
        image: PropTypes.string, 
        name: PropTypes.string, 
        origin: PropTypes.objectOf({
            name: PropTypes.string
        }) 
    })

}