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

function AreaItem(props: { name: string; color?: string }) {
  return (
    <li
      style={{
        listStyle: "none",
        fontSize: "1em",
        lineHeight: "1em",
        verticalAlign: "middle",
        marginTop:"0.2em",

      }}
    >
      <span
        style={{
          width: "1em",
          height: "1em",
          verticalAlign: "middle",
          display: "inline-block",
          backgroundColor: props.color || "lightGray",
          marginRight: "0.5em",
        }}
      ></span>
      - {props.name}
    </li>
  );
}

function AreaList(props: { data: IArea[] }) {
  return (
    <ul>
      {props.data.map((geo) => {
        return <AreaItem key={geo.name} name={geo.name} color={geo.color} />;
      })}
    </ul>
  );
}

export const Exercice3 = () => {
  return <AreaList data={getData()} />;
};
