class Carbon {
    private readonly date: Date

    constructor(date?: string | number | Date) {
        this.date = date ? new Date(date) : new Date()
    }

    static now(): Carbon {
        return new Carbon()
    }

    static parse(date: string | number | Date): Carbon {
        return new Carbon(date)
    }

    format(format: string): string {
        const year = this.date.getFullYear()
        const month = (this.date.getMonth() + 1).toString().padStart(2, '0')
        const day = this.date.getDate().toString().padStart(2, '0')
        const hours = this.date.getHours().toString().padStart(2, '0')
        const minutes = this.date.getMinutes().toString().padStart(2, '0')
        const seconds = this.date.getSeconds().toString().padStart(2, '0')

        return format
            .replace('Y', year.toString())
            .replace('m', month)
            .replace('d', day)
            .replace('H', hours)
            .replace('i', minutes)
            .replace('s', seconds)
    }

    addDays(days: number = 1): Carbon {
        const newDate = new Date(this.date)
        newDate.setDate(newDate.getDate() + days)
        return new Carbon(newDate)
    }

    subDays(days: number = 1): Carbon {
        return this.addDays(-days)
    }

    addMonths(months: number = 1): Carbon {
        const newDate = new Date(this.date)
        newDate.setMonth(newDate.getMonth() + months)
        return new Carbon(newDate)
    }

    subMonths(months: number = 1): Carbon {
        return this.addMonths(-months)
    }

    isSameDay(other: Carbon): boolean {
        return (
            this.date.getFullYear() === other.date.getFullYear() &&
            this.date.getMonth() === other.date.getMonth() &&
            this.date.getDate() === other.date.getDate()
        )
    }

    isAfter(other: Carbon): boolean {
        return this.date > other.date
    }

    isBefore(other: Carbon): boolean {
        return this.date < other.date
    }

    toDate(): Date {
        return new Date(this.date)
    }

    toString(): string {
        return this.date.toISOString()
    }
}

export default Carbon