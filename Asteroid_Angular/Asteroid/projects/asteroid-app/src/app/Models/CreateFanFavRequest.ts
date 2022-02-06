export class CreateFanFavoritesRequest {
    constructor(
        public percentage: Number,
        public date: String, 
        public counter: Number,
        public quote: String,
        public recommendation: String      
    ){}
}