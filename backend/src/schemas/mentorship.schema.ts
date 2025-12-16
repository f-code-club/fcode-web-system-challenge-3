import { v4 as uuidv4 } from "uuid";

interface MentorshipType {
    id?: string;
    mentorId: string;
    teamId: string;
}

class Mentorship {
    id: string;
    mentorId: string;
    teamId: string;

    constructor(mentorship: MentorshipType) {
        this.id = mentorship.id || uuidv4();
        this.mentorId = mentorship.mentorId;
        this.teamId = mentorship.teamId;
    }
}

export default Mentorship;
