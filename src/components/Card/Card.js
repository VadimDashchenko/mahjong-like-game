import React, {useState, useEffect} from 'react';
import './styles.scss';

const Card = (props) => {
    const {numbers, changeNumber, show, first, second} = props;
    const [selected, setSelected] = useState(false);
    useEffect(() => {

    }, [])
    return (
        <>
            {numbers.map((item, i) => (
                <div
                    onClick={(e) => changeNumber(item, i)}
                    key={i}
                    className='card'>
                    <span
                        className="card__number-show"
                    >
                        {item}
                    </span>
                </div>
            ))}
        </>
    )
}

export default Card;