//import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';

//require('uuid/dist/v4')
import { Identifier } from './Identifier'

export class UniqueEntityID extends Identifier<string | number>{
  constructor(id?: string | number) {
    super(id ? id : uuidv4())
  }
}