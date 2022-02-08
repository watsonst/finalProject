export class Quotes {
    constructor(
        public percentage: Number,
        public quote: String, 
        public recommendation: String,        
    ){}

    getPercentage(){
        return this.percentage
    }

    getQuote(){
        return this.quote
    }

    getRec(){
        return this.recommendation
    }
}
 