const apiConfig = {
    "voice-api": {
        url: "https://ttsapi.zwei.de.eu.org/tts",
        speakers: {
            "zh-CN-XiaoxiaoNeural": "晓晓",
            "zh-CN-YunxiNeural": "云希",
            "zh-CN-YunjianNeural": "云健",
            "zh-CN-XiaoyiNeural": "晓伊",
            "zh-CN-YunyangNeural": "云扬",
            "zh-CN-XiaochenNeural": "晓辰",
            "zh-CN-XiaochenMultilingualNeural": "晓辰 多语言",
            "zh-CN-XiaohanNeural": "晓涵",
            "zh-CN-XiaomengNeural": "晓梦",
            "zh-CN-XiaomoNeural": "晓墨",
            "zh-CN-XiaoqiuNeural": "晓秋",
            "zh-CN-XiaorouNeural": "晓柔",
            "zh-CN-XiaoruiNeural": "晓睿",
            "zh-CN-XiaoshuangNeural": "晓双",
            "zh-CN-XiaoxiaoDialectsNeural": "晓晓 方言",
            "zh-CN-XiaoxiaoMultilingualNeural": "晓晓 多语言",
            "zh-CN-XiaoyanNeural": "晓颜",
            "zh-CN-XiaoyouNeural": "晓悠",
            "zh-CN-XiaoyuMultilingualNeural": "晓宇 多语言",
            "zh-CN-XiaozhenNeural": "晓甄",
            "zh-CN-YunfengNeural": "云枫",
            "zh-CN-YunhaoNeural": "云皓",
            "zh-CN-YunjieNeural": "云杰",
            "zh-CN-YunxiaNeural": "云夏",
            "zh-CN-YunyeNeural": "云野",
            "zh-CN-YunyiMultilingualNeural": "云逸 多语言",
            "zh-CN-YunzeNeural": "云泽",
            "zh-CN-YunfanMultilingualNeural": "云帆 多语言",
            "zh-CN-YunxiaoMultilingualNeural": "云萧 多语言",
            "zh-CN-guangxi-YunqiNeural": "云奇 广西",
            "zh-CN-henan-YundengNeural": "云登 河南",
            "zh-CN-liaoning-XiaobeiNeural": "晓北 辽宁",
            "zh-CN-liaoning-YunbiaoNeural": "云彪 辽宁",
            "zh-CN-shaanxi-XiaoniNeural": "晓妮 山西",
            "zh-CN-shandong-YunxiangNeural": "云翔 山东",
            "zh-CN-sichuan-YunxiNeural": "云希 四川",
            "zh-HK-HiuMaanNeural": "晓曼 粤语",
            "zh-HK-WanLungNeural": "云龙 粤语",
            "zh-HK-HiuGaaiNeural": "晓佳 粤语",
            "zh-TW-HsiaoChenNeural": "晓臻 台湾",
            "zh-TW-YunJheNeural": "云哲 台湾",
            "zh-TW-HsiaoYuNeural": "晓雨 台湾"
        }
    },
    "lobe-api": {
        url: "https://tts-api.deno.dev/v1/audio/speech",
        authToken: "@SVD",
        speakers: {}  // 将在初始化时填充
    }
};

async function fetchLobeVoices() {
    const response = await fetch("https://tts-api.deno.dev/voices", {
        headers: { "Authorization": `Bearer ${apiConfig["lobe-api"].authToken}` }
    });
    const voices = await response.json();
    apiConfig["lobe-api"].speakers = voices.reduce((acc, voice) => {
        acc[voice.model] = voice.friendlyName;
        return acc;
    }, {});
}

async function initialize() {
    await fetchLobeVoices();
    updateSpeakerOptions('voice-api');
}

function updateSpeakerOptions(apiName) {
    const speakers = apiConfig[apiName].speakers;
    const speakerSelect = $('#speaker');
    speakerSelect.empty();
    Object.entries(speakers).forEach(([key, value]) => {
        speakerSelect.append(new Option(value, key));
    });
}

function updateSliderLabel(sliderId, labelId) {
    const slider = $(`#${sliderId}`);
    const label = $(`#${labelId}`);
    label.text(slider.val());
    slider.on('input', function () {
        label.text(this.value);
    });
}

$(document).ready(function () {
    initialize();

    // 启用工具提示
    $('[data-toggle="tooltip"]').tooltip();
    
    // 更新所选 API 的讲述人选项
    $('#api').on('change', function () {
        updateSpeakerOptions(this.value);
    });

    // 初始化语速和语调滑块
    updateSliderLabel('rate', 'rateValue');
    updateSliderLabel('pitch', 'pitchValue');

    // 字符计数器
    $('#text').on('input', function () {
        $('#charCount').text(`字符数统计：${this.value.length}/3600`);
    });

    $('#text2voice-form').on('submit', function (event) {
        event.preventDefault();
        if (canMakeRequest()) {
            generateVoice(false);
        } else {
            alert('请稍候再试，每5秒只能请求一次。');
        }
    });

    $('#previewButton').on('click', function () {
        if (canMakeRequest()) {
            generateVoice(true);
        } else {
            alert('请稍候再试，每5秒只能请求一次。');
        }
    });
});

let lastRequestTime = 0;

function canMakeRequest() {
    const currentTime = Date.now();
    if (currentTime - lastRequestTime >= 5000) {
        lastRequestTime = currentTime;
        return true;
    }
    return false;
}

function generateVoice(isPreview) {
    const apiName = $('#api').val();
    const apiUrl = apiConfig[apiName].url;
    const speaker = $('#speaker').val();
    const text = $('#text').val();
    const previewText = isPreview ? text.substring(0, 20) : text; //试听文本20个字 
    let url = `${apiUrl}?t=${encodeURIComponent(previewText)}&v=${encodeURIComponent(speaker)}`;

    const rate = $('#rate').val();
    const pitch = $('#pitch').val();
    url += `&r=${encodeURIComponent(rate)}&p=${encodeURIComponent(pitch)}&o=audio-24khz-48kbitrate-mono-mp3`;

    $('#loading').show();
    $('#result').hide();
    $('#generateButton').prop('disabled', true);
    $('#previewButton').prop('disabled', true);

    const headers = apiName === "lobe-api" ? { 'Authorization': `Bearer ${apiConfig["lobe-api"].authToken}` } : {};

    $.ajax({
        url: url,
        method: 'GET',
        headers: headers,
        xhrFields: {
            responseType: 'blob' // 确保返回的是一个Blob对象
        },
        success: function (blob) {
            const voiceUrl = URL.createObjectURL(blob);
            $('#audio').attr('src', voiceUrl);
            $('#audio')[0].load();  // 确保加载音频文件
            if (!isPreview) {
                $('#download').attr('href', voiceUrl);
                const timestamp = new Date().toLocaleTimeString();  // 获取当前时间
                const shortenedText = text.length > 5 ? text.substring(0, 5) + '...' : text;  // 截取前5个字
                addHistoryItem(timestamp, shortenedText, voiceUrl);
            }
            $('#result').show();
            $('#loading').hide();
            $('#generateButton').prop('disabled', false);
            $('#previewButton').prop('disabled', false);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(`请求失败：${textStatus} - ${errorThrown}`);
            $('#loading').hide();
            $('#generateButton').prop('disabled', false);
            $('#previewButton').prop('disabled', false);
        }
    });
}

function addHistoryItem(timestamp, text, audioURL) {
    const historyItems = $('#historyItems');
    const historyItem = $(`
        <div class="history-item">
            <span>${timestamp} - ${text}</span>
            <div>
                <button class="btn btn-secondary" onclick="playAudio('${audioURL}')">播放</button>
                <button class="btn btn-info" onclick="downloadAudio('${audioURL}')">下载</button>
            </div>
        </div>
    `);
    historyItems.append(historyItem);
}

function playAudio(audioURL) {
    const audioElement = $('#audio')[0];
    audioElement.src = audioURL;
    audioElement.load();  // 确保加载音频文件
    audioElement.play();
}

function downloadAudio(audioURL) {
    const link = document.createElement('a');
    link.href = audioURL;
    link.download = 'audio.mp3';
    link.click();
}

function clearHistory() {
    $('#historyItems').empty();
    alert("历史记录已清除！");
}
