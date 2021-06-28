export abstract class Mapper<From,To>{
  abstract map(props:From):To;
}