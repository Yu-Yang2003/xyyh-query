// 当前选中的时间段
let currentPeriod = ConsumeDataManager.getDefaultPeriod();
// 获取最新时间段
let latestPeriod = ConsumeDataManager.getLatestPeriod();
// 分页相关变量
const itemsPerPage = 10;
let currentPage = 1;
let totalPages = Math.ceil(ConsumeDataManager.getDataByPeriod(currentPeriod).length / itemsPerPage);

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    populatePeriodSelector();
    displayConsumeTable(currentPage);
    renderPagination();
    updateStatsRangeDisplay(); // 更新标题下面的统计范围显示
    updateStatInfo(); // 更新表格下方的拍卖时间显示
    updateParticipationInfo(); // 更新表格下方的参与信息显示
    
    // 初始化标题和最新轮提示
    const titleText = isLatestPeriod(currentPeriod) ? '本轮竞拍明细' : `${currentPeriod} 竞拍明细`;
    document.getElementById('periodTitleText').textContent = titleText;
    const indicator = document.getElementById('latestPeriodIndicator');
    indicator.style.display = isLatestPeriod(currentPeriod) ? 'inline-block' : 'none';
    
    // 绑定分页按钮事件
    document.getElementById('prevPage').addEventListener('click', prevPage);
    document.getElementById('nextPage').addEventListener('click', nextPage);

    // 移除移动端滑动事件监听（不再支持滑动切换表格）
    // addSwipeListener(); 
});

// 填充时间段选择器
function populatePeriodSelector() {
    const periodSelect = document.getElementById('periodSelect');
    const periods = ConsumeDataManager.getPeriods();
    
    periods.forEach(period => {
        const option = document.createElement('option');
        option.value = period;
        option.textContent = period;
        if (period === currentPeriod) {
            option.selected = true;
        }
        periodSelect.appendChild(option);
    });
}

// 切换时间段
function changePeriod() {
    currentPeriod = document.getElementById('periodSelect').value;
    currentPage = 1;
    totalPages = Math.ceil(ConsumeDataManager.getDataByPeriod(currentPeriod).length / itemsPerPage);
    
    // 更新标题和最新轮提示
    const titleText = isLatestPeriod(currentPeriod) ? '本轮竞拍明细' : `${currentPeriod} 竞拍明细`;
    document.getElementById('periodTitleText').textContent = titleText;
    const indicator = document.getElementById('latestPeriodIndicator');
    indicator.style.display = isLatestPeriod(currentPeriod) ? 'inline-block' : 'none';
    
    displayConsumeTable(currentPage);
    renderPagination();
    updateStatsRangeDisplay(); // 更新标题下面的统计范围显示
    updateStatInfo(); // 更新表格下方的拍卖时间显示
    updateParticipationInfo(); // 更新表格下方的参与信息显示

    // 滚动到表格最左侧（新增逻辑）
    scrollToTableStart();
}

// 显示统计范围（现在放在标题下面）
function updateStatsRangeDisplay() {
    const statsRangeElement = document.getElementById('statsRange');
    if (currentPeriod) {
        const statsRange = ConsumeDataManager.getStatsRangeByPeriod(currentPeriod);
        statsRangeElement.textContent = `本轮印花统计范围 :  ${statsRange}`;
    } else {
        statsRangeElement.textContent = '';
    }
}

// 更新统计信息（现在只显示拍卖时间，靠右显示）
function updateStatInfo() {
    const statInfoElement = document.getElementById('statInfo');
    if (currentPeriod) {
        const auctionTime = ConsumeDataManager.getAuctionTimeByPeriod(currentPeriod);
        statInfoElement.innerHTML = `本轮拍卖时间 :  ${auctionTime}`; // 只显示拍卖时间
    } else {
        statInfoElement.textContent = '';
    }
}

// 新增：更新参与信息（记录数和参与人数）
function updateParticipationInfo() {
    const participationInfoElement = document.getElementById('participationInfo');
    const data = ConsumeDataManager.getDataByPeriod(currentPeriod);
    
    if (data && data.length > 0) {
        // 计算参与人数（去重后的竞拍成功者数量）
        const uniqueBidders = new Set(data.map(record => record.bidder));
        participationInfoElement.textContent = `共${data.length}条记录，${uniqueBidders.size}人参与`;
    } else {
        participationInfoElement.textContent = '共0条记录，0人参与';
    }
}

// 显示消费记录表格（带分页）
function displayConsumeTable(page = 1) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = ConsumeDataManager.getDataByPeriod(currentPeriod).slice(startIndex, endIndex);
    
    const consumeTableBody = document.getElementById('consumeTableBody');
    
    // 根据是否为最新时间段调整表头和列数
    adjustTableHeaders();
    
    if (pageData.length === 0) {
        const colSpan = isLatestPeriod(currentPeriod) ? 4 : 3;
        consumeTableBody.innerHTML = `
            <tr>
                <td colspan="${colSpan}" style="text-align: center; color: #888; padding: 40px;">暂无消费记录</td>
            </tr>
        `;
        return;
    }

    let html = '';
    pageData.forEach((record, index) => {
        const globalIndex = startIndex + index + 1; // 全局序号
        if (isLatestPeriod(currentPeriod)) {
            // 最新时间段显示完整信息（包括价格）
            html += `
                <tr>
                    <td class="index-cell">${globalIndex}</td>
                    <td class="bidder-cell">${escapeHtml(toSimplified(record.bidder))}</td>
                    <td class="item-cell">${escapeHtml(record.item)}</td>
                    <td class="price-cell">${record.price}</td>
                </tr>
            `;
        } else {
            // 非最新时间段不显示价格
            html += `
                <tr>
                    <td class="index-cell">${globalIndex}</td>
                    <td class="bidder-cell">${escapeHtml(toSimplified(record.bidder))}</td>
                    <td class="item-cell">${escapeHtml(record.item)}</td>
                </tr>
            `;
        }
    });
    consumeTableBody.innerHTML = html;
    
    // 更新参与信息
    updateParticipationInfo();
}

// 调整表头显示
function adjustTableHeaders() {
    const priceHeader = document.getElementById('priceHeader');
    
    if (isLatestPeriod(currentPeriod)) {
        // 显示价格列
        priceHeader.style.display = '';
        // 更新表头文本
        priceHeader.textContent = '最终成交印花/个';
    } else {
        // 隐藏价格列
        priceHeader.style.display = 'none';
    }
}

// 判断是否为最新时间段
function isLatestPeriod(period) {
    return period === latestPeriod;
}

// 生成分页控件
function renderPagination() {
    const paginationContainer = document.getElementById('paginationContainer');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const pageInfo = document.getElementById('pageInfo');
    
    // 如果当前时段没有数据，则隐藏分页
    if (!ConsumeDataManager.getDataByPeriod(currentPeriod) || ConsumeDataManager.getDataByPeriod(currentPeriod).length === 0) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    // 显示分页容器
    paginationContainer.style.display = 'flex';
    
    // 更新按钮状态
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    
    // 更新页面信息
    pageInfo.textContent = `第 ${currentPage} 页，共 ${totalPages} 页`;
    
    // 生成页码按钮
    pageNumbersContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.onclick = () => goToPage(i);
        pageNumbersContainer.appendChild(pageNumber);
    }
}

// 跳转到指定页
function goToPage(page) {
    if (page < 1 || page > totalPages || page === currentPage) return;
    currentPage = page;
    displayConsumeTable(currentPage);
    renderPagination();
}

// 上一页
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayConsumeTable(currentPage);
        renderPagination();
    }
}

// 下一页
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayConsumeTable(currentPage);
        renderPagination();
    }
}

// 防止XSS攻击的函数
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// 简繁体转换函数
function toSimplified(text) {
    const traditionalToSimplified = {
                '寶': '宝', '戀': '恋', '樓': '楼', '總': '总', '轉': '转',
                '戶': '户', '鰻': '鳗', '魚': '鱼', '語': '语', '風': '风',
                '爭': '争', '嵐': '岚', '鎖': '锁', '樂': '乐', '開': '开',
                '涼': '凉', '淺': '浅', '夢': '梦', '蝸': '蜗', '車': '车',
                '錚': '铮', '餅': '饼', '羅': '罗', '師': '师', '趙': '赵',
                '歡': '欢', '個': '个', '撈': '捞', '錦': '锦', '時': '时',
                '孫': '孙', '爺': '爷', '盤': '盘', '閃': '闪', '貓': '猫',
                '財': '财', '蘆': '芦', '藍': '蓝', '劉': '刘', '陽': '阳',
                '醬': '酱', '請': '请', '執': '执', '蘿': '萝', '頂': '顶',
                '級': '级', '庫': '库', '飽': '饱', '燒': '烧', '馬': '马',
                '鈴': '铃', '潛': '潜', '龍': '龙', '廣': '广', '東': '东',
                '頭': '头', '緬': '缅', '寧': '宁', '瑤': '瑶', '吳': '吴',
                '彥': '彦', '獅': '狮', '腳': '脚', '飼': '饲', '喪': '丧',
                '錯': '错', '褲': '裤', '無': '无', '尋': '寻', '龜': '龟',
                '鈺': '钰', '緯': '纬', '間': '间', '麼': '么', '鯉': '鲤',
                '畫': '画', '長': '长', '紅': '红', '蓋': '盖', '澆': '浇',
                '達': '达', '愛': '爱', '純': '纯', '團': '团', '鷗': '鸥',
                '護': '护', '導': '导', '彈': '弹', '與': '与', '離': '离',
                '約': '约', '張': '张', '懷': '怀', '湯': '汤', '楊': '杨',
                '學': '学', '飛': '飞', '農': '农', '獲': '获', '獎': '奖',
                '電': '电', '熱': '热', '凱': '凯', '隱': '隐', '攬': '揽',
                '豬': '猪', '盜': '盗', '遺': '遗', '寫': '写', '銘': '铭',
                '韓': '韩', '輝': '辉', '檸': '柠', '門': '门', '衛': '卫',
                '結': '结', '兒': '儿', '薩': '萨', '綠': '绿', '鬥': '斗',
                '單': '单', '獸': '兽', '漢': '汉', '號': '号', '箏': '筝'
    };
    
    return text.split('').map(char => traditionalToSimplified[char] || char).join('');
}

// 添加新时间段的数据（用于维护）
function addNewPeriod(periodName, statsRange, auctionTime, records) {
    if (ConsumeDataManager.addPeriod(periodName, statsRange, auctionTime, records)) {
        // 重新渲染选择器以包含新的时间段
        const periodSelect = document.getElementById('periodSelect');
        const option = document.createElement('option');
        option.value = periodName;
        option.textContent = periodName;
        periodSelect.appendChild(option);
    }
}

// 向现有时间段添加新数据
function addNewRecords(periodName, newRecords) {
    if (ConsumeDataManager.addRecordsToPeriod(periodName, newRecords)) {
        // 如果当前显示的就是这个时间段，则刷新显示
        if (currentPeriod === periodName) {
            totalPages = Math.ceil(ConsumeDataManager.getDataByPeriod(currentPeriod).length / itemsPerPage);
            renderPagination();
            updateParticipationInfo(); // 更新参与信息
        }
    } else {
        console.error(`时间段 "${periodName}" 不存在`);
    }
}

// 滚动到表格最左侧（新增函数）
function scrollToTableStart() {
    const table = document.querySelector('.consume-table'); // 假设表格有一个类名为 consume-table
    if (table) {
        table.scrollLeft = 0;
    }
}