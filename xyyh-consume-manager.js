// 消费数据管理器
class ConsumeDataManager {
    constructor() {
        this.data = window.consumeData || {};
        this.periods = Object.keys(this.data).sort((a, b) => {
            // 如果是"本轮"则排在最前面
            if (a.includes('本轮')) return -1;
            if (b.includes('本轮')) return 1;
            // 否则按字典序排列
            return a.localeCompare(b);
        });
    }

    // 获取所有时间段
    getPeriods() {
        return this.periods;
    }

    // 获取最新时间段
    getLatestPeriod() {
        return this.periods[0]; // 最新时间段排在第一位
    }

    // 获取默认时间段（通常是最新时间段）
    getDefaultPeriod() {
        return this.periods[0];
    }

    // 根据时间段获取数据
    getDataByPeriod(period) {
        return this.data[period] || [];
    }

    // 获取统计范围（根据时间段返回相应的时间范围）
    getStatsRangeByPeriod(period) {
        // 根据时间段名称返回不同的统计范围
        if (period.includes('本轮')) {
            return '2025年12月1日 - 2025年12月31日';
        } else if (period.includes('第一轮')) {
            return '2025年11月1日 - 2025年11月30日';
        } else if (period.includes('第二轮')) {
            return '2025年10月1日 - 2025年10月31日';
        } else {
            // 默认返回一个示例日期
            return '2025年9月1日 - 2025年9月30日';
        }
    }

    // 获取拍卖时间
    getAuctionTimeByPeriod(period) {
        // 根据时间段名称返回拍卖时间
        if (period.includes('本轮')) {
            return '2025年12月25日';
        } else if (period.includes('第一轮')) {
            return '2025年11月25日';
        } else if (period.includes('第二轮')) {
            return '2025年10月25日';
        } else {
            return '2025年9月25日';
        }
    }
}

// 创建全局实例
window.ConsumeDataManager = new ConsumeDataManager();