function Date({date}){

    let dates = date.substring(0, 10).split('-') ;
    return`${dates[2]}-${dates[1]}-${dates[0]}`;
}
export default Date;