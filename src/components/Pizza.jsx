import pizzaData from "../data/data";

const cardStyle = {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
};

const imgStyle = {
    height: "9rem",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};

function Pizza(props) {
    const { name, ingredients, price, photoName, soldOut } = props.pizzaData;

    return (
        <div style={cardStyle}>
            <div>
                <img style={imgStyle} src={`./${photoName}`} alt={`${name}`} />
            </div>
            <div style={detailsStyle}>
                <p>{name}</p>
                <p>{ingredients}</p>
                <p style={{ marginTop: "auto" }}>$ {price}</p>
            </div>
        </div>
    );
}

export default Pizza;
