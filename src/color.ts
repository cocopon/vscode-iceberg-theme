import * as Chroma from 'chroma-js';

interface Adjustment {
	hue?: number;
	saturation?: number;
	lightness?: number;
}

export class Color {
	private hex_: string;

	constructor(hex: string) {
		this.hex_ = hex;
	}

	public hex(): string {
		return this.hex_;
	}

	public withAlpha(alpha: number): Color {
		const rgbComps = Chroma(this.hex_).rgb();
		const hex = Chroma(rgbComps[0], rgbComps[1], rgbComps[2], 'rgb')
			.alpha(alpha)
			.hex();
		return new Color(hex);
	}

	public adjust(adjustment: Adjustment): Color {
		const dh = adjustment.hue || 0;
		const ds = adjustment.saturation || 0;
		const dl = adjustment.lightness || 0;
		const hslComps = Chroma(this.hex_).hsl();
		const hex = Chroma(
			hslComps[0] + dh,
			hslComps[1] + ds,
			hslComps[2] + dl,
			'hsl',
		).hex();
		return new Color(hex);
	}

	public darken(amount: number): Color {
		return this.adjust({
			lightness: -amount,
		});
	}

	public lighten(amount: number): Color {
		return this.adjust({
			lightness: amount,
		});
	}

	static hsl(h: number, s: number, l: number): Color {
		const hex = Chroma(h, s, l, 'hsl').hex();
		return new Color(hex);
	}

	static mix(c1: Color, c2: Color, weight: number): Color {
		const rgbComps1 = Chroma(c1.hex()).rgb();
		const rgbComps2 = Chroma(c2.hex()).rgb();
		const w1 = weight;
		const w2 = 1 - weight;
		const hex = Chroma(
			rgbComps1[0] * w1 + rgbComps2[0] * w2,
			rgbComps1[1] * w1 + rgbComps2[1] * w2,
			rgbComps1[2] * w1 + rgbComps2[2] * w2,
			'rgb',
		).hex();
		return new Color(hex);
	}
}
