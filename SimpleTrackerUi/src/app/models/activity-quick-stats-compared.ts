import { ActivityQuickStats } from "./activity-quick-stats";

export interface ActivityQuickStatsCompared extends ActivityQuickStats {
    yesterdayValue : number,
    lastWeekValue  : number,
    lastMonthValue : number
}