import './Desk3.css';
import Maps from "./googleMaps";


function DescComp(props) {

    return (
        <div className="Description">
              <h1 className="namamakan">{props.name}</h1>
            <div className="bgcoba">
                <div className="row align-items-start">
                    <div className="col-md-5">
                        <img src={props.link} alt={"gambar " + props.name} className="gambar"></img>
                    </div>
                    <div className="col-md-6">
                        <p className="tulisan">{props.desc}</p>
                    </div>
                </div>
                <h2><center>Tempat Makan Rekomendasi</  center></h2>
                <div className="maps d-flex justify-content-center align-items-center pb-5">
                     <Maps longLat = {props.longLat}/>
                </div>
            </div>
        </div>
    );
}

export default DescComp;
