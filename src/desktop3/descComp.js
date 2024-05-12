import './Desk3.css';

function DescComp(props) {

    return (
        <div className="Description d-flex flex-column">
            <h1>{props.name}</h1>
            <img src={props.link} alt={"gambar " + props.name} className="gambar"></img>
            <p>{props.desc}</p>
        </div>
    );
}

export default DescComp;