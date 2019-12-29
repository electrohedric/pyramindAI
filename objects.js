class Board {
    constructor(grid_file, textures_json) { // each
        this.gridLayout = loadStrings(grid_file);
        this.textures = {};
        let self = this;
        loadJSON(textures_json, function(texture_files) {
            for (const[key, value] of Object.entries(texture_files)) {
                self.textures[key] = loadImage(value); // textures [ . ]  = loadImage ( file.png );
            }
        });
    }

    draw(offX, offY, scale) {
        for (let y = 0; y < this.gridLayout.length; y++) {
            for (let x = 0; x < this.gridLayout[y].length; x++) {
                let gridChar = this.gridLayout[y].charAt(x); // map character to texture and draw at this position
                image(this.textures[gridChar], x * scale + offX, y * scale + offY, scale, scale);
            }
        }
    }
}