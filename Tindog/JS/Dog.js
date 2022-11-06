export class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    isNotLiked(){
        this.hasBeenSwiped = true
    }
    isLiked(){
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
    }
}