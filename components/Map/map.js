import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "../../styles/Home.module.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";
import { polyline } from "leaflet";

export default function Map() {

    //coordinates
  const waterfront = [49.28594, -123.11129];
  const burrard = [49.285581150633966, -123.12012245876285];
  const granville = [49.28276795358473, -123.1164699145821];
  const stadium = [49.28010484687972, -123.11012142014103];
  const main = [49.273374980784865, -123.10037145876296];
  const commercial = [49.262721001091556, -123.06927941643552];
  const nanaimo = [49.24844626535717, -123.05598167410812];
  const avenue = [49.24436337925635, -123.04537402992739];
  const joyce = [49.23855530902799, -123.0317256145831];
  const patterson = [49.22991271599505, -123.01265107225555];
  const metro = [49.22593989446889, -123.00385127225569];
  const oak = [49.220193228996386, -122.98845204229738];
  const edmonds = [49.21254265709066, -122.95914504342];
  const street = [49.200068725477024, -122.94922489130668];
  const nw = [49.20159918383558, -122.91263972992837];
  const columbia = [49.204943945073374, -122.90607708574763];
  const scott = [49.204575904842045, -122.87402738018886];
  const gateway = [49.1991136014707, -122.85066387225632];
  const surrey = [49.18971392944762, -122.84792071458409];
  const kg = [49.1829310367517, -122.84473292807587];

  //production way route
  const sapperton = [49.224860238697396, -122.88949270294468];
  const braid = [49.23268213068468, -122.88456287225554];
  const lougheed = [49.24875892482227, -122.89717730665];
  const pway = [49.25367827613695, -122.91868207173422];

  const productionLine = [
    columbia,
    sapperton,
    braid,
    lougheed,
    pway
  ]

  const polyline = [
    [49.28594, -123.11129],
    [49.285581150633966, -123.12012245876285],
    [49.28276795358473, -123.1164699145821],
    [49.28010484687972, -123.11012142014103],
    [49.273374980784865, -123.10037145876296],
    [49.262721001091556, -123.06927941643552],
    [49.24844626535717, -123.05598167410812],
    [49.24436337925635, -123.04537402992739],
    [49.23855530902799, -123.0317256145831],
    [49.22991271599505, -123.01265107225555],
    [49.22593989446889, -123.00385127225569],
    [49.220193228996386, -122.98845204229738],
    [49.21254265709066, -122.95914504342],
    [49.200068725477024, -122.94922489130668],
    [49.20159918383558, -122.91263972992837],
    [49.204943945073374, -122.90607708574763],
    [49.204575904842045, -122.87402738018886],
    [49.1991136014707, -122.85066387225632],
    [49.18971392944762, -122.84792071458409],
    [49.1829310367517, -122.84473292807587],
    // [49.224860238697396, -122.88949270294468],
    // [49.23268213068468, -122.88456287225554],
    // [49.24875892482227, -122.89717730665],
    // [49.25367827613695, -122.91868207173422],
  ];

  const blueOption = { color: "blue" };
  const redOption = { color: "red" };

  return (
    <MapContainer
      className={style.map}
      center={waterfront}
      zoom={14}
      schrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    {/* Marker */}
      <Marker position={waterfront}>
        <Popup>
          Waterfront Station
        </Popup>
      </Marker>
      <Marker position={burrard}>
        <Popup>
          Burrad Station
        </Popup>
      </Marker>
      <Marker position={stadium}>
        <Popup>
          Stadium Chinatwon Station
        </Popup>
      </Marker>
      <Marker position={granville}>
        <Popup>
          Granville Station
        </Popup>
      </Marker>
      <Marker position={main}>
        <Popup>
          Main Street-Science World Station
        </Popup>
      </Marker>
      <Marker position={commercial}>
        <Popup>
          Commercial Station
        </Popup>
      </Marker>
      <Marker position={nanaimo}>
        <Popup>
          Nanaimo Station
        </Popup>
      </Marker>
      <Marker position={avenue}>
        <Popup>
          29th avenue Station
        </Popup>
      </Marker>
      <Marker position={joyce}>
        <Popup>
          Joyce-Collingwood Station
        </Popup>
      </Marker>
      <Marker position={patterson}>
        <Popup>
          Patterson Station
        </Popup>
      </Marker>
      <Marker position={metro}>
        <Popup>
          Metrotown Station
        </Popup>
      </Marker>
      <Marker position={oak}>
        <Popup>
          Royal Oak Station
        </Popup>
      </Marker>
      <Marker position={edmonds}>
        <Popup>
          Edmonds Station
        </Popup>
      </Marker>
      <Marker position={street}>
        <Popup>
          22nd Street Station
        </Popup>
      </Marker>
      <Marker position={nw}>
        <Popup>
          New Wesminister Station
        </Popup>
      </Marker>
      <Marker position={columbia}>
        <Popup>
          Columbia Station
        </Popup>
      </Marker>
      <Marker position={scott}>
        <Popup>
          Scott Road Station
        </Popup>
      </Marker>
      <Marker position={gateway}>
        <Popup>
          Gateway Station
        </Popup>
      </Marker>
      <Marker position={surrey}>
        <Popup>
          Surrey Central Station
        </Popup>
      </Marker>
      <Marker position={kg}>
        <Popup>
          King George Station
        </Popup>
      </Marker>
      <Marker position={sapperton}>
        <Popup>
          Sapperton Station
        </Popup>
      </Marker>
      <Marker position={braid}>
        <Popup>
          Braid Station
        </Popup>
      </Marker>
      <Marker position={lougheed}>
        <Popup>
          Lougheed Town Centre Station
        </Popup>
      </Marker>
      <Marker position={pway}>
        <Popup>
          Production Way-University Station
        </Popup>
      </Marker>

      {/* Destination Marker */}

      <CircleMarker
        center={[49.1829310367517, -122.84473292807587]}
        pathOptions={redOption}
        radius={20}
      >
        <Popup>You've reached your destination</Popup>
      </CircleMarker>

      <CircleMarker
        center={[49.25367827613695, -122.91868207173422]}
        pathOptions={redOption}
        radius={20}
      >
        <Popup>You've reached your destination</Popup>
      </CircleMarker>

      <CircleMarker
        center={[49.28594, -123.11129]}
        pathOptions={redOption}
        radius={20}
      >
      </CircleMarker>

    {/* Polyline */}
      <Polyline pathOptions={blueOption} positions={polyline} />
      <Polyline pathOptions={blueOption} positions={productionLine} />
    </MapContainer>
  );
}
