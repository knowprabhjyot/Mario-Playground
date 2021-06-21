const createPlayground = (size) => {
  const table = document.createElement("table");
  for (let i = 0; i < size; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      const td = document.createElement("td");
      td.setAttribute("id", `${i}${j}`);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
};

const create2DArray = (size) => {
    const array = [];
    for (let i = 0 ; i < size ; i++) {
        array[i] = new Array(parseInt(size));
    }
    return array;
}

const createCharacter = (id, src) => {
  const char = document.createElement("img");
  char.setAttribute("id", id);
  char.setAttribute("src", src);
  return char;
};

const getPosition = (id) => {
  return document.getElementById(id);
};

const createMario = () => {
  const mario = createCharacter("mario", "assets/mario.png");
  const td = getPosition(`${defaultPosition.x}${defaultPosition.y}`);
  td.appendChild(mario);
};

const createMultipleAsset = (array, marioPosition, prefixId) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            const randomX = Math.floor(Math.random() * array.length);
            const randomY = Math.floor(Math.random() * array.length);
            const randomId = `${prefixId}${randomX}${randomY}`;
            const existingAsset = array[randomX][randomY];
            if ((marioPosition.x !== randomX || marioPosition.y !== randomY) && !(existingAsset)) {
                const asset = (prefixId === 'm') ? createCharacter("mushroom", "assets/mushroom.png") : createCharacter("poison", "assets/poison.jpeg");
                const randomPos = `${randomX}${randomY}`;
                const pos = getPosition(randomPos);
                const createdId = `${prefixId}${randomX}${randomY}`;
                asset.setAttribute('id', createdId);
                pos.appendChild(asset);
                array[randomX][randomY] = createdId;
              }
        }
    }
}