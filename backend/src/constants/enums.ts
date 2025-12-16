export enum TokenType {
    AccessToken,
    RefreshToken,
}

export enum ExpiresInTokenType {
    AccessToken = 15 * 60, // 15 phút
    RefreshToken = 30 * 24 * 60 * 60, // 30 ngày
}

export enum RoleType {
    CANDIDATE = "CANDIDATE",
    HOST = "HOST",
    MENTOR = "MENTOR",
    JUDGE = "JUDGE",
    ADMIN = "ADMIN",
}

export enum RoomStatus {
    AVAILABLE = "AVAILABLE",
    IN_USE = "IN_USE",
    COMPLETED = "COMPLETED",
}
