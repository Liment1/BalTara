import './Desk3.css';
import  DescComp from './descComp';
import foodList from './components/foodList';
import {useState} from "react";

function Desk3(a) {
  const [index, setIndx] = useState(a.indx);
  function subIndx(){
      setIndx((index - 1 + 12) % 12);
  }

  function addIndx(){
    setIndx((index + 1) % 12);
  }


  const currFood = foodList.find(food => {
    return food.id === index;
  });

    "use strict";

    const CONFIGURATION = {
        "ctaTitle": "Checkout",
        "mapOptions": {"center":{"lat":37.4221,"lng":-122.0841},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":11,"zoomControl":true,"maxZoom":22,"mapId":""},
        "mapsApiKey": "AIzaSyDelBTV6rpLRtOD4IJ0FwkHPUTSjSl4yO8",
        "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":true,"ctaControl":false}
    };

    const SHORT_NAME_ADDRESS_COMPONENT_TYPES =
        new Set(['street_number', 'administrative_area_level_1', 'postal_code']);

    const ADDRESS_COMPONENT_TYPES_IN_FORM = [
        'location',
        'locality',
        'administrative_area_level_1',
        'postal_code',
        'country',
    ];

    function getFormInputElement(componentType) {
        return document.getElementById(`${componentType}-input`);
    }

    function fillInAddress(place) {
        function getComponentName(componentType) {
            for (const component of place.address_components || []) {
                if (component.types[0] === componentType) {
                    return SHORT_NAME_ADDRESS_COMPONENT_TYPES.has(componentType) ?
                        component.short_name :
                        component.long_name;
                }
            }
            return '';
        }

        function getComponentText(componentType) {
            return (componentType === 'location') ?
                `${getComponentName('street_number')} ${getComponentName('route')}` :
                getComponentName(componentType);
        }

        for (const componentType of ADDRESS_COMPONENT_TYPES_IN_FORM) {
            getFormInputElement(componentType).value = getComponentText(componentType);
        }
    }

    function renderAddress(place, map, marker) {
        if (place.geometry && place.geometry.location) {
            map.setCenter(place.geometry.location);
            marker.position = place.geometry.location;
        } else {
            marker.position = null;
        }
    }

    async function initMap() {
        const {Map} = google.maps;
        const {AdvancedMarkerElement} = google.maps.marker;
        const {Autocomplete} = google.maps.places;

        const mapOptions = CONFIGURATION.mapOptions;
        mapOptions.mapId = mapOptions.mapId || 'DEMO_MAP_ID';
        mapOptions.center = mapOptions.center || {lat: 37.4221, lng: -122.0841};

        const map = new Map(document.getElementById('gmp-map'), mapOptions);
        const marker = new AdvancedMarkerElement({map});
        const autocomplete = new Autocomplete(getFormInputElement('location'), {
            fields: ['address_components', 'geometry', 'name'],
            types: ['address'],
        });

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert(`No details available for input: '${place.name}'`);
                return;
            }
            renderAddress(place, map, marker);
            fillInAddress(place);
        });
    }

  return (
      <div>
          <DescComp name={currFood.name} link={currFood.link} desc={currFood.description}/>
          <button className="btn btn-support" onClick={subIndx}>Prev</button>
          <button className="btn btn-support" onClick={addIndx}>Next</button>

          <div className="card-container">
              <div className="panel">
                  <div>
                      <img className="sb-title-icon"
                           src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg" alt=""/>
                      <span className="sb-title">Address Selection</span>
                  </div>
                  <input type="text" placeholder="Address" id="location-input"/>
                  <input type="text" placeholder="Apt, Suite, etc (optional)"/>
                  <input type="text" placeholder="City" id="locality-input"/>
                  <div className="half-input-container">
                      <input type="text" className="half-input" placeholder="State/Province"
                             id="administrative_area_level_1-input"/>
                      <input type="text" className="half-input" placeholder="Zip/Postal code" id="postal_code-input"/>
                  </div>
                  <input type="text" placeholder="Country" id="country-input"/>
              </div>
              <div className="map" id="gmp-map"></div>
          </div>
          <script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDelBTV6rpLRtOD4IJ0FwkHPUTSjSl4yO8&libraries=places,marker&callback=initMap&solution_channel=GMP_QB_addressselection_v2_cAB"
              async defer></script>
      </div>
  );
}

export default Desk3;
