
    export interface Data {
        date?: string;
        lunar?: string;
        lunarYear?: string;
        suit?: string;
        avoid?: string;
        animalsYear?: string;
        weekday?: string;
    }

    export interface calendarApiResponse {
        data: Data;
    }