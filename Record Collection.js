// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if (value.length == 0) {
    delete records[id][prop];
    return records;
  }
  else {
    if (prop.toLowerCase() === "tracks") { //Si propiedad especificada es 'tracks'...
      if (!records[id].hasOwnProperty("tracks")) { //Si prop 'tracks' NO existe en album, se añade + valor recibido. 
        const newTracks = [];
        newTracks.push(value);
        records[id][prop] = newTracks;
      }

      else { //Si prop tracks ya existe...
        records[id][prop].push(value);
      }
    }

    else { //Si la prop no es tracks 
      records[id][prop] = value;
    }
  }
  
  return records;
}

console.log(`Album antes: ${JSON.stringify(recordCollection[5439])}\n`)

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"); 

console.log(`Album después: ${JSON.stringify(recordCollection[5439])}\n`)
