import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons' 
function Card({card}){
    return (
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{card.tierName}</h5>
            <h6 className="card-price text-center">${card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
              card.features.map((feature,index)=>{
                  return feature.isDisabled?
                <li key={index} className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faXmark}/></span>{feature.featureName}</li>:
                 feature.isBold?
                 feature.isBoldFirstWordAlone?
                <li key={index}><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span><strong>{feature.featureName.split(" ")[0]} </strong>{feature.featureName.split(" ").splice(1,feature.featureName.split(" ").length-1).join(" ")}</li>:
                <li key={index}><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span><strong>{feature.featureName}</strong></li>:
                <li key={index}><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{feature.featureName}</li>
              })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card;