import React from "react";

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
  altitudeRef?: EAltitudeRef;
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
}

interface IArea extends IGeometry {
  color?: string;
  name: string;
}

function getData(): IArea[] {
  const data: IArea[] = [
    {
      name: "rond",
      color: "red",
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
      name: "triangle",
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
      name: "point",
      geometryType: EGeometryType.POINT,
      geometry: {
        latitude: 0,
        longitude: 0,
      },
    },
  ];
  return data;
}

// créer un composant AreaItem qui doit contenir une puce coloré suivie du nom de la zone
// si l'AreaItem n'a pas de couleur la puce doit être grise
function AreaItem(props: { name: string; color?: string }) {
  return (
    // ...
  );
}

// créer une liste non ordonée de composant AreaItem
function AreaList(props: { data: IArea[] }) {
  return (
    // ...
  );
}

export const Exercice3 = () => {
  return <AreaList data={getData()} />;
};
