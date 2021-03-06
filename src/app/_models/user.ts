﻿import { Role } from "./role";

export class LoggingUser     {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}