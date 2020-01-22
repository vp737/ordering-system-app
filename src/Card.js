import React from 'react'

export default ({
    card, 
    canMoveLeft,
    canMoveRight,
    onMoveLeft,
    onMoveRight
}) => (
    <div className="card">
        <span>{card.name}</span><br />
        {canMoveLeft && <button className="card-btn-move" onClick={onMoveLeft}>&laquo;</button>}
        {canMoveRight && <button className="card-btn-move" onClick={onMoveRight}>&raquo;</button>}
    </div>
)