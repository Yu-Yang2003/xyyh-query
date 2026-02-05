// 消费记录数据管理
const ConsumeDataManager = {
    // 按时间段组织的消费记录数据
    // 【录入最新数据的位置】在这里添加新的时间段和数据
    data: {
       /* "第五轮拍卖": {
            statsRange: "2026年2月 ~ 2026年4月", // 【需要录入拍卖的统计范围】
            auctionTime: "2026年1月10日", // 【需要录入拍卖时间】
            records: [
                {bidder: "狼", item: "单人拍立得-小卡妆造", price: 5},
                {bidder: "羽羊", item: "单人拍立得-小卡妆造", price:5}
            ]
        },*/
        "第四轮拍卖": {
            statsRange: "2025年11月 ~ 2026年1月", // 【需要录入拍卖的统计范围】
            auctionTime: "不出意外的话应该在2026年2月的某一天", // 【需要录入拍卖时间】
            records: [
                {bidder: "xyy", item: "单人拍立得-小卡妆造", price: 5},
                {bidder: "xyy", item: "单人拍立得-小卡妆造", price:5},
             //   {bidder: "羽羊", item: "单人拍立得-小卡妆造", price:1},
             //   {bidder: "狼", item: "双人拍立得-小卡妆造 with.诅咒", price:2},
            ]
        },
        "第三轮拍卖": {
            statsRange: "2025年9月 ~ 2025年10月", // 【需要录入拍卖的统计范围】
            auctionTime: "2025年11月10日", // 【需要录入拍卖时间】
            records: [
                {bidder: "用户91063", item: "单人拍立得-小卡妆造", price: 5},
                {bidder: "喵喵", item: "单人拍立得-白天鹅妆造", price: 10},
                {bidder: "小咩不乖", item: "单人拍立得-假面妆造抱花", price: 10},
                {bidder: "pa寶", item: "双人拍立得-万圣妆造with.牛肉干", price: 10},
                {bidder: "peach", item: "双人拍立得-表演赛妆造with.囚徒", price: 20},
                {bidder: "王哈哈", item: "单人拍立得-生日花花妆造", price: 10},
                {bidder: "啵啵", item: "双人拍立得-with.果冻", price: 10},
                {bidder: "在下風箏最高", item: "双人拍立得-with.六六", price: 8},
                {bidder: "羽羊", item: "单人拍立得-粉红花花", price: 9},
                {bidder: "喵喵", item: "双人拍立得-with.耿许儿", price: 10},
                {bidder: "王哈哈", item: "双人拍立得-古装with.鲸鱼", price: 8},
                {bidder: "cyannn", item: "双人拍立得-扫地with.囚徒", price: 10},
                {bidder: "peach", item: "单人拍立得-电影首映礼", price: 20},
                {bidder: "喵喵", item: "双人拍立得-小卡妆造with.荣耀", price: 10},
                {bidder: "北錚", item: "单人拍立得-挪威", price: 10},
                {bidder: "小小小小車", item: "双人拍立得-S18表演赛妆造with.郭小炜", price: 8},
                {bidder: "peach", item: "双人拍立得-S18表演赛妆造with.JY", price: 18},
                {bidder: "Ghostyu", item: "嘴硬开瓶器", price: 1},
                {bidder: "沫笙", item: "嘴硬开瓶器", price: 1},
                {bidder: "木魚喂喂喂", item: "嘴硬开瓶器", price: 1}
            ]
        },
        "第二轮拍卖": {
            statsRange: "2025年7月 ~ 2025年8月", // 【需要录入拍卖的统计范围】
            auctionTime: "2025年9月14日", // 【需要录入拍卖时间】
            records: [
                {bidder: "pula", item: "to签拍立得-年会妆造", price: 8},
                {bidder: "啵啵", item: "to签拍立得-泰国妆造", price: 15},
                {bidder: "小咩不乖", item: "to签拍立得-wn妆造", price: 18},
                {bidder: "peach", item: "to签拍立得-团综妆造", price: 34},
                {bidder: "羽若有約", item: "双人拍立得-团建with.饱嗝", price: 4},
                {bidder: "北錚", item: "双人拍立得-with.鬼鬼", price: 4},
                {bidder: "狼", item: "双人拍立得-with.彭彭", price: 5},
                {bidder: "啵啵", item: "单人拍立得-泳池边", price: 14},
                {bidder: "在下風筝最高", item: "双人拍立得-团建with.Bobby", price: 1},
                {bidder: "羽羊", item: "单人拍立得-红色上衣", price: 14},
                {bidder: "狼", item: "双人拍立得-with.翼风", price: 8},
                {bidder: "狼", item: "双人拍立得-with.KS", price: 10},
                {bidder: "PA寶", item: "单人拍立得-眼镜花边", price: 25},
                {bidder: "在下風筝最高", item: "多人拍立得-四大师", price: 6},
                {bidder: "用戶91063", item: "单人拍立得-挪威街头", price: 9},
                {bidder: "用戶91063", item: "单人拍立得-三亚花边", price: 8},
                {bidder: "樓總", item: "双人拍立得-古装with.鲸鱼", price: 23},
                {bidder: "歡喜", item: "单人拍立得-三亚游艇", price: 7},
                {bidder: "pula", item: "单人拍立得-男装古装", price: 8},
                {bidder: "在下風筝最高", item: "双人拍立得-with.鲸鱼", price: 5},
                {bidder: "PA寶", item: "单人拍立得-游轮", price: 12},
                {bidder: "cyannn", item: "双人拍立得-双人with.陈明峻", price: 6},
                {bidder: "樂樂", item: "单人拍立得-百强第一", price: 7},
                {bidder: "在下風筝最高", item: "双人拍立得-双人with.荣耀", price: 7},
                {bidder: "小咩不乖", item: "单人拍立得-挪威夜间", price: 8},
                {bidder: "用戶91063", item: "单人拍立得-wn妆造", price: 6},
                {bidder: "在下風筝最高", item: "单人拍立得-挪威红房", price: 8}
            ]
        },
        "第一轮拍卖": {
            statsRange: "2025年5月 ~ 2025年6月", // 【需要录入拍卖的统计范围】
            auctionTime: "2025年7月3日", // 【需要录入拍卖时间】
            records: [
                {bidder: "用戶91063", item: "单人拍立得-小卡妆造", price: 4},
                {bidder: "狼", item: "双人拍立得-小卡妆造 with.李斯", price: 1},
                {bidder: "沈kk", item: "双人拍立得-小卡妆造 with.一只大虾", price: 2},
                {bidder: "小浣熊", item: "单人拍立得-wn妆造", price: 6},
                {bidder: "沈kk", item: "双人拍立得-with.鲸鱼", price: 2},
                {bidder: "小浣熊", item: "拍立得-小师赛全员", price: 12},
                {bidder: "用戶91063", item: "双人拍立得-with.囚徒", price: 6},
                {bidder: "羽若有約", item: "双人拍立得-小卡妆造 with.郭小炜", price: 6},
                {bidder: "Ghostyu", item: "双人拍立得-小卡妆造 with.荣耀", price: 4},
                {bidder: "啵啵", item: "双人拍立得-with.鲸鱼 泡泡玛特", price: 8},
                {bidder: "lucas", item: "双人拍立得-with.少帮主", price: 5},
                {bidder: "樓總", item: "单人拍立得-京小Cos局妆造", price: 10},
                {bidder: "lucas", item: "拍立得-挪威全员", price: 12},
                {bidder: "lucas", item: "嘴硬开瓶器", price: 1},
                {bidder: "小小小小車", item: "嘴硬开瓶器", price: 1},
                {bidder: "笙歌落", item: "点歌券", price: 3},
                {bidder: "PA寶", item: "单人拍立得-挪威", price: 10}
            ]
        },
    },


    // 获取所有时间段
    getPeriods: function() {
        return Object.keys(this.data);
    },

    // 获取特定时间段的数据
    getDataByPeriod: function(period) {
        const periodData = this.data[period];
        return periodData ? periodData.records : [];
    },

    // 获取特定时间段的统计范围
    getStatsRangeByPeriod: function(period) {
        const periodData = this.data[period];
        return periodData ? periodData.statsRange : "";
    },

    // 获取特定时间段的拍卖时间
    getAuctionTimeByPeriod: function(period) {
        const periodData = this.data[period];
        return periodData ? periodData.auctionTime : "";
    },

    // 添加新时间段
    addPeriod: function(periodName, statsRange, auctionTime, records = []) {
        if (!this.data[periodName]) {
            this.data[periodName] = {
                statsRange: statsRange,
                auctionTime: auctionTime,
                records: records
            };
            return true;
        }
        return false; // 时间段已存在
    },

    // 向现有时间段添加新记录
    addRecordsToPeriod: function(periodName, newRecords) {
        if (this.data[periodName]) {
            this.data[periodName].records = [...this.data[periodName].records, ...newRecords];
            return true;
        }
        return false; // 时间段不存在
    },

    // 获取第一个时间段（默认显示）
    getDefaultPeriod: function() {
        const periods = this.getPeriods();
        return periods.length > 0 ? periods[0] : null;
    },

    // 获取最新时间段
    getLatestPeriod: function() {
        const periods = this.getPeriods();
        if (periods.length === 0) return null;

        // 排序逻辑优化
        periods.sort((a, b) => {
            const getRoundNumber = (str) => {
                const match = str.match(/第(.+?)轮拍卖/);
                if (!match) return 0;

                const roundText = match[1];

                // 动态解析中文数字
                const parseChineseNumber = (text) => {
                    const units = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
                    const tens = ["", "十"];

                    let result = 0;

                    // 处理“十”开头的情况（如“十一”、“十二”）
                    if (text.startsWith("十")) {
                        result += 10;
                        text = text.slice(1); // 去掉“十”
                    }

                    // 分别处理十位和个位
                    for (let i = 0; i < text.length; i++) {
                        const char = text[i];
                        const unitIndex = units.indexOf(char);
                        const tenIndex = tens.indexOf(char);

                        if (unitIndex !== -1) {
                            result += unitIndex;
                        } else if (tenIndex !== -1 && i === 0) {
                            result += tenIndex * 10;
                        }
                    }

                    return result || parseInt(text) || 0;
                };

                return parseChineseNumber(roundText);
            };

            return getRoundNumber(b) - getRoundNumber(a); // 降序排列
        });

        return periods[0]; // 返回最新的时间段
    },

    // 新增方法：根据昵称查找用户（不区分大小写）
    findUserByNickname: function(nickname) {
        const lowerNickname = nickname.toLowerCase(); // 将输入昵称转为小写
        for (const period in this.data) {
            const records = this.data[period].records;
            for (const record of records) {
                if (record.bidder.toLowerCase() === lowerNickname) {
                    return record; // 找到匹配项则返回
                }
            }
        }
        return null; // 未找到匹配项
    }
};