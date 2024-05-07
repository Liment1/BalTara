function DescComp(props) {

    return (
    <div>
        <div className="Description">
            <h1>{props.name}</h1>
            <img src={props.link} alt={"gambar " + props.name} className="gambar"></img>
            <p>{props.desc}</p>
        </div>
    </div>
    );
}

export default DescComp;