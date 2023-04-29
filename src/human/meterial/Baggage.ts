import { BagTag } from "./BagTag";

export class Baggage {
    private bagID: number;
    private tagID: BagTag;
    constructor(bagID: number, tagID: BagTag) {
        this.bagID = bagID;
        this.tagID  = tagID;
    }

}