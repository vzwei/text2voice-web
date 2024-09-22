let apiConfig = {
    "voice-api": {
        "url": "https://ttsapi.zwei.de.eu.org/tts",
        "speakers": {
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
        "url": "https://tts-api.deno.dev/v1/audio/speech",
        "speakers": {
            "en-US-JohnNeural": "John",
            "en-US-JaneNeural": "Jane",
            "en-GB-JackNeural": "Jack",
            "en-GB-JillNeural": "Jill",
            "af-ZA-AdriNeural": "Adri",
            "af-ZA-WillemNeural": "Willem",
            "sq-AL-AnilaNeural": "Anila",
            "sq-AL-IlirNeural": "Ilir",
            "am-ET-AmehaNeural": "Ameha",
            "am-ET-MekdesNeural": "Mekdes",
            "ar-DZ-AminaNeural": "Amina",
            "ar-DZ-IsmaelNeural": "Ismael",
            "ar-BH-AliNeural": "Ali",
            "ar-BH-LailaNeural": "Laila",
            "ar-EG-SalmaNeural": "Salma",
            "ar-EG-ShakirNeural": "Shakir",
            "ar-IQ-BasselNeural": "Bassel",
            "ar-IQ-RanaNeural": "Rana",
            "ar-JO-SanaNeural": "Sana",
            "ar-JO-TaimNeural": "Taim",
            "ar-KW-FahedNeural": "Fahed",
            "ar-KW-NouraNeural": "Noura",
            "ar-LB-LaylaNeural": "Layla",
            "ar-LB-RamiNeural": "Rami",
            "ar-LY-ImanNeural": "Iman",
            "ar-LY-OmarNeural": "Omar",
            "ar-MA-JamalNeural": "Jamal",
            "ar-MA-MounaNeural": "Mouna",
            "ar-OM-AbdullahNeural": "Abdullah",
            "ar-OM-AyshaNeural": "Aysha",
            "ar-QA-AmalNeural": "Amal",
            "ar-QA-MoazNeural": "Moaz",
            "ar-SA-HamedNeural": "Hamed",
            "ar-SA-ZariyahNeural": "Zariyah",
            "ar-SY-AmanyNeural": "Amany",
            "ar-SY-LaithNeural": "Laith",
            "ar-TN-HediNeural": "Hedi",
            "ar-TN-ReemNeural": "Reem",
            "ar-AE-FatimaNeural": "Fatima",
            "ar-AE-HamdanNeural": "Hamdan",
            "ar-YE-MaryamNeural": "Maryam",
            "ar-YE-SalehNeural": "Saleh",
            "az-AZ-BabekNeural": "Babek",
            "az-AZ-BanuNeural": "Banu",
            "bn-BD-NabanitaNeural": "Nabanita",
            "bn-BD-PradeepNeural": "Pradeep",
            "bn-IN-BashkarNeural": "Bashkar",
            "bn-IN-TanishaaNeural": "Tanishaa",
            "bs-BA-GoranNeural": "Goran",
            "bs-BA-VesnaNeural": "Vesna",
            "bg-BG-BorislavNeural": "Borislav",
            "bg-BG-KalinaNeural": "Kalina",
            "my-MM-NilarNeural": "Nilar",
            "my-MM-ThihaNeural": "Thiha",
            "ca-ES-EnricNeural": "Enric",
            "ca-ES-JoanaNeural": "Joana",
            "zh-HK-HiuGaaiNeural": "HiuGaai",
            "zh-HK-HiuMaanNeural": "HiuMaan",
            "zh-HK-WanLungNeural": "WanLung",
            "zh-CN-XiaoxiaoNeural": "Xiaoxiao",
            "zh-CN-XiaoyiNeural": "Xiaoyi",
            "zh-CN-YunjianNeural": "Yunjian",
            "zh-CN-YunxiNeural": "Yunxi",
            "zh-CN-YunxiaNeural": "Yunxia",
            "zh-CN-YunyangNeural": "Yunyang",
            "zh-CN-liaoning-XiaobeiNeural": "Xiaobei",
            "zh-TW-HsiaoChenNeural": "HsiaoChen",
            "zh-TW-YunJheNeural": "YunJhe",
            "zh-TW-HsiaoYuNeural": "HsiaoYu",
            "zh-CN-shaanxi-XiaoniNeural": "Xiaoni",
            "hr-HR-GabrijelaNeural": "Gabrijela",
            "hr-HR-SreckoNeural": "Srecko",
            "cs-CZ-AntoninNeural": "Antonin",
            "cs-CZ-VlastaNeural": "Vlasta",
            "da-DK-ChristelNeural": "Christel",
            "da-DK-JeppeNeural": "Jeppe",
            "nl-BE-ArnaudNeural": "Arnaud",
            "nl-BE-DenaNeural": "Dena",
            "nl-NL-ColetteNeural": "Colette",
            "nl-NL-FennaNeural": "Fenna",
            "nl-NL-MaartenNeural": "Maarten",
            "en-AU-NatashaNeural": "Natasha",
            "en-AU-WilliamNeural": "William",
            "en-CA-ClaraNeural": "Clara",
            "en-CA-LiamNeural": "Liam",
            "en-HK-SamNeural": "Sam",
            "en-HK-YanNeural": "Yan",
            "en-IN-NeerjaExpressiveNeural": "Neerja Expressive",
            "en-IN-NeerjaNeural": "Neerja",
            "en-IN-PrabhatNeural": "Prabhat",
            "en-IE-ConnorNeural": "Connor",
            "en-IE-EmilyNeural": "Emily",
            "en-KE-AsiliaNeural": "Asilia",
            "en-KE-ChilembaNeural": "Chilemba",
            "en-NZ-MitchellNeural": "Mitchell",
            "en-NZ-MollyNeural": "Molly",
            "en-NG-AbeoNeural": "Abeo",
            "en-NG-EzinneNeural": "Ezinne",
            "en-PH-JamesNeural": "James",
            "en-PH-RosaNeural": "Rosa",
            "en-SG-LunaNeural": "Luna",
            "en-SG-WayneNeural": "Wayne",
            "en-ZA-LeahNeural": "Leah",
            "en-ZA-LukeNeural": "Luke",
            "en-TZ-ElimuNeural": "Elimu",
            "en-TZ-ImaniNeural": "Imani",
            "en-GB-LibbyNeural": "Libby",
            "en-GB-MaisieNeural": "Maisie",
            "en-GB-RyanNeural": "Ryan",
            "en-GB-SoniaNeural": "Sonia",
            "en-GB-ThomasNeural": "Thomas",
            "en-US-AvaMultilingualNeural": "Ava Multilingual",
            "en-US-AndrewMultilingualNeural": "Andrew Multilingual",
            "en-US-EmmaMultilingualNeural": "Emma Multilingual",
            "en-US-BrianMultilingualNeural": "Brian Multilingual",
            "en-US-AvaNeural": "Ava",
            "en-US-AndrewNeural": "Andrew",
            "en-US-EmmaNeural": "Emma",
            "en-US-BrianNeural": "Brian",
            "en-US-AnaNeural": "Ana",
            "en-US-AriaNeural": "Aria",
            "en-US-ChristopherNeural": "Christopher",
            "en-US-EricNeural": "Eric",
            "en-US-GuyNeural": "Guy",
            "en-US-JennyNeural": "Jenny",
            "en-US-MichelleNeural": "Michelle",
            "en-US-RogerNeural": "Roger",
            "en-US-SteffanNeural": "Steffan",
            "et-EE-AnuNeural": "Anu",
            "et-EE-KertNeural": "Kert",
            "fil-PH-AngeloNeural": "Angelo",
            "fil-PH-BlessicaNeural": "Blessica",
            "fi-FI-HarriNeural": "Harri",
            "fi-FI-NooraNeural": "Noora",
            "fr-BE-CharlineNeural": "Charline",
            "fr-BE-GerardNeural": "Gerard",
            "fr-CA-ThierryNeural": "Thierry",
            "fr-CA-AntoineNeural": "Antoine",
            "fr-CA-JeanNeural": "Jean",
            "fr-CA-SylvieNeural": "Sylvie",
            "fr-FR-VivienneMultilingualNeural": "Vivienne Multilingual",
            "fr-FR-RemyMultilingualNeural": "Remy Multilingual",
            "fr-FR-DeniseNeural": "Denise",
            "fr-FR-EloiseNeural": "Eloise",
            "fr-FR-HenriNeural": "Henri",
            "fr-CH-ArianeNeural": "Ariane",
            "fr-CH-FabriceNeural": "Fabrice",
            "gl-ES-RoiNeural": "Roi",
            "gl-ES-SabelaNeural": "Sabela",
            "ka-GE-EkaNeural": "Eka",
            "ka-GE-GiorgiNeural": "Giorgi",
            "de-AT-IngridNeural": "Ingrid",
            "de-AT-JonasNeural": "Jonas",
            "de-DE-SeraphinaMultilingualNeural": "Seraphina Multilingual",
            "de-DE-FlorianMultilingualNeural": "Florian Multilingual",
            "de-DE-AmalaNeural": "Amala",
            "de-DE-ConradNeural": "Conrad",
            "de-DE-KatjaNeural": "Katja",
            "de-DE-KillianNeural": "Killian",
            "de-CH-JanNeural": "Jan",
            "de-CH-LeniNeural": "Leni",
            "el-GR-AthinaNeural": "Athina",
            "el-GR-NestorasNeural": "Nestoras",
            "gu-IN-DhwaniNeural": "Dhwani",
            "gu-IN-NiranjanNeural": "Niranjan",
            "he-IL-AvriNeural": "Avri",
            "he-IL-HilaNeural": "Hila",
            "hi-IN-MadhurNeural": "Madhur",
            "hi-IN-SwaraNeural": "Swara",
            "hu-HU-NoemiNeural": "Noemi",
            "hu-HU-TamasNeural": "Tamas",
            "is-IS-GudrunNeural": "Gudrun",
            "is-IS-GunnarNeural": "Gunnar",
            "id-ID-ArdiNeural": "Ardi",
            "id-ID-GadisNeural": "Gadis",
            "ga-IE-ColmNeural": "Colm",
            "ga-IE-OrlaNeural": "Orla",
            "it-IT-GiuseppeNeural": "Giuseppe",
            "it-IT-DiegoNeural": "Diego",
            "it-IT-ElsaNeural": "Elsa",
            "it-IT-IsabellaNeural": "Isabella",
            "ja-JP-KeitaNeural": "Keita",
            "ja-JP-NanamiNeural": "Nanami",
            "jv-ID-DimasNeural": "Dimas",
            "jv-ID-SitiNeural": "Siti",
            "kn-IN-GaganNeural": "Gagan",
            "kn-IN-SapnaNeural": "Sapna",
            "kk-KZ-AigulNeural": "Aigul",
            "kk-KZ-DauletNeural": "Daulet",
            "km-KH-PisethNeural": "Piseth",
            "km-KH-SreymomNeural": "Sreymom",
            "ko-KR-HyunsuNeural": "Hyunsu",
            "ko-KR-InJoonNeural": "InJoon",
            "ko-KR-SunHiNeural": "SunHi",
            "lo-LA-ChanthavongNeural": "Chanthavong",
            "lo-LA-KeomanyNeural": "Keomany",
            "lv-LV-EveritaNeural": "Everita",
            "lv-LV-NilsNeural": "Nils",
            "lt-LT-LeonasNeural": "Leonas",
            "lt-LT-OnaNeural": "Ona",
            "mk-MK-AleksandarNeural": "Aleksandar",
            "mk-MK-MarijaNeural": "Marija",
            "ms-MY-OsmanNeural": "Osman",
            "ms-MY-YasminNeural": "Yasmin",
            "ml-IN-MidhunNeural": "Midhun",
            "ml-IN-SobhanaNeural": "Sobhana",
            "mt-MT-GraceNeural": "Grace",
            "mt-MT-JosephNeural": "Joseph",
            "mr-IN-AarohiNeural": "Aarohi",
            "mr-IN-ManoharNeural": "Manohar",
            "mn-MN-BataaNeural": "Bataa",
            "mn-MN-YesuiNeural": "Yesui",
            "ne-NP-HemkalaNeural": "Hemkala",
            "ne-NP-SagarNeural": "Sagar",
            "nb-NO-FinnNeural": "Finn",
            "nb-NO-PernilleNeural": "Pernille",
            "ps-AF-GulNawazNeural": "GulNawaz",
            "ps-AF-LatifaNeural": "Latifa",
            "fa-IR-DilaraNeural": "Dilara",
            "fa-IR-FaridNeural": "Farid",
            "pl-PL-MarekNeural": "Marek",
            "pl-PL-ZofiaNeural": "Zofia",
            "pt-BR-ThalitaNeural": "Thalita",
            "pt-BR-AntonioNeural": "Antonio",
            "pt-BR-FranciscaNeural": "Francisca",
            "pt-PT-DuarteNeural": "Duarte",
            "pt-PT-RaquelNeural": "Raquel",
            "ro-RO-AlinaNeural": "Alina",
            "ro-RO-EmilNeural": "Emil",
            "ru-RU-DmitryNeural": "Dmitry",
            "ru-RU-SvetlanaNeural": "Svetlana",
            "sr-RS-NicholasNeural": "Nicholas",
            "sr-RS-SophieNeural": "Sophie",
            "si-LK-SameeraNeural": "Sameera",
            "si-LK-ThiliniNeural": "Thilini",
            "sk-SK-LukasNeural": "Lukas",
            "sk-SK-ViktoriaNeural": "Viktoria",
            "sl-SI-PetraNeural": "Petra",
            "sl-SI-RokNeural": "Rok",
            "so-SO-MuuseNeural": "Muuse",
            "so-SO-UbaxNeural": "Ubax",
            "es-AR-ElenaNeural": "Elena",
            "es-AR-TomasNeural": "Tomas",
            "es-BO-MarceloNeural": "Marcelo",
            "es-BO-SofiaNeural": "Sofia",
            "es-CL-CatalinaNeural": "Catalina",
            "es-CL-LorenzoNeural": "Lorenzo",
            "es-ES-XimenaNeural": "Ximena",
            "es-ES-AlvaroNeural": "Alvaro",
            "es-ES-ElviraNeural": "Elvira",
            "es-CO-GonzaloNeural": "Gonzalo",
            "es-CO-SalomeNeural": "Salome",
            "es-CR-JuanNeural": "Juan",
            "es-CR-MariaNeural": "Maria",
            "es-CU-BelkysNeural": "Belkys",
            "es-CU-ManuelNeural": "Manuel",
            "es-DO-EmilioNeural": "Emilio",
            "es-DO-RamonaNeural": "Ramona",
            "es-EC-AndreaNeural": "Andrea",
            "es-EC-LuisNeural": "Luis",
            "es-SV-LorenaNeural": "Lorena",
            "es-SV-RodrigoNeural": "Rodrigo",
            "es-GQ-JavierNeural": "Javier",
            "es-GQ-TeresaNeural": "Teresa",
            "es-GT-AndresNeural": "Andres",
            "es-GT-MartaNeural": "Marta",
            "es-HN-CarlosNeural": "Carlos",
            "es-HN-KarlaNeural": "Karla",
            "es-MX-DaliaNeural": "Dalia",
            "es-MX-JorgeNeural": "Jorge",
            "es-NI-FedericoNeural": "Federico",
            "es-NI-YolandaNeural": "Yolanda",
            "es-PA-MargaritaNeural": "Margarita",
            "es-PA-RobertoNeural": "Roberto",
            "es-PY-MarioNeural": "Mario",
            "es-PY-TaniaNeural": "Tania",
            "es-PE-AlexNeural": "Alex",
            "es-PE-CamilaNeural": "Camila",
            "es-PR-KarinaNeural": "Karina",
            "es-PR-VictorNeural": "Victor",
            "es-US-AlonsoNeural": "Alonso",
            "es-US-PalomaNeural": "Paloma",
            "es-UY-MateoNeural": "Mateo",
            "es-UY-ValentinaNeural": "Valentina",
            "es-VE-PaolaNeural": "Paola",
            "es-VE-SebastianNeural": "Sebastian",
            "su-ID-JajangNeural": "Jajang",
            "su-ID-TutiNeural": "Tuti",
            "sw-KE-RafikiNeural": "Rafiki",
            "sw-KE-ZuriNeural": "Zuri",
            "sw-TZ-DaudiNeural": "Daudi",
            "sw-TZ-RehemaNeural": "Rehema",
            "sv-SE-MattiasNeural": "Mattias",
            "sv-SE-SofieNeural": "Sofie",
            "ta-IN-PallaviNeural": "Pallavi",
            "ta-IN-ValluvarNeural": "Valluvar",
            "ta-MY-KaniNeural": "Kani",
            "ta-MY-SuryaNeural": "Surya",
            "ta-SG-AnbuNeural": "Anbu",
            "ta-SG-VenbaNeural": "Venba",
            "ta-LK-KumarNeural": "Kumar",
            "ta-LK-SaranyaNeural": "Saranya",
            "te-IN-MohanNeural": "Mohan",
            "te-IN-ShrutiNeural": "Shruti",
            "th-TH-NiwatNeural": "Niwat",
            "th-TH-PremwadeeNeural": "Premwadee",
            "tr-TR-AhmetNeural": "Ahmet",
            "tr-TR-EmelNeural": "Emel",
            "uk-UA-OstapNeural": "Ostap",
            "uk-UA-PolinaNeural": "Polina",
            "ur-IN-GulNeural": "Gul",
            "ur-IN-SalmanNeural": "Salman",
            "ur-PK-AsadNeural": "Asad",
            "ur-PK-UzmaNeural": "Uzma",
            "uz-UZ-MadinaNeural": "Madina",
            "uz-UZ-SardorNeural": "Sardor",
            "vi-VN-HoaiMyNeural": "HoaiMy",
            "vi-VN-NamMinhNeural": "NamMinh",
            "cy-GB-AledNeural": "Aled",
            "cy-GB-NiaNeural": "Nia",
            "zu-ZA-ThandoNeural": "Thando",
            "zu-ZA-ThembaNeural": "Themba"
        }
    }
};

let lastRequestTime = 0;

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
    updateSpeakerOptions('voice-api');
    $('[data-toggle="tooltip"]').tooltip();

    $('#api').on('change', function () {
        updateSpeakerOptions(this.value);
    });

    updateSliderLabel('rate', 'rateValue');
    updateSliderLabel('pitch', 'pitchValue');

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
    const previewText = isPreview ? text.substring(0, 20) : text;
    const rate = $('#rate').val();
    const pitch = $('#pitch').val();

    if (apiName === 'voice-api') {
        let url = `${apiUrl}?t=${encodeURIComponent(previewText)}&v=${encodeURIComponent(speaker)}`;
        url += `&r=${encodeURIComponent(rate)}&p=${encodeURIComponent(pitch)}&o=audio-24khz-48kbitrate-mono-mp3`;

        makeRequest(url, isPreview, text);
    } else if (apiName === 'lobe-api') {
        const url = `${apiUrl}?model=${encodeURIComponent(speaker)}&input=${encodeURIComponent(previewText)}&voice=${encodeURIComponent(`rate:${rate}|pitch:${pitch}`)}`;
        
        $.ajax({
            url: url,
            method: 'GET',
            xhrFields: {
                responseType: 'blob'
            },
            success: (blob) => {
                console.log('Blob type:', blob.type); // 调试信息
                handleSuccess(blob, isPreview, text);
            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.error(`请求失败：${textStatus} - ${errorThrown}`);
                console.error(`响应内容：${jqXHR.responseText}`);
                alert(`请求失败：${textStatus} - ${errorThrown}`);
            }
        });
    }
}

function makeRequest(url, isPreview, text) {
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
        success: (blob) => handleSuccess(blob, isPreview, text),
        error: handleError
    });
}

function handleSuccess(blob, isPreview, text) {
    console.log('Blob type:', blob.type); // 添加调试信息
    if (blob.type !== "audio/mpeg") {
        console.error('Invalid Blob type:', blob.type);
        alert('请求失败：无效的音频格式');
        $('#loading').hide();
        $('#generateButton').prop('disabled', false);
        $('#previewButton').prop('disabled', false);
        return;
    }

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
