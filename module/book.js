import generateId from './utils.js';

export default class Book {
  constructor(name, writer) {
    this.id = generateId();
    this.name = name;
    this.writer = writer;
  }
}