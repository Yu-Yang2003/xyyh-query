// ==================== 印花数据现在从外部文件导入 ====================

// 消费记录数据由外部数据源提供（使用下面统一的更新函数）

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const userDetail = document.getElementById('userDetail');
const detailNickname = document.getElementById('detailNickname');
const stampStats = document.getElementById('stampStats');
const closeDetail = document.getElementById('closeDetail');
const consumeBtnContainer = document.getElementById('consumeBtnContainer'); // 拍卖记录按钮容器

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 完善简繁体转换映射
const traditionalToSimplified = {
    // 常见繁体字转换
    '寶' : '宝', '戀' : '恋', '樓' : '楼', '總' : '总', '轉' : '转',
    '戶' : '户', '鰻' : '鳗', '魚' : '鱼', '語' : '语', '風' : '风',
    '爭' : '争', '嵐' : '岚', '鎖' : '锁', '樂' : '乐', '開' : '开',
    '涼' : '凉', '淺' : '浅', '夢' : '梦', '蝸' : '蜗', '車' : '车',
    '錚' : '铮', '餅' : '饼', '羅' : '罗', '師' : '师', '趙' : '赵',
    '歡' : '欢', '個' : '个', '撈' : '捞', '錦' : '锦', '時' : '时',
    '孫' : '孙', '爺' : '爷', '盤' : '盘', '閃' : '闪', '貓' : '猫',
    '財' : '财', '蘆' : '芦', '藍' : '蓝', '劉' : '刘', '陽' : '阳',
    '醬' : '酱', '請' : '请', '執' : '执', '蘿' : '萝', '頂' : '顶',
    '級' : '级', '庫' : '库', '飽' : '饱', '燒' : '烧', '馬' : '马',
    '鈴' : '铃', '潛' : '潜', '龍' : '龙', '廣' : '广', '東' : '东',
    '頭' : '头', '緬' : '缅', '寧' : '宁', '瑤' : '瑶', '吳' : '吴',
    '彥' : '彦', '獅' : '狮', '腳' : '脚', '飼' : '饲', '喪' : '丧',
    '錯' : '错', '褲' : '裤', '無' : '无', '尋' : '寻', '龜' : '龟',
    '鈺' : '钰', '緯' : '纬', '間' : '间', '麼' : '么', '鯉' : '鲤',
    '畫' : '画', '長' : '长', '紅' : '红', '蓋' : '盖', '澆' : '浇',
    '達' : '达', '愛' : '爱', '純' : '纯', '團' : '团', '鷗' : '鸥',
    '護' : '护', '導' : '导', '彈' : '弹', '與' : '与', '離' : '离',
    '約' : '约', '張' : '张', '懷' : '怀', '湯' : '汤', '楊' : '杨',
    '學' : '学', '飛' : '飞', '農' : '农', '獲' : '获', '獎' : '奖',
    '電' : '电', '熱' : '热', '凱' : '凯', '隱' : '隐', '攬' : '揽',
    '豬' : '猪', '盜' : '盗', '遺' : '遗', '寫' : '写', '銘' : '铭',
    '韓' : '韩', '輝' : '辉', '檸' : '柠', '門' : '门', '衛' : '卫',
    '結' : '结', '兒' : '儿'
};

// 防止XSS攻击的函数
function escapeHtml(text) {
    if(typeof text !== 'string') {
        return '';
    }
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m] || m);
}

// 简繁体转换函数
function toSimplified(text) {
    if(typeof text !== 'string') {
        return '';
    }
    return text.split('').map(char => traditionalToSimplified[char] || char).join('');
}

// 计算每个用户的消费金额
function calculateUserConsumption() {
    // 创建一个对象存储每个用户的消费总额
    const consumptionMap = {};
    
    // 遍历最新时间段的数据
    if (typeof ConsumeDataManager !== 'undefined') {
        const latestPeriod = ConsumeDataManager.getLatestPeriod();
        if(latestPeriod) {
            const latestData = ConsumeDataManager.getDataByPeriod(latestPeriod);
            latestData.forEach(record => {
                const bidder = record.bidder;
                const price = record.price;
                
                if (consumptionMap[bidder]) {
                    consumptionMap[bidder] += price;
                } else {
                    consumptionMap[bidder] = price;
                }
            });
        }
    }
    
    return consumptionMap;
}

// 更新印花数据中的消费记录 - 已改为使用外部数据源
function updateStampDataWithConsumeRecords() {
    // 计算最新时间段的消费记录
    const consumptionMap = calculateUserConsumption();
    
    // 重置所有用户的本轮消费记录
    stampData.forEach(user => {
        user.current_round_used = 0;
    });
    
    // 根据消费记录更新用户的印花消费量
    for (const [bidder, totalConsumption] of Object.entries(consumptionMap)) {
        const userIndex = stampData.findIndex(user => user.nickname === bidder);
        if (userIndex !== -1) {
            // 设置该用户的消费记录
            stampData[userIndex].current_round_used = totalConsumption;
            // 重新计算剩余印花
            stampData[userIndex].current_round_remaining = 
                stampData[userIndex].prev_round_stamps + 
                stampData[userIndex].current_round_earned - 
                stampData[userIndex].current_round_used;
        }
    }
}

// 初始化时更新数据
if (typeof ConsumeDataManager !== 'undefined') {
    updateStampDataWithConsumeRecords();
}

// 搜索函数
function searchUsers() {
    const nickname = searchInput.value.trim();

    if (!nickname) {
        showError('请输入要查询的昵称');
        return;
    }

    if (nickname.length < 1) {
        showError('查询关键词至少需要1个字符');
        return;
    }

    // 验证输入是否包含潜在危险字符
    if (/[<>'"&]/.test(nickname)) {
        showError('输入包含非法字符，请重新输入');
        return;
    }

    // 隐藏提示文字
    const tipsElement = document.querySelector('.tips');
    if (tipsElement) {
        tipsElement.style.display = 'none';
    }

    // 清除上一次的查询结果
    userDetail.style.display = 'none'; // 隐藏详情面板
    
    // 显示加载中
    resultsContainer.innerHTML = `
        <div class="loading" role="status" aria-label="正在搜索中...">
            <p>🔍 正在搜索... "${escapeHtml(toSimplified(nickname))}" ...</p>
        </div>
    `;

    // 模拟网络请求延迟
    setTimeout(() => {
        try {
            // 将搜索词转换为简体
            const simplifiedSearch = toSimplified(nickname.toLowerCase());

            // 在数据中搜索 - 支持更灵活的匹配
            const results = stampData.filter(user => {
                // 将用户昵称转换为简体进行匹配
                const simplifiedNickname = toSimplified(user.nickname.toLowerCase());
                return simplifiedNickname.includes(simplifiedSearch) || 
                       user.nickname.toLowerCase().includes(nickname.toLowerCase()) ||
                       user.nickname.toLowerCase().indexOf(nickname.toLowerCase()) !== -1;
            });

            displaySearchResults(results);

        } catch (error) {
            console.error('搜索时发生错误:', error);
            showError('搜索时发生错误，请稍后重试');
        }
    }, 300);
}

// 对搜索结果排序
function sortResults(results) {
    // 按印花数量降序排列，让用户更容易找到高价值用户
    return results.sort((a, b) => b.current_round_remaining - a.current_round_remaining);
}

// 显示欢迎消息和统计数据
function showWelcomeMessage() {
    // 计算统计数据
    const totalUsers = stampData.length;
    const totalStamps = stampData.reduce((sum, user) => sum + user.current_round_remaining, 0);
    const topUser = stampData.reduce((top, user) => user.current_round_remaining > top.current_round_remaining ? user : top, stampData[0]);
    
    // 更新统计显示
    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('totalStamps').textContent = totalStamps;
    document.getElementById('topUser').textContent = `${toSimplified(topUser.nickname)} (${topUser.current_round_remaining})`;
}

// 显示搜索结果
function displaySearchResults(results) {
    // 先对结果进行排序
    results = sortResults(results);

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty" role="alert" aria-label="未找到匹配的用户">
                <p>😔 未找到匹配的用户</p>
                <p style="margin-top: 10px; font-size: 14px; color: #888;">
                    请尝试输入其他关键词，支持简繁体查询
                </p>
            </div>
        `;
        return;
    }

    if (results.length === 1) {
        // 如果只有一个结果，直接显示详情
        showUserDetail(results[0]);
        return;
    }

    // 多个结果，显示列表
    let html = `
        <div class="tips" style="margin-bottom: 15px;">
            🎯 找到 <strong>${results.length}</strong> 个匹配的用户，
            按拥有印花的数量排序，请点击查看详情：
        </div>
        <ul class="results-list" role="listbox" aria-label="搜索结果列表">
    `;

    results.forEach(user => {
        const simplifiedNickname = toSimplified(user.nickname);
        const hasConsumption = user.current_round_used > 0;
        const userConsumeRecords = getUserConsumeRecords(user.nickname);
        html += `
            <li class="user-item" data-nickname="${escapeHtml(user.nickname)}" role="option" tabindex="0" aria-selected="false">
                <strong>${escapeHtml(simplifiedNickname)}</strong>
                <div style="margin-top: 5px; font-size: 14px; color: #666;">
                    剩余印花: <span style="color: #764ba2; font-weight: bold;">${user.current_round_remaining}</span> |
                    本轮获得: <span style="color: #4CAF50;">${user.current_round_earned}</span>` +
                    (hasConsumption ? ` | 本轮消费: <span style="color: #ff6b6b; font-weight: bold;">${user.current_round_used}</span>` : '') +
                    `
                </div>
                ${hasConsumption ? `
                <div class="consume-details-popup">
                    <div class="consume-popup" style="display: none;">
                        <div style="font-weight: 600; margin-bottom: 8px; color: #2c3e50;">消费详情</div>
                        ${userConsumeRecords.map(record => `
                            <div class="consume-record">
                                <span class="item">${escapeHtml(record.item)}</span>:
                                <span class="price">${record.price}</span>印花
                            </div>
                        `).join('')}
                    </div>
                    <span style="font-size: 12px; color: #888; cursor: help;">鼠标悬停查看消费详情</span>
                </div>` : ''}
            </li>
        `;
    });

    html += '</ul>';
    resultsContainer.innerHTML = html;

    // 添加事件委托和弹窗监听
    attachResultListeners();
}

// 为结果列表添加事件委托和弹窗鼠标监听
function attachResultListeners() {
    // 点击或按回车打开详情
    resultsContainer.addEventListener('click', function (e) {
        const li = e.target.closest('.user-item');
        if (li && resultsContainer.contains(li)) {
            const nick = li.getAttribute('data-nickname');
            if (nick) showUserDetailByNickname(nick);
        }
    });

    resultsContainer.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const li = e.target.closest('.user-item');
            if (li && resultsContainer.contains(li)) {
                const nick = li.getAttribute('data-nickname');
                if (nick) showUserDetailByNickname(nick);
            }
        }
    });

    // 悬停显示消费弹窗
    const popups = resultsContainer.querySelectorAll('.consume-details-popup');
    popups.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const popup = el.querySelector('.consume-popup');
            if (popup) popup.style.display = 'block';
        });
        el.addEventListener('mouseleave', () => {
            const popup = el.querySelector('.consume-popup');
            if (popup) popup.style.display = 'none';
        });
    });
}

// 获取用户的消费记录
function getUserConsumeRecords(nickname) {
    if (typeof ConsumeDataManager !== 'undefined') {
        const latestPeriod = ConsumeDataManager.getLatestPeriod();
        if(latestPeriod) {
            const latestData = ConsumeDataManager.getDataByPeriod(latestPeriod);
            return latestData.filter(record => record.bidder === nickname);
        }
    }
    return [];
}

// 通过昵称显示用户详情
function showUserDetailByNickname(nickname) {
    const user = stampData.find(u => u.nickname === nickname);
    if (user) {
        showUserDetail(user);
    }
}

// 显示用户详情
function showUserDetail(user) {
    // 显示简体字昵称
    detailNickname.textContent = toSimplified(user.nickname);
    detailNickname.setAttribute('aria-label', `用户详情：${toSimplified(user.nickname)}`);

    // 获取用户的消费记录（如果有的话）
    const userConsumeRecords = getUserConsumeRecords(user.nickname);
    const consumeDetailsHtml = userConsumeRecords.length > 0 ? `
        <div class="stat-item" style="grid-column: 1 / -1;">
            <div class="stat-label">消费详情</div>
            <div class="consume-details-popup" style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 5px; border-left: 3px solid var(--accent-color);">
                ${userConsumeRecords.map(record => `
                    <div class="consume-record" style="margin-bottom: 8px; padding: 5px 0; border-bottom: 1px dashed #eee;">
                        <span class="item" style="font-weight: 600; color: var(--dark-text);">${escapeHtml(record.item)}</span>:
                        <span class="price" style="color: var(--accent-color); font-weight: bold;">${record.price}</span>印花
                    </div>
                `).join('')}
            </div>
        </div>` : '';

    stampStats.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">上一轮剩余印花</div>
            <div class="stat-value">${user.prev_round_stamps}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">本轮获得印花</div>
            <div class="stat-value" style="color: #4CAF50;">+${user.current_round_earned}</div>
        </div>
        <div class="stat-item" style="position: relative;">
            <div class="stat-label">本轮消费印花</div>
            <div class="stat-value" style="color: #ff6b6b;">
                -${user.current_round_used}
            </div>
        </div>
        <div class="stat-item" style="background: #f0f7ff;">
            <div class="stat-label">本轮剩余印花</div>
            <div class="stat-value" style="color: #764ba2; font-size: 28px;">
                ${user.current_round_remaining}
            </div>
        </div>
        ${consumeDetailsHtml}
    `;

    // 显示详情面板
    userDetail.style.display = 'block';
    userDetail.setAttribute('aria-hidden', 'false');
    resultsContainer.innerHTML = '';
    
    // 隐藏拍卖消费记录按钮
    if (consumeBtnContainer) {
        consumeBtnContainer.style.display = 'none';
    }
}

// 显示消费详情弹窗
function showConsumePopup(element) {
    const popup = element.querySelector('.consume-popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// 隐藏消费详情弹窗
function hideConsumePopup(element) {
    const popup = element.querySelector('.consume-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// 显示错误
function showError(message) {
    resultsContainer.innerHTML = `
        <div class="error" role="alert" aria-label="错误信息：${message}">
            ❌ ${escapeHtml(message)}
        </div>
    `;
}


// 事件监听
searchBtn.addEventListener('click', searchUsers);

// 使用防抖处理输入事件
const debouncedSearch = debounce(searchUsers, 500);
searchInput.addEventListener('input', debouncedSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // 防止表单提交
        searchUsers();
    }
});

closeDetail.addEventListener('click', () => {
    userDetail.style.display = 'none';
    userDetail.setAttribute('aria-hidden', 'true');
    searchInput.value = '';
    resultsContainer.innerHTML = `
        <div class="empty" aria-label="输入昵称开始查询">
            <p>输入昵称开始查询</p>
        </div>
    `;
    
    // 重新显示提示文字
    const tipsElement = document.querySelector('.tips');
    if (tipsElement) {
        tipsElement.style.display = 'block';
    }
    
    // 重新显示拍卖消费记录按钮
    if (consumeBtnContainer) {
        consumeBtnContainer.style.display = 'block';
    }
});

// 页面加载完成后自动聚焦到搜索框
document.addEventListener('DOMContentLoaded', function() {
    searchInput.focus();
    showWelcomeMessage(); // 显示欢迎消息和统计数据

    // 添加ESC键关闭详情功能
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // 关闭详情面板
            userDetail.style.display = 'none';
            userDetail.setAttribute('aria-hidden', 'true');
            
            // 清空搜索框
            searchInput.value = '';
            
            // 重置结果容器
            resultsContainer.innerHTML = `
                <div class="empty" aria-label="输入昵称开始查询">
                    <p>输入昵称开始查询</p>
                </div>
            `;
            
            // 重新显示提示文字
            const tipsElement = document.querySelector('.tips');
            if (tipsElement) {
                tipsElement.style.display = 'block';
            }
            
            // 重新显示拍卖消费记录按钮
            if (consumeBtnContainer) {
                consumeBtnContainer.style.display = 'block';
            }
        }
    });
});

// 不再使用内联事件，因此不暴露额外全局函数

// 初始状态
resultsContainer.innerHTML = `
    <div class="empty" aria-label="请输入昵称">
        <p>请输入昵称</p>
    </div>
`;