import { v4 as uuidv4 } from "uuid";
import { RoomStatus } from "~/constants/enums";

interface RoomType {
    id?: string;
    roomNumber: string;
    startTime: Date;
    endTime?: Date | null;
    hostId: string;
    status: RoomStatus;
}

class Room {
    id: string;
    roomNumber: string;
    startTime: Date;
    endTime: Date | null;
    hostId: string;
    status: RoomStatus;

    constructor(room: RoomType) {
        this.id = room.id || uuidv4();
        this.roomNumber = room.roomNumber;
        this.startTime = room.startTime;
        this.endTime = room.endTime || null;
        this.hostId = room.hostId;
        this.status = room.status;
    }
}

export default Room;
export { RoomStatus };
