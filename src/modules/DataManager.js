import {p1_move, p2_move} from './stateManager'

import React, {Component} from 'react';
import Parse from 'parse';

Parse.serverURL = 'http://localhost:3001/snl_server';
Parse.initialize("theAppId123", 'theJavaScriptKey123');

export default class DataManager {
    constructor(game_id) {
        this.game_id = game_id;
        this.db_write_handle = Parse.Object.extend("GameSession");

        let query = new Parse.Query('GameSession');
        let subscription = query.subscribe();

        subscription.on('create', (object) => {
            let player_id = object.get('playerId');
            let dice_number = object.get('diceNumber');
            let game_id = object.get('gameId');

            if (player_id === 'P1') {
                p1_move(dice_number)
            } else {
                p2_move(dice_number)
            }

            console.log(player_id, dice_number, game_id);
            console.log('message added!');
        });
    }

    p1_move(dice_number) {
        this.player_move(dice_number, 'P1');
    }

    p2_move(dice_number) {
        this.player_move(dice_number, 'P2');
    }

    player_move(dice_number, player_id) {
        let record = new this.db_write_handle();
        record.set("gameId", this.game_id);
        record.set("playerId", player_id);
        record.set("diceNumber", dice_number.toString());

        record.save(null, {
            success: function (move) {
                // Execute any logic that should take place after the object is saved.
                alert('New move added to database created with objectId: ' + move.id);
            },
            error: function (gameScore, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new move, with error code: ' + error.message);
            }
        });
    }
}