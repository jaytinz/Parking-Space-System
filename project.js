//class or object structure for a Parking Space
class ParkingSpace {
  constructor(id, type, capacity, occupied) {
    this.id = id;
    this.type = type;
    this.capacity = capacity;
    this.occupied = occupied;
    this.isAvailable = true; // Initially, the space is available
  }
}

const availableSpaces = [];

//function to add a new parking space to the inventory
function addParkingSpace(id, type, capacity) {
  const newSpace = new ParkingSpace(id, type, capacity, false);
  availableSpaces.push(newSpace);
}

addParkingSpace("A1", "Standard", 1);
addParkingSpace("B1", "premium", 2);
addParkingSpace("R1", "regular", 5);

// List of available parking spaces at the spaces
function listAvailableSpaces() {
  const parkingSpaces = availableSpaces.filter((space) => space.isAvailable);

  return parkingSpaces;
}

// function to find a parking space by ID
function findSpace(query) {
  const { type, capacity } = query;
  const matchingSpaces = availableSpaces.filter(
    (space) =>
      space.isAvailable && space.type === type && space.capacity === capacity
  );
  return matchingSpaces;
}

//function to reserve a parking space
function reserveSpace(selectedSpace) {
  if (availableSpaces[selectedSpace] === undefined) {
    availableSpaces[(selectedSpace = "reserved")];
    console.log("space has been reserved");
  } else {
    console.log("space is already reserved");
  }
}

//function to check-in a vehicle to a reserved space
function checkInVehicle(space, vehicle) {
  if (parkingSpaces[space] === "reserved") {
    parkingSpaces[space] = vehicle;
    console.log("parked in space");
  } else if (availableSpaces[space] === undefined) {
    console.log("reverse first");
  } else {
    console.log("is already occupied");
  }
}

//function to check-out a vehicle from a reserved space
function checkOutVehicle(space) {
  if (parkingSpaces[space] === "undefined") {
    console.log("Already unreserved and unoccupied");
  } else parkingSpaces[space] = undefined;
  console.log("Has been checked out and is now available for new searches");
}

console.table(listAvailableSpaces());
console.log(reserveSpace(findSpace({ type: "Standard", capacity: "1" })[0]));
