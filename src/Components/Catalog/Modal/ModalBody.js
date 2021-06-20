import './ModalBody.css';

function ModalBody ({id, image, title, price, description, handleClose}) {
    return (
        <div className={"Modal__body"}>
            <div className={"Product__showcase"}>
                <div className={"Product__showcase__price"}>
                    <ul>
                        <li>{price}</li>
                        <li>25$</li>
                        <li className={"Product__showcase__price--blue"}>41%(X)</li>
                    </ul>
                </div>
                <img  src={image} className={"Product__showcase__image"}/>
                <img  src={image} className={"Product__showcase__image--small"}/>
            </div>
            <div className={"Product__information"}>
                <div className={"Product__title"}>
                    <h2 className={"Product__information__title"}>{title}</h2>
                    <h3
                    className={"Close__button"}
                    onClick={handleClose}
                    >X</h3>
                </div>
                <h3 className={"Product__information__details"}>Product Details</h3>
                <p className={"Product__information__description"}>{description}</p>
            </div>
        </div>
    );
}

export  default ModalBody;


