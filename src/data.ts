export enum ReportType {
    INCOME = "income",
    EXPENSES = "expenses"
}

export const data: Data = {
    report: [
        {
            id: "uuid1",
            source: "Salary",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "YouTube",
            amount: 1500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid3",
            source: "food",
            amount: 500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSES
        }
    ]
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType
    }[]
}
