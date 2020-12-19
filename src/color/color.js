const Chroma = require('chroma-js');

class Color {
	constructor(hex) {
		this.hex_ = hex;
	}

	hex() {
		return this.hex_;
	}

	withAlpha(alpha) {
		const rgbComps = new Chroma(this.hex_).rgb();
		const hex = new Chroma({
			r: rgbComps[0],
			g: rgbComps[1],
			b: rgbComps[2],
			a: alpha,
		}).hex();
		return new Color(hex);
	}

	adjust(adjustment) {
		const dh = adjustment.hue || 0;
		const ds = adjustment.saturation || 0;
		const dl = adjustment.lightness || 0;
		const hslComps = new Chroma(this.hex_).hsl();
		const hex = new Chroma({
			h: hslComps[0] + dh,
			s: hslComps[1] + ds,
			l: hslComps[2] + dl,
		}).hex();
		return new Color(hex);
	}

	darken(amount) {
		return this.adjust({
			lightness: -amount,
		});
	}

	lighten(amount) {
		return this.adjust({
			lightness: amount,
		});
	}

	static hsl(h, s, l) {
		const hex = new Chroma({
			h: h,
			s: s,
			l: l,
		}).hex();
		return new Color(hex);
	}

	static mix(c1, c2, weight) {
		const rgbComps1 = new Chroma(c1.hex()).rgb();
		const rgbComps2 = new Chroma(c2.hex()).rgb();
		const w1 = weight;
		const w2 = 1 - weight;
		const hex = new Chroma({
			r: rgbComps1[0] * w1 + rgbComps2[0] * w2,
			g: rgbComps1[1] * w1 + rgbComps2[1] * w2,
			b: rgbComps1[2] * w1 + rgbComps2[2] * w2,
		}).hex();
		return new Color(hex);
	}
}

exports.Color = Color;
