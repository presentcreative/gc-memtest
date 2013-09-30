import ui.TextView as TextView;
import ui.resource.Image as Img;
import device;

import math.util as util;

import src.Tile as Tile;

var TILE_LIMIT = 1000; //max number of tile on screen
var TIME_INTERVAL = 100; //How often tiles get added / removed 

exports = Class(GC.Application, function () {

	this.initUI = function () {
		
		//Set up the image resources
		this.imgs = {
			"color": {
				"0": new Img({url: "resources/images/tiles/color_0.png"}),
				"1": new Img({url: "resources/images/tiles/color_1.png"}),
				"2": new Img({url: "resources/images/tiles/color_2.png"}),
				"3": new Img({url: "resources/images/tiles/color_3.png"}),
				"4": new Img({url: "resources/images/tiles/color_4.png"}),
				"5": new Img({url: "resources/images/tiles/color_5.png"}),
			},
			"shape": {
				"0": new Img({url: "resources/images/tiles/shape_0.png"}),
				"1": new Img({url: "resources/images/tiles/shape_1.png"}),
				"2": new Img({url: "resources/images/tiles/shape_2.png"}),
				"3": new Img({url: "resources/images/tiles/shape_3.png"}),
				"4": new Img({url: "resources/images/tiles/shape_4.png"}),
				"5": new Img({url: "resources/images/tiles/shape_5.png"}),
			}
		}
		
		//An array of tiles being displayed on screen
		this.activeTiles = [];
	};
	
	this.launchUI = function () {
		var lapsedTime = 0;
		
		this.engine.on('Tick', bind(this,function (dt) {
		  lapsedTime += dt;
		  
		  //on interval, add a tile to the screen
		  if(lapsedTime > TIME_INTERVAL) {
			  this.addTile();
			  
			  //remove the oldest tile if the number of tiles on screen exceeds limit
			  if(this.activeTiles.length > TILE_LIMIT) {
				  this.removeTile();
			  }
			  
			  //reset the timer
			  lapsedTime = 0;
		  }
		}));		
	};
	
	this.addTile = function() {
		//add a random tile to a random place on the board
		var screenDimensions = device.getDimensions();
		var newTile = new Tile({
			superview: this.view,
			x: util.random(0,screenDimensions.width),
			y: util.random(0,screenDimensions.height),
			colorFrame: util.random(0,6),
			shapeFrame: util.random(0,6)
		});
		
		//add new tile to the master array
		this.activeTiles.push(newTile);
	};
	
	this.removeTile = function() {
		//remove the oldest tile from the active tiles array by shifting it off the front
		var oldestTile = this.activeTiles.shift();
		
		//remove tile from scene by using the removeFromSuperview method
		oldestTile.removeFromSuperview();
	};
});
