import './Card.css';

function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.openSpots > 0) {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className="card--image"
                src={props.coverImg} alt='#' />
            <div className="card--stats" >
                <img src=" https://cdn3.vectorstock.com/i/1000x1000/25/12/red-star-icon-image-vector-23002512.jpg" alt='#' className='card--star' />
                <span >{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount})</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div >
    );
}

export default Card;