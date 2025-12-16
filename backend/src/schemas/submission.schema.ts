import { v4 as uuidv4 } from "uuid";

interface SubmissionType {
    id?: string;
    teamId: string;
    userId: string;
    filePath: string;
    submittedAt: Date;
}

class Submission {
    id: string;
    teamId: string;
    userId: string;
    filePath: string;
    submittedAt: Date;

    constructor(submission: SubmissionType) {
        this.id = submission.id || uuidv4();
        this.teamId = submission.teamId;
        this.userId = submission.userId;
        this.filePath = submission.filePath;
        this.submittedAt = submission.submittedAt;
    }
}

export default Submission;
