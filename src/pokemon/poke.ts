export class Poke {
  private _id: number;
  private _name: string;
  private _image: string;
  private _types: Array<string>;
  private _height: number;
  private _weight: number;

  constructor() {
    this._types = [];
  }

  getId() {
    return this._id;
  }

  setId(id: number) {
    this._id = id;
  }

  getName() {
    return this._name;
  }

  setName(name: string) {
    this._name = name;
  }

  getImage() {
    return this._image;
  }

  setImage(image: string) {
    this._image = image;
  }

  getTypes() {
    return this._types;
  }

  addType(type: string) {
    this._types.push(type);
  }

  getHeight() {
    return this._height;
  }

  setHeight(height: number) {
    this._height = height;
  }

  getWeight() {
    return this._weight;
  }

  setWeight(weight: number) {
    this._weight = weight;
  }
}
