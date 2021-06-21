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

const createMushroom = (size, marioPosition) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const randomX = Math.floor(Math.random() * size);
      const randomY = Math.floor(Math.random() * size);
      const randomId = `m${randomX}${randomY}`;
      const isPosition = getPosition(randomId);
      if ((marioPosition.x !== randomX || marioPosition.y !== randomY) && !(isPosition)) {
        const mushroom = createCharacter("mushroom", "assets/mushroom.png");
        const randomPos = `${randomX}${randomY}`;
        const pos = getPosition(randomPos);
        mushroom.setAttribute("id", `m${randomX}${randomY}`);
        pos.appendChild(mushroom);
      }
    }
  }
};