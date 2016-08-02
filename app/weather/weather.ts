/**
 * Created by namita on 7/31/16.
 */
export interface Weather {
    name:String;
    country:String;
    temperature:String;
    data:{
        wind:String;
        sunrise:String;
        sunset:String;
        pressure:String;
        humidity:String;
    }
}