import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel.js";

const Player=mongoose.model('Player',PlayerSchema);

export const addnewPlayer=async(req,res)=>{
    
    try {
        const newPlayer = new Player(req.body);
        const play = await newPlayer.save();
        res.json(play);
    } 
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

export const getPlayers=async(req,res)=>{

    try {
        const players = await Player.find({});
        res.json(players);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

export const getPlayersByID=async(req,res)=>{

    try {
        const players = await Player.findById(req.params.PlayerID);
        res.json(players);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

export const updatePlayer=async(req,res)=>{

    try {
        const players = await Player.findOneAndUpdate({_id:req.params.PlayerID},req.body,{new:true});
        res.json(players);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

export const deletePlayer=async(req,res)=>{

    try {
        await Player.findByIdAndRemove(req.params.PlayerID);
        res.json({message:'Successfully deleted player'});
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};