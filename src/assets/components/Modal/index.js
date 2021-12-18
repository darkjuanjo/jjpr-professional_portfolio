import React from 'react';
import '../../css/modal.css';

const Modal = ({onClose, currentImage}) => {
  const { id, name, technology, description, category, type, github, deployed } = currentImage;

    return (
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <img src={require(`../../images/${id}.png`).default} alt={category}/>
            <p>{`Description: ${description}`}</p>
            <p>{`Technology: ${technology}`}</p>
            <p>Github: <a href={github}>{github}</a></p>
            <p>Deployed URL: <a href={deployed}>{deployed}</a></p>
            <button onClick={onClose} type="button">Close this modal</button>
        </div>
    </div>
    );
}

export default Modal;