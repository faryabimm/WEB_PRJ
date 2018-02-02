import React from 'react';
import Grid from '../Grid/Grid';
import Dice from '../Dice/Dice';
import DataManager from '../../modules/DataManager'

let game_id = new Date().toISOString();
let data_manager = new DataManager(game_id);


const SNL = () => (
    <div className="flex-row-container">
        <Grid data_manager={data_manager} />
        <Dice data_manager={data_manager}/>
    </div>
);

export default SNL;