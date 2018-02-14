import React from 'react';
import Grid from '../Grid/Grid';
import Dice from '../Dice/Dice';
import HUD from "../HUD/HUD";


export default class SNL extends React.Component {
    constructor(props){
        super(props);

    }
    static getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    render() {
        let player_id = SNL.getParameterByName('player_id');
        let game_id = SNL.getParameterByName('game_id');
        return (
            <div className="flex-row-container">
                <Grid/>
                <Dice game_id={game_id} player_id={player_id}/>
            </div>


        );
    }
}
