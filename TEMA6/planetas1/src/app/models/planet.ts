export interface HelperPlanet {
  count: number,
  next: string,
  previous: null
  results: Planet[]
}

export interface Planet {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string
}