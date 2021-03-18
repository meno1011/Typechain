import * as CryptoJs from "crypto-js";

class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public date:string;
    public timestamp:Number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
        ): string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();


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

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length -1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime()/1000);

export {};