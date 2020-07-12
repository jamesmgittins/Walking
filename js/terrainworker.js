importScripts('three.min.js', 'perlin.js');

const heights = {
    water: 4.3,
    sand: 5.0,
    plainsMin: 4,
    plainsMax: 25
}
const mountainMod = heights.plainsMax - (heights.plainsMin + ((heights.plainsMax - heights.plainsMin) / 4));

const chunkSize = {x : 64, y : 64};
noise.seed(1024);

function getHeight(x, y) {
    let height =
        (25 * noise.simplex2(x / 100, y / 100)) + 25 +
        (1.5 * noise.simplex2(x / 8, y / 8)) +
        (30 * noise.simplex2(x / 1200, y / 1200)) + 5;

    let plainsHeight = heights.plainsMin + ((height - heights.plainsMin) / 4);
    if (height > heights.plainsMax) {
        return Math.pow(plainsHeight, 1.4) - 13.5;
    }
    return plainsHeight;
}

function getLandTexture(x, y, height) {

    if (height < heights.water)
        return 0;
    if (height < heights.sand + 0.5)
        return 1;
    if (height < heights.sand + 1.0)
        return 1 + 2 * (height - (heights.sand + 0.5));
    let snowMod = 3 + (3 * noise.simplex2(x / 20, y / 20));
    if (height > heights.plainsMax + 3 + snowMod)
        return 4;
    if (height > heights.plainsMax + 2.0 + snowMod)
        return 3 + (height - (heights.plainsMax + 2.0 + snowMod));
    let gravelMod = 5 + (5 * noise.simplex2(x / 15, y / 15));
    if (height > mountainMod + gravelMod)
        return 3;
    if (height > mountainMod + gravelMod - 1) {
        return 2 + (height - (mountainMod + gravelMod - 1));
    }
    return 2;
}

function updateGrass(x, y, range) {

    let matrix = new THREE.Matrix4();
    let position = new THREE.Vector3();
    let rotation = new THREE.Euler();
    let quaternion = new THREE.Quaternion();
    let scale = new THREE.Vector3(1,1,1);
    let grassTextures = [];
    let grassMatrices = [];

    let itemsAdded = 0;

    for (let j = 0; j < range; j++) {
        for (let i = 0; i < range; i++) {
            if (itemsAdded > 2000)
                break;
            xPos = j - range / 2 + x;
            yPos = i - range / 2 + y;
            height = getHeight(xPos, yPos);
            if (height > heights.sand + 1 && height < heights.sand + 8) {
                if (noise.simplex2(xPos / 5, yPos / 5) > 0.5) {
                    scale.set(1, 1, 1);
                    position.x = xPos;
                    position.z = yPos;
                    position.y = height + 0.25;
                    rotation.y = noise.simplex2(xPos, yPos) * Math.PI * 2;
                    quaternion.setFromEuler( rotation );
                    matrix.compose(position, quaternion, scale);
                    matrix.toArray().forEach(element => {
                        grassMatrices.push(element);
                    });
                    grassTextures.push( noise.simplex2(xPos, yPos));
                    itemsAdded++;
                }
            }
        }
    }

    for (let j = 0; j < range * 2; j++) {
        for (let i = 0; i < range * 2; i++) {
            if (itemsAdded > 2000)
                break;
            xPos = j - range + x;
            yPos = i - range + y;
            height = getHeight(xPos, yPos);
            if (height > heights.sand + 1 && height < heights.sand + 8) {
                if (noise.simplex2(xPos / 7, yPos / 7) * noise.simplex2(xPos / 1, yPos / 1) > 0.8) {
                    scale.set(10, 10, 10);
                    position.x = xPos;
                    position.z = yPos;
                    position.y = height + 2.0;
                    rotation.y = noise.simplex2(xPos / 5, yPos / 5) * Math.PI;
                    quaternion.setFromEuler( rotation );
                    matrix.compose(position, quaternion, scale);
                    matrix.toArray().forEach(element => {
                        grassMatrices.push(element);
                    });
                    rotation.y += 0.5 * Math.PI;
                    quaternion.setFromEuler( rotation );
                    matrix.compose(position, quaternion, scale);
                    matrix.toArray().forEach(element => {
                        grassMatrices.push(element);
                    });
                    grassTextures.push(10);
                    grassTextures.push(10);
                    itemsAdded+=2;
                }
            }
        }
    }

    return ["grass", grassMatrices, grassTextures];
}

function createChunk (x, y) {
    let pa = new Float32Array((chunkSize.x + 1) * (chunkSize.y + 1) * 3);
    let hVerts = chunkSize.x + 1;
    let wVerts = chunkSize.y + 1;
    let landTextures = new Float32Array((chunkSize.x + 1) * (chunkSize.y + 1));
    
    let xPos, yPos, height;
    
    for (let j = 0; j < hVerts; j++) {
        for (let i = 0; i < wVerts; i++) {
            xPos = j - (chunkSize.x) / 2 + x;
            yPos = i - (chunkSize.y) / 2 + y;
            pa[3 * (j * wVerts + i)] = xPos;
            pa[3 * (j * wVerts + i) + 2] = yPos;
            height = getHeight(xPos, yPos);
            pa[3 * (j * wVerts + i) + 1] = height;
            landTextures[j * wVerts + i] = getLandTexture(xPos, yPos, height);
        }
    }
    return ["land", x, y, pa, landTextures];
}


onmessage = function(event) {
    switch(event.data[0]) {
        case "land":
            postMessage(createChunk(event.data[1], event.data[2]));
            break;
        case "grass":
            postMessage(updateGrass(event.data[1], event.data[2], event.data[3]));
            break;
    }
  }