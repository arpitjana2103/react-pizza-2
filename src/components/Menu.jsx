import Pizza from "./Pizza";

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
            <div>
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
