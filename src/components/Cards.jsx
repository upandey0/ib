
const Cards = ({icon, title,description}) => {
  return (
    <div className="card">
    <div className="card-icon m-2 ">{icon}</div>
    <h3 className="card-title m-2 font-bold">{title}</h3>
    <p className="card-description m-2">{description}</p>
  </div>
  )
}

export default Cards
