import React from 'react';
import './styles.scss';

const Card = (props) => {
    const {numbers, changeNumber, first, second} = props;
    return (
        <>
            {numbers.map((item, i) => {
                return (
                    <div
                        onClick={(first === null || second === null)
                            ? (e) => changeNumber(item, i)
                            : undefined}
                        key={i}
                        className={!item.chosen
                            ? 'card'
                            : 'card card__active'
                        }>
                    <span
                        className={item.chosen === false && item.state === 'hide'
                            ? "card__number-hide"
                            : "card__number-show"
                        }
                    >
                        {item.count}
                    </span>
                    </div>
                )
            })}
        </>
    )
}

export default Card;