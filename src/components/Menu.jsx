import Pizza from "./Pizza";

const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
};

function Menu() {
    return (
        <div>
            <h2>Our Menu</h2>
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
        </div>
    );
}

export default Menu;
