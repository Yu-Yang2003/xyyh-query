// 消费记录数据管理
const ConsumeDataManager = {
    // 按时间段组织的消费记录数据
    // 【录入最新数据的位置】在这里添加新的时间段和数据
    data: {
        "第五轮拍卖": {
            statsRange: "2026年3月 ~ 2026年5月", // 【需要录入拍卖的统计范围】
            auctionTime: "2025年6月22日", // 【需要录入拍卖时间】
            records: [
                { bidder: "北铮", item: "单人拍立得-wn妆造", price: 6 },
                { bidder: "狼", item: "单人拍立得-挪威大山", price: 7 },
                { bidder: "在下风筝最高", item: "单人拍立得-紫色旗袍", price: 7 },
                { bidder: "啵啵小号", item: "单人拍立得-白色护城河", price: 13 },
                { bidder: "呼呼哈嘿嘿", item: "单人拍立得-太阳女神头", price: 7 },
                { bidder: "OscarLu", item: "单人拍立得-S18表演赛", price: 30 },
                { bidder: "小咩不乖", item: "单人拍立得-状元郎", price: 8 },
                { bidder: "低语", item: "单人拍立得-时尚芭莎", price: 20 },
                { bidder: "pula", item: "单人拍立得-港迪", price: 13 },
                { bidder: "烟锁秦楼", item: "盲盒拍立得-万圣节妆造", price: 5 },
                { bidder: "默", item: "盲盒拍立得-年度舞台", price: 5 },
                { bidder: "沬笙", item: "盲盒拍立得-年度红毯", price: 5 },
                { bidder: "lollipop", item: "盲盒拍立得-年度红毯2.0", price: 5 },
                { bidder: "羽羊", item: "盲盒拍立得-京小三亚黑夜", price: 5 },
                { bidder: "小咩不乖", item: "单人拍立得-年度舞台2.0", price: 16 },
                { bidder: "啵啵", item: "单人拍立得-逆水寒妆造", price: 15 },
                { bidder: "羽羊", item: "单人拍立得-白色护城河2.0", price: 11 },
                { bidder: "peach", item: "单人拍立得-年度活动写真", price: 20 },
                { bidder: "peach", item: "单人拍立得-年度视频", price: 29 },
                { bidder: "啵啵", item: "单人拍立得-香港街头", price: 12 },
                { bidder: "peach", item: "单人拍立得-三亚游轮", price: 15 },
                { bidder: "啵啵", item: "单人拍立得-精灵女王", price: 15 },
                { bidder: "汉堡怪兽", item: "单人拍立得-黑色旗袍", price: 11 },
                { bidder: "用户91063", item: "单人拍立得-逆水寒妆造2.0", price: 16 },
                { bidder: "沬笙", item: "单人拍立得-25年大师赛年会", price: 12 },
                { bidder: "柯言", item: "嘴硬开瓶器-", price: 1 },
                { bidder: "柯言", item: "盲盒拍立得-素雅写真", price: 5 },
                { bidder: "pula", item: "盲盒拍立得-黑色洛丽塔", price: 5 },
                { bidder: "潜龙勿用", item: "盲盒拍立得-暗黑逆水寒", price: 5 },
                { bidder: "用户91063", item: "盲盒拍立得-挪威街头", price: 5 },
                { bidder: "奇迹卜卜", item: "盲盒拍立得-百强第一", price: 5 },
                { bidder: "Alixy", item: "盲盒拍立得-青春女大", price: 5 },
                { bidder: "北铮", item: "盲盒拍立得-团综舞台", price: 5 },
                { bidder: "小咩不乖", item: "盲盒拍立得-穿貂贵妇", price: 5 },
                { bidder: "ismile", item: "盲盒拍立得-S21表演赛day2", price: 5 },
                { bidder: "啵啵小号", item: "盲盒拍立得-苹果写真", price: 5 }
            ]
        },
        "第四轮拍卖": {
            statsRange: "2025年11月 ~ 2026年2月",
            auctionTime: "2025年3月14日",
            records: [ // 修复：添加了缺失的数组括号
                { bidder: "樂樂", item: "单人拍立得-京小宣传片", price: 10 },
                { bidder: "兜兜轉轉", item: "单人拍立得-白衣服lulu脸", price: 10 },
                { bidder: "啵啵", item: "单人拍立得-花神", price: 15 },
                { bidder: "peach", item: "单人拍立得-眼镜棕衣", price: 10 },
                { bidder: "peach", item: "单人拍立得-狼美人", price: 25 },
                { bidder: "pa寶", item: "单人拍立得-眼镜黑色露肩", price: 10 },
                { bidder: "烟鎖秦樓", item: "单人拍立得-斜肩旗袍", price: 9 },
                { bidder: "cyannn", item: "盲盒礼物-S21表演赛Day1拍立得", price: 1 },
                { bidder: "兜兜轉轉", item: "盲盒礼物-tangle", price: 1 },
                { bidder: "樂樂", item: "盲盒礼物-蓝色泡澡球", price: 1 },
                { bidder: "Alixy", item: "盲盒礼物-暴富相框", price: 1 },
                { bidder: "疯小伙", item: "盲盒礼物-三亚度假拍立得", price: 1 },
                { bidder: "cyannn", item: "单人拍立得-粉红花花", price: 8 },
                { bidder: "羽羊", item: "单人拍立得-狼美人2.0", price: 19 },
                { bidder: "王哈哈", item: "单人拍立得-黑色洛丽塔", price: 11 },
                { bidder: "啵啵", item: "单人拍立得-S21表演赛Day2拍立得", price: 12 },
                { bidder: "小咩不乖", item: "单人拍立得-粉色旗袍", price: 10 },
                { bidder: "狂戀苦艾", item: "单人拍立得-泰国粉衣", price: 10 },
                { bidder: "狂戀苦艾", item: "单人拍立得-预言家妆造", price: 10 },
                { bidder: "狂戀苦艾", item: "单人拍立得-线下舞台", price: 12 },
                { bidder: "兜兜轉轉", item: "单人拍立得-百强第一", price: 10 },
                { bidder: "狂戀苦艾", item: "单人拍立得-紫色连衣裙", price: 15 },
                { bidder: "哥本哈根的貓", item: "盲盒礼物-挪威", price: 1 },
                { bidder: "狼", item: "盲盒礼物-三亚度假拍立得2.0", price: 1 },
                { bidder: "奇迹卜卜", item: "盲盒礼物-布丁狗发箍&拍立得", price: 1 },
                { bidder: "黑豆豆奶", item: "盲盒礼物-红苹果拍立得", price: 1 },
                { bidder: "白羊", item: "盲盒礼物-泡澡球", price: 1 },
                { bidder: "羽羊", item: "单人拍立得-泰妆", price: 10 },
                { bidder: "pa寶", item: "单人拍立得-比心", price: 10 },
                { bidder: "peach", item: "单人拍立得-头像写真", price: 19 },
                { bidder: "用戶91063", item: "单人拍立得-爱心花边", price: 10 },
                { bidder: "喵喵", item: "单人拍立得-泰妆2.0", price: 9 },
                { bidder: "狂戀苦艾", item: "单人拍立得-神女妆造", price: 15 },
                { bidder: "ismile", item: "盲盒礼物-巧克力和玲娜贝儿", price: 1 },
                { bidder: "狂戀苦艾", item: "盲盒礼物-可爱厨房帽&拍立得", price: 0 },
                { bidder: "会发光的溜溜酱", item: "盲盒礼物-应援棒", price: 1 },
                { bidder: "nini", item: "盲盒礼物-挪威红房子拍立得", price: 1 },
                { bidder: "peach", item: "单人拍立得-嘉年华写真", price: 12 },
                { bidder: "peach", item: "单人拍立得-港迪", price: 15 },
                { bidder: "cyannn", item: "单人拍立得-挪威2.0", price: 11 },
                { bidder: "烟鎖秦樓", item: "单人拍立得-百强第一2.0", price: 10 },
                { bidder: "兜兜轉轉", item: "单人拍立得-白衣姐姐比心", price: 10 },
                { bidder: "羽羊", item: "盲盒礼物-66红包", price: 0 },
                { bidder: "pa寶", item: "单人拍立得-团综", price: 10 },
                { bidder: "啵啵", item: "单人拍立得-富贵小姐", price: 10 },
                { bidder: "路人甲乙丙丁", item: "单人拍立得-香港街头", price: 14 },
                { bidder: "涼城淺夢", item: "单人拍立得-港迪2.0", price: 10 },
                { bidder: "亦洵", item: "盲盒礼物-手工香皂", price: 1 },
                { bidder: "小吊梨汤", item: "盲盒礼物-彩虹色tangle", price: 0 },
                { bidder: "北錚", item: "盲盒礼物-S21表演赛Day2拍立得2.0", price: 0 },
                { bidder: "用戶91063", item: "盲盒礼物-万圣节妆造", price: 1 },
                { bidder: "做咩呀", item: "盲盒礼物-手工香皂2.0", price: 1 },
                { bidder: "pa寶", item: "盲盒礼物-团综2.0", price: 1 },
                { bidder: "亦洵", item: "盲盒礼物-泡澡球", price: 0 },
                { bidder: "桔悠悠", item: "盲盒礼物-泡澡球", price: 0 },
                { bidder: "默", item: "盲盒礼物-泡澡球", price: 0 },
                { bidder: "sico魚子", item: "盲盒礼物-写真拍立得", price: 1 }
            ]
        },
        "第三轮拍卖": {
            statsRange: "2025年9月 ~ 2025年10月",
            auctionTime: "2025年11月10日",
            records: [
                { bidder: "用户91063", item: "单人拍立得-小卡妆造", price: 5 },
                { bidder: "喵喵", item: "单人拍立得-白天鹅妆造", price: 10 },
                { bidder: "小咩不乖", item: "单人拍立得-假面妆造抱花", price: 10 },
                { bidder: "pa寶", item: "双人拍立得-万圣妆造with.牛肉干", price: 10 },
                { bidder: "peach", item: "双人拍立得-表演赛妆造with.囚徒", price: 20 },
                { bidder: "王哈哈", item: "单人拍立得-生日花花妆造", price: 10 },
                { bidder: "啵啵", item: "双人拍立得-with.果冻", price: 10 },
                { bidder: "在下風箏最高", item: "双人拍立得-with.六六", price: 8 },
                { bidder: "羽羊", item: "单人拍立得-粉红花花", price: 9 },
                { bidder: "喵喵", item: "双人拍立得-with.耿许儿", price: 10 },
                { bidder: "王哈哈", item: "双人拍立得-古装with.鲸鱼", price: 8 },
                { bidder: "cyannn", item: "双人拍立得-扫地with.囚徒", price: 10 },
                { bidder: "peach", item: "单人拍立得-电影首映礼", price: 20 },
                { bidder: "喵喵", item: "双人拍立得-小卡妆造with.荣耀", price: 10 },
                { bidder: "北錚", item: "单人拍立得-挪威", price: 10 },
                { bidder: "小小小小車", item: "双人拍立得-S18表演赛妆造with.郭小炜", price: 8 },
                { bidder: "peach", item: "双人拍立得-S18表演赛妆造with.JY", price: 18 },
                { bidder: "Ghostyu", item: "嘴硬开瓶器", price: 1 },
                { bidder: "沫笙", item: "嘴硬开瓶器", price: 1 },
                { bidder: "木魚喂喂喂", item: "嘴硬开瓶器", price: 1 }
            ]
        },
        "第二轮拍卖": {
            statsRange: "2025年7月 ~ 2025年8月",
            auctionTime: "2025年9月14日",
            records: [
                { bidder: "pula", item: "to签拍立得-年会妆造", price: 8 },
                { bidder: "啵啵", item: "to签拍立得-泰国妆造", price: 15 },
                { bidder: "小咩不乖", item: "to签拍立得-wn妆造", price: 18 },
                { bidder: "peach", item: "to签拍立得-团综妆造", price: 34 },
                { bidder: "羽若有約", item: "双人拍立得-团建with.饱嗝", price: 4 },
                { bidder: "北錚", item: "双人拍立得-with.鬼鬼", price: 4 },
                { bidder: "狼", item: "双人拍立得-with.彭彭", price: 5 },
                { bidder: "啵啵", item: "单人拍立得-泳池边", price: 14 },
                { bidder: "在下風筝最高", item: "双人拍立得-团建with.Bobby", price: 1 },
                { bidder: "羽羊", item: "单人拍立得-红色上衣", price: 14 },
                { bidder: "狼", item: "双人拍立得-with.翼风", price: 8 },
                { bidder: "狼", item: "双人拍立得-with.KS", price: 10 },
                { bidder: "PA寶", item: "单人拍立得-眼镜花边", price: 25 },
                { bidder: "在下風筝最高", item: "多人拍立得-四大师", price: 6 },
                { bidder: "用戶91063", item: "单人拍立得-挪威街头", price: 9 },
                { bidder: "用戶91063", item: "单人拍立得-三亚花边", price: 8 },
                { bidder: "樓總", item: "双人拍立得-古装with.鲸鱼", price: 23 },
                { bidder: "歡喜", item: "单人拍立得-三亚游艇", price: 7 },
                { bidder: "pula", item: "单人拍立得-男装古装", price: 8 },
                { bidder: "在下風筝最高", item: "双人拍立得-with.鲸鱼", price: 5 },
                { bidder: "PA寶", item: "单人拍立得-游轮", price: 12 },
                { bidder: "cyannn", item: "双人拍立得-双人with.陈明峻", price: 6 },
                { bidder: "樂樂", item: "单人拍立得-百强第一", price: 7 },
                { bidder: "在下風筝最高", item: "双人拍立得-双人with.荣耀", price: 7 },
                { bidder: "小咩不乖", item: "单人拍立得-挪威夜间", price: 8 },
                { bidder: "用戶91063", item: "单人拍立得-wn妆造", price: 6 },
                { bidder: "在下風筝最高", item: "单人拍立得-挪威红房", price: 8 }
            ]
        },
        "第一轮拍卖": {
            statsRange: "2025年5月 ~ 2025年6月",
            auctionTime: "2025年7月3日",
            records: [
                { bidder: "用戶91063", item: "单人拍立得-小卡妆造", price: 4 },
                { bidder: "狼", item: "双人拍立得-小卡妆造 with.李斯", price: 1 },
                { bidder: "沈kk", item: "双人拍立得-小卡妆造 with.一只大虾", price: 2 },
                { bidder: "小浣熊", item: "单人拍立得-wn妆造", price: 6 },
                { bidder: "沈kk", item: "双人拍立得-with.鲸鱼", price: 2 },
                { bidder: "小浣熊", item: "拍立得-小师赛全员", price: 12 },
                { bidder: "用戶91063", item: "双人拍立得-with.囚徒", price: 6 },
                { bidder: "羽若有約", item: "双人拍立得-小卡妆造 with.郭小炜", price: 6 },
                { bidder: "Ghostyu", item: "双人拍立得-小卡妆造 with.荣耀", price: 4 },
                { bidder: "啵啵", item: "双人拍立得-with.鲸鱼 泡泡玛特", price: 8 },
                { bidder: "lucas", item: "双人拍立得-with.少帮主", price: 5 },
                { bidder: "樓總", item: "单人拍立得-京小Cos局妆造", price: 10 },
                { bidder: "lucas", item: "拍立得-挪威全员", price: 12 },
                { bidder: "lucas", item: "嘴硬开瓶器", price: 1 },
                { bidder: "小小小小車", item: "嘴硬开瓶器", price: 1 },
                { bidder: "笙歌落", item: "点歌券", price: 3 },
                { bidder: "PA寶", item: "单人拍立得-挪威", price: 10 }
            ]
        },
    },

    // 中文数字映射表（提取为常量避免重复创建）
    _chineseNumberMap: {
        '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
        '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
        '十一': 11, '十二': 12, '十三': 13, '十四': 14, '十五': 15
    },

    // 获取所有时间段
    getPeriods() {
        return Object.keys(this.data);
    },

    // 获取特定时间段的数据
    getDataByPeriod(period) {
        return this.data[period]?.records || [];
    },

    // 获取特定时间段的统计范围
    getStatsRangeByPeriod(period) {
        return this.data[period]?.statsRange || "";
    },

    // 获取特定时间段的拍卖时间
    getAuctionTimeByPeriod(period) {
        return this.data[period]?.auctionTime || "";
    },

    // 添加新时间段
    addPeriod(periodName, statsRange, auctionTime, records = []) {
        if (this.data[periodName]) {
            console.warn(`时间段 "${periodName}" 已存在，添加失败。`);
            return false;
        }
        this.data[periodName] = { statsRange, auctionTime, records };
        return true;
    },

    // 向现有时间段添加新记录
    addRecordsToPeriod(periodName, newRecords) {
        if (!this.data[periodName]) {
            console.warn(`时间段 "${periodName}" 不存在，添加记录失败。`);
            return false;
        }
        this.data[periodName].records.push(...newRecords);
        return true;
    },

    // 获取第一个时间段（默认显示）
    getDefaultPeriod() {
        const periods = this.getPeriods();
        return periods.length > 0 ? periods[0] : null;
    },

    // 获取最新时间段
    getLatestPeriod() {
        const periods = this.getPeriods();
        if (periods.length === 0) return null;

        // 使用映射表进行高效解析，避免复杂的正则与循环
        const getRoundNumber = (str) => {
            const match = str.match(/第(.+?)轮拍卖/);
            if (!match) return 0;
            return this._chineseNumberMap[match[1]] || parseInt(match[1], 10) || 0;
        };

        // 拷贝一份数组进行排序，避免污染原数据结构
        return [...periods].sort((a, b) => getRoundNumber(b) - getRoundNumber(a))[0];
    },

    // 根据昵称查找用户（不区分大小写）
    findUserByNickname(nickname) {
        const lowerNickname = nickname.toLowerCase();
        for (const period in this.data) {
            if (!this.data.hasOwnProperty(period)) continue; // 安全防护
            const records = this.data[period].records;
            for (const record of records) {
                // 防御性编程：防止 bidder 为 undefined/null 导致 toLowerCase 报错
                if (record.bidder && typeof record.bidder === 'string' && record.bidder.toLowerCase() === lowerNickname) {
                    return record;
                }
            }
        }
        return null;
    }
};
