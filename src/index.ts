class Carbon {
    private readonly date: Date

    constructor(date?: string | number | Date) {
        this.date = date ? new Date(date) : new Date()
    }

    // Getters for date components
    year(): number {
        return this.date.getFullYear()
    }

    month(): number {
        return this.date.getMonth() + 1 // JavaScript months are 0-indexed
    }

    day(): number {
        return this.date.getDate()
    }

    hour(): number {
        return this.date.getHours()
    }

    minute(): number {
        return this.date.getMinutes()
    }

    second(): number {
        return this.date.getSeconds()
    }

    dayOfWeek(): number {
        return this.date.getDay() // 0 = Sunday, 6 = Saturday
    }

    dayOfYear(): number {
        const start = new Date(this.date.getFullYear(), 0, 0)
        const diff = (this.date.getTime() - start.getTime()) + ((start.getTimezoneOffset() - this.date.getTimezoneOffset()) * 60 * 1000)
        return Math.floor(diff / (1000 * 60 * 60 * 24))
    }

    weekOfYear(): number {
        const date = new Date(this.date.getTime())
        date.setHours(0, 0, 0, 0)
        // Thursday in current week decides the year
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
        // January 4 is always in week 1
        const week1 = new Date(date.getFullYear(), 0, 4)
        // Adjust to Thursday in week 1 and count number of weeks from date to week1
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
    }

    daysInMonth(): number {
        return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
    }

    static now(): Carbon {
        return new Carbon()
    }

    static parse(date: string | number | Date): Carbon {
        return new Carbon(date)
    }

    static make(date?: string | number | Date): Carbon {
        return new Carbon(date)
    }

    static today(): Carbon {
        const now = new Date()
        return new Carbon(new Date(now.getFullYear(), now.getMonth(), now.getDate()))
    }

    static tomorrow(): Carbon {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return new Carbon(new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate()))
    }

    static yesterday(): Carbon {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        return new Carbon(new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()))
    }

    static createFromDate(year: number, month: number, day: number): Carbon {
        // Month in JavaScript is 0-indexed, but we want it to be 1-indexed like PHP Carbon
        return new Carbon(new Date(year, month - 1, day))
    }

    static createFromTime(hour: number, minute: number, second: number = 0): Carbon {
        const now = new Date()
        return new Carbon(new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, second))
    }

    static createFromDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number = 0): Carbon {
        // Month in JavaScript is 0-indexed, but we want it to be 1-indexed like PHP Carbon
        return new Carbon(new Date(year, month - 1, day, hour, minute, second))
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
        this.date.setDate(this.date.getDate() + days)
        return this
    }

    subDays(days: number = 1): Carbon {
        return this.addDays(-days)
    }

    addMonths(months: number = 1): Carbon {
        this.date.setMonth(this.date.getMonth() + months)
        return this
    }

    subMonths(months: number = 1): Carbon {
        return this.addMonths(-months)
    }

    addYears(years: number = 1): Carbon {
        this.date.setFullYear(this.date.getFullYear() + years)
        return this
    }

    subYears(years: number = 1): Carbon {
        return this.addYears(-years)
    }

    addHours(hours: number = 1): Carbon {
        this.date.setHours(this.date.getHours() + hours)
        return this
    }

    subHours(hours: number = 1): Carbon {
        return this.addHours(-hours)
    }

    addMinutes(minutes: number = 1): Carbon {
        this.date.setMinutes(this.date.getMinutes() + minutes)
        return this
    }

    subMinutes(minutes: number = 1): Carbon {
        return this.addMinutes(-minutes)
    }

    addSeconds(seconds: number = 1): Carbon {
        this.date.setSeconds(this.date.getSeconds() + seconds)
        return this
    }

    subSeconds(seconds: number = 1): Carbon {
        return this.addSeconds(-seconds)
    }

    isSameDay(other: Carbon): boolean {
        return (
            this.date.getFullYear() === other.date.getFullYear() &&
            this.date.getMonth() === other.date.getMonth() &&
            this.date.getDate() === other.date.getDate()
        )
    }

    isSameMonth(other: Carbon): boolean {
        return (
            this.date.getFullYear() === other.date.getFullYear() &&
            this.date.getMonth() === other.date.getMonth()
        )
    }

    isSameYear(other: Carbon): boolean {
        return this.date.getFullYear() === other.date.getFullYear()
    }

    isAfter(other: Carbon): boolean {
        return this.date > other.date
    }

    isBefore(other: Carbon): boolean {
        return this.date < other.date
    }

    isSameOrAfter(other: Carbon): boolean {
        return this.date >= other.date
    }

    isSameOrBefore(other: Carbon): boolean {
        return this.date <= other.date
    }

    diffInDays(other: Carbon, absolute: boolean = true): number {
        const diff = Math.floor((this.date.getTime() - other.date.getTime()) / (1000 * 60 * 60 * 24))
        return absolute ? Math.abs(diff) : diff
    }

    diffInMonths(other: Carbon, absolute: boolean = true): number {
        const yearDiff = this.date.getFullYear() - other.date.getFullYear()
        const monthDiff = this.date.getMonth() - other.date.getMonth()
        const diff = yearDiff * 12 + monthDiff
        return absolute ? Math.abs(diff) : diff
    }

    diffInYears(other: Carbon, absolute: boolean = true): number {
        const diff = this.date.getFullYear() - other.date.getFullYear()
        return absolute ? Math.abs(diff) : diff
    }

    toDate(): Date {
        return new Date(this.date)
    }

    toString(): string {
        return this.date.toISOString()
    }

    copy(): Carbon {
        return new Carbon(new Date(this.date))
    }

    startOfDay(): Carbon {
        this.date.setHours(0, 0, 0, 0)
        return this
    }

    endOfDay(): Carbon {
        this.date.setHours(23, 59, 59, 999)
        return this
    }

    startOfMonth(): Carbon {
        this.date.setDate(1)
        this.date.setHours(0, 0, 0, 0)
        return this
    }

    endOfMonth(): Carbon {
        this.date.setMonth(this.date.getMonth() + 1, 0)
        this.date.setHours(23, 59, 59, 999)
        return this
    }

    startOfYear(): Carbon {
        this.date.setMonth(0, 1)
        this.date.setHours(0, 0, 0, 0)
        return this
    }

    endOfYear(): Carbon {
        this.date.setMonth(11, 31)
        this.date.setHours(23, 59, 59, 999)
        return this
    }

    isWeekend(): boolean {
        const day = this.date.getDay()
        return day === 0 || day === 6 // 0 is Sunday, 6 is Saturday
    }

    isWeekday(): boolean {
        return !this.isWeekend()
    }

    isToday(): boolean {
        const today = new Date()
        return (
            this.date.getDate() === today.getDate() &&
            this.date.getMonth() === today.getMonth() &&
            this.date.getFullYear() === today.getFullYear()
        )
    }

    isTomorrow(): boolean {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return (
            this.date.getDate() === tomorrow.getDate() &&
            this.date.getMonth() === tomorrow.getMonth() &&
            this.date.getFullYear() === tomorrow.getFullYear()
        )
    }

    isYesterday(): boolean {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        return (
            this.date.getDate() === yesterday.getDate() &&
            this.date.getMonth() === yesterday.getMonth() &&
            this.date.getFullYear() === yesterday.getFullYear()
        )
    }

    isFuture(): boolean {
        return this.date > new Date()
    }

    isPast(): boolean {
        return this.date < new Date()
    }

    diffForHumans(other: Carbon | null = null, absolute: boolean = false): string {
        const now = other ? other.date : new Date()
        const diff = this.date.getTime() - now.getTime()
        const absDiff = Math.abs(diff)

        const seconds = Math.floor(absDiff / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)
        const months = Math.floor(days / 30)
        const years = Math.floor(months / 12)

        let unit: string
        let count: number

        if (years > 0) {
            unit = 'year'
            count = years
        } else if (months > 0) {
            unit = 'month'
            count = months
        } else if (days > 0) {
            unit = 'day'
            count = days
        } else if (hours > 0) {
            unit = 'hour'
            count = hours
        } else if (minutes > 0) {
            unit = 'minute'
            count = minutes
        } else {
            unit = 'second'
            count = Math.max(seconds, 1)
        }

        if (count !== 1) {
            unit += 's'
        }

        if (absolute) {
            return `${count} ${unit}`
        }

        return diff < 0 ? `${count} ${unit} ago` : `in ${count} ${unit}`
    }

    // Additional utility methods
    isLeapYear(): boolean {
        const year = this.date.getFullYear()
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    }

    isSameHour(other: Carbon): boolean {
        return (
            this.date.getFullYear() === other.date.getFullYear() &&
            this.date.getMonth() === other.date.getMonth() &&
            this.date.getDate() === other.date.getDate() &&
            this.date.getHours() === other.date.getHours()
        )
    }

    isSameMinute(other: Carbon): boolean {
        return (
            this.isSameHour(other) &&
            this.date.getMinutes() === other.date.getMinutes()
        )
    }

    isSameSecond(other: Carbon): boolean {
        return (
            this.isSameMinute(other) &&
            this.date.getSeconds() === other.date.getSeconds()
        )
    }

    startOfWeek(): Carbon {
        const day = this.date.getDay()
        const diff = this.date.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
        this.date.setDate(diff)
        this.date.setHours(0, 0, 0, 0)
        return this
    }

    endOfWeek(): Carbon {
        const day = this.date.getDay()
        const diff = this.date.getDate() + (day === 0 ? 0 : 7 - day)
        this.date.setDate(diff)
        this.date.setHours(23, 59, 59, 999)
        return this
    }

    nextWeekday(): Carbon {
        this.date.setDate(this.date.getDate() + 1)
        while (this.date.getDay() === 0 || this.date.getDay() === 6) {
            this.date.setDate(this.date.getDate() + 1)
        }
        return this
    }

    previousWeekday(): Carbon {
        this.date.setDate(this.date.getDate() - 1)
        while (this.date.getDay() === 0 || this.date.getDay() === 6) {
            this.date.setDate(this.date.getDate() - 1)
        }
        return this
    }

    nextOrSameDay(dayOfWeek: number): Carbon {
        const currentDay = this.date.getDay()
        const distance = (dayOfWeek - currentDay + 7) % 7
        this.date.setDate(this.date.getDate() + distance)
        return this
    }

    previousOrSameDay(dayOfWeek: number): Carbon {
        const currentDay = this.date.getDay()
        const distance = (currentDay - dayOfWeek + 7) % 7
        this.date.setDate(this.date.getDate() - distance)
        return this
    }
}

export default Carbon
