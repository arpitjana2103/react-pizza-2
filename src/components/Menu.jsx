import Pizza from "./Pizza";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
};

const menuHeaderStyle = {
    textTransform: "uppercase",
    padding: "1rem 0",
    borderTop: "3px solid #27272a",
    borderBottom: "3px solid #27272a",
    display: "inline-block",
    margin: "0 auto",
};

function Menu() {
    return (
        <>
            <h2 style={menuHeaderStyle}>Our Menu</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, possimus laudantium! Itaque unde ea impedit nemo porro
                veniam. Cupiditate quis dolorem quae, qui corrupti ipsam
                adipisci exercitationem ut dicta voluptas.
            </p>
            <div style={menuBoxStyle}>
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
            </div>
        </>
    );
}

export default Menu;
