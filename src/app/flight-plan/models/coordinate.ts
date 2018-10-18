import { LatLngLiteral } from '@agm/core';

export class Coordinate {
  public lat: number;
  public lng: number;

  public constructor(coordinate: LatLngLiteral) {
    this.lat = coordinate.lat;
    this.lng = coordinate.lng;
  }
}
