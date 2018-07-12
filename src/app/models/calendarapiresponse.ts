
    export interface Data {
        date?: string;
        week?: string;
        shengxiao?: string;
        ganzhi?: string;
        star?: string;
        nongli?: string;
        taishen?: string;
        wuxing?: string;
        chong?: string;
        sha?: string;
        jiri?: string;
        zhiri?: string;
        xiongshen?: string;
        jishenyiqu?: string;
        caishen?: string;
        xishen?: string;
        fushen?: string;
        suici?: string;
        yi?: string;
        ji?: string;
    }

    export interface calendarApiResponse {
        code: string;
        msg: string;
        data: Data;
    }