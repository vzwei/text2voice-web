let apiConfig;
let lastRequestTime = 0;

function loadSpeakers() {
    return fetch('speakers.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            apiConfig = data;
            updateSpeakerOptions('voice-api');
        })
        .catch(error => {
            console.error('Error loading speakers:', error);
        });
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
    loadSpeakers().then(() => {
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
});

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
    const previewText = isPreview ? text.substring(0, 20) : text; // 试听文本20个字

    if (apiName === 'voice-api') {
        // voice-api 请求方法
        let url = `${apiUrl}?t=${encodeURIComponent(previewText)}&v=${encodeURIComponent(speaker)}`;
        const rate = $('#rate').val();
        const pitch = $('#pitch').val();
        url += `&r=${encodeURIComponent(rate)}&p=${encodeURIComponent(pitch)}&o=audio-24khz-48kbitrate-mono-mp3`;

        makeRequest(url);
    } else if (apiName === 'lobe-api') {
        // lobe-api 请求方法
        const payload = {
            model: speaker,
            input: text,
            voice: `rate:${$('#rate').val()}|pitch:${$('#pitch').val()}`
        };

        $.ajax({
            url: apiUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer @SVD'
            },
            data: JSON.stringify(payload),
            xhrFields: {
                responseType: 'blob'
            },
            success: handleSuccess,
            error: handleError
        });
    }
}

function makeRequest(url) {
    $('#loading').show();
    $('#result').hide();
    $('#generateButton').prop('disabled', true);
    $('#previewButton').prop('disabled', true);

    $.ajax({
        url: url,
        method: 'GET',
        headers: {
            'x-api-key': '@ak47'
        },
        xhrFields: {
            responseType: 'blob'
        },
        success: handleSuccess,
        error: handleError
    });
}

function handleSuccess(blob) {
    const voiceUrl = URL.createObjectURL(blob);
    $('#audio').attr('src', voiceUrl);
    $('#audio')[0].load();
    if (!isPreview) {
        $('#download').attr('href', voiceUrl);
        const timestamp = new Date().toLocaleTimeString();
        const shortenedText = text.length > 5 ? text.substring(0, 5) + '...' : text;
        addHistoryItem(timestamp, shortenedText, voiceUrl);
    }
    $('#result').show();
    $('#loading').hide();
    $('#generateButton').prop('disabled', false);
    $('#previewButton').prop('disabled', false);
}

function handleError(jqXHR, textStatus, errorThrown) {
    console.error(`请求失败：${textStatus} - ${errorThrown}`);
    alert(`请求失败：${textStatus} - ${errorThrown}`);
    $('#loading').hide();
    $('#generateButton').prop('disabled', false);
    $('#previewButton').prop('disabled', false);
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
    audioElement.load();
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
