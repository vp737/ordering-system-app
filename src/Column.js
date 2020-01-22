import React from "react";
import Card from "./Card";

export default ({
    column, 
    columnIndex,
    onMoveRight,
    onMoveLeft,
}) => (
    <div className="column">
        <p className="title">{column.name}</p>
        {column.cards.map((card, cardIndex) => (
        <Card
            key={cardIndex}
            cardIndex={cardIndex}
            card={card}
            canMoveLeft={columnIndex !== 0}
            canMoveRight={columnIndex !== 2}
            onMoveLeft = { () => onMoveLeft(cardIndex)}
            onMoveRight = { () => onMoveRight(cardIndex)}
         />
    ))}
    </div>
)