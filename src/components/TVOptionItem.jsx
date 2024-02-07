import './TVOptionItem.css';
import getTVOptionItemIcon from "../helpers/inventorycalculations.js";
function TVOptionItem({TVOption}){
    const imageSrc = getTVOptionItemIcon(TVOption.applicable);
    return (
        <li className="OptionsIconsList">
            <img className="imgIcon" src={imageSrc}/>
            <p>{TVOption.name}</p>
        </li>
    );
}
export default TVOptionItem;