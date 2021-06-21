const createPlayground = (size) => {
    const table = document.createElement('table');
    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < size;j++) {
            const td = document.createElement('td');
            td.setAttribute('id', `${i}$`)
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

const createCharacter = (id, src) => {
    const char = document.createElement('img');
    char.setAttribute('id', id);
    char.setAttribute('src', src);
    return char;
}

const setCharacter = (element, cordinates) => {
    const td = getPosition(cordinates);
    td.appendChild(element);
}

const moveMario = (key) => {
    switch(key) {
        case 'up': 
        setMarioPosition(position);
        case 'down':
            setMarioPosition(position);
        case 'right':
            setMarioPosition(position);
        case 'left':
            setMarioPosition(position);
        default:
            return;
    }
}

const getPosition = (position) => {
    return document.getElementById(`${position.x}${position.y}`);
}

const createMario = () => {
    const mario = createCharacter('mario', 'assets/mario.png');
    const td = getPosition(defaultPosition);
    td.appendChild(mario);
}
