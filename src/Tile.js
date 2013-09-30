import ui.View as View;
import ui.ImageView as ImageView;

exports = Class(View, function (supr) {

	this.init = function (opts) {
		
		//Set default width / height
		opts = merge(opts, {
			width: 91,
			height: 91
		});
		
		supr(this, 'init', [opts]);
		
		//Add the color BG
		this.addSubview(new ImageView({
			x: 0,
			y: 0,
			width: this.style.width,
			height: this.style.height,
			image: GC.app.imgs.color[opts.colorFrame]
		}));
		
		//Add the shape image
		this.addSubview(new ImageView({
			x: 0,
			y: 0,
			width: this.style.width,
			height: this.style.height,
			image: GC.app.imgs.shape[opts.shapeFrame]
		}));
	};
});
