import ItemI from "./item";

export default interface InitialStateI {
    isLoading : boolean,
    error: false | string,
    jobsList: ItemI[],
}