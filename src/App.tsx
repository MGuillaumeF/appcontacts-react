import React, { Fragment, useEffect, useState } from "react";
import { Exercice1 } from "./exercices/Exercice1";
import { Exercice3 } from "./exercices/Exercice3";

enum EGeometryType {
  CIRCLE = "circle",
  POLYGON = "polygon",
  POINT = "point",
}

enum EAltitudeRef {
  AGL = "AGL",
  AMSL = "AMSL",
  FL = "AGL",
}

interface IGeoPoint {
  longitude: number;
  latitude: number;
}

interface IGeoPoint3D extends IGeoPoint {
  altitude: number;
  altitudeRef: EAltitudeRef;
}

interface ICircle {
  center: IGeoPoint;
  radius: number;
}

interface IPolygon {
  points: IGeoPoint[];
}

interface IGeometry {
  geometryType: EGeometryType;
  geometry: ICircle | IGeoPoint | IPolygon;
  color?: string;
  name? : string;
}

function getData(): IGeometry[] {
  const data: IGeometry[] = [
    {
      geometryType: EGeometryType.CIRCLE,
      geometry: {
        radius: 15,
        center: {
          latitude: 0,
          longitude: 0,
        },
      },
    },
    {
      geometryType: EGeometryType.POLYGON,
      geometry: {
        points: [
          {
            latitude: 0,
            longitude: 0,
          },
          {
            latitude: 1,
            longitude: 1,
          },
          {
            latitude: 2,
            longitude: 2,
          },
        ],
      },
    },
    {
      geometryType: EGeometryType.POINT,
      geometry: {
        latitude: 0,
        longitude: 0,
      },
    },
  ];
  return data;
}

function App() {

  //useEffect(() => {}, []);
  return (
    <Fragment>
      <h1>Exo 1</h1>
      <Exercice1/>
      <hr/>
      <h1>Exo 3</h1>
      <Exercice3/>
      <hr/>
    </Fragment>
  );
}

export default App;
