export interface GamesState {
  games: Array<GameCardType>;
}

export interface GameCardType {
  channels: number;
  game: GameInfo;
  viewers: number;
}

export interface BoxType {
  large: string;
  medium: string;
  small: string;
  template: string;
}

export interface GameInfo {
  box: BoxType;
  giantbomb_id: number;
  locale: string;
  localized_name: string;
  logo: BoxType;
  name: string;
  _id: number;
}
