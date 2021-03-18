class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public date:string;
    public timestamp:Number;
    constructor(index:number,
        hash:string,
        previousHash:string,
        date:string,
        timestamp:Number){
            this.index =index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.date = date;
            this.timestamp = timestamp;
        }
}

const genesisBlock:Block = new Block(0,"2020202020", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};