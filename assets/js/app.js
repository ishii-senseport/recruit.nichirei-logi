document.addEventListener("DOMContentLoaded", function () {
  // ============================================================
  // 共通データ（全モーダルで共通の行）
  // ============================================================
  var COMMON_ROWS_TAIL = [
    { label: "昇給", value: "年１回" },
    { label: "賞与", value: "年２回" }
  ];

  var COMMON_ROWS_BOTTOM = [
    { label: "勤務時間", value: "７.５時間／日" },
    { label: "休日休暇", value: [
      "週休2日制、年間121日（2026年度実績）",
      "有給休暇：初年度12日",
      "　　　　　2年目15日、3年目16日…　最大20日/年付与",
      "　　　　（取得平均14日 2024年度実績）",
      "看護休暇、ボランティア休暇 など"
    ]},
    { label: "保険", value: [
      "健康保険、厚生年金保険、雇用保険、労災保険",
      "GLTD（団体長期障害所得補償保険）"
    ]},
    { label: "福利厚生", value: [
      "制度：財形貯蓄、社員持株会、育児・介護休業など",
      "施設：社宅、研修センターなど"
    ]},
    { label: "研修制度", value: "新入社員研修、若手社員フォロー研修、階層別研修、専門教育など" }
  ];

  // ============================================================
  // モーダルデータ
  // tables: [ { rows: [...] }, ... ]
  // ============================================================
  var MODAL_DATA = {
    // -------------------------------------------------------
    // 全国総合職
    // -------------------------------------------------------
    "zenkoku": {
      tables: [{
        rows: [
          { label: "募集企業", value: "(株)ニチレイロジグループ本社" },
          { label: "職種", value: "管理営業職" },
          { label: "募集学科", value: "全学部・全学科（文理不問）" },
          { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
          { label: "給与", value: [
            "初任給",
            "学部卒　基本給263,000円（2026年度実績）",
            "院卒　　基本給276,900円（2026年度実績）",
            "※その他手当あり。"
          ]},
          { label: "諸手当", value: "扶養手当、通勤費、家賃補助　他" }
        ].concat(COMMON_ROWS_TAIL, [
          { label: "勤務地", value: "ニチレイロジグループ本社及びニチレイロジグループ各事業所" }
        ], COMMON_ROWS_BOTTOM)
      }]
    },

    // -------------------------------------------------------
    // エンジニア職（全国総合職）
    // -------------------------------------------------------
    "engineer-zenkoku": {
      tables: [{
        rows: [
          { label: "募集企業", value: "(株)ニチレイ・ロジスティクスエンジニアリング" },
          { label: "職種", value: "エンジニアリング職" },
          { label: "募集学科", value: "理系の全学部・全学科" },
          { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
          { label: "給与", value: [
            "初任給",
            "学部卒　基本給263,000円（2026年度実績）",
            "院卒　　基本給276,900円（2026年度実績）",
            "※その他手当あり。"
          ]},
          { label: "諸手当", value: "扶養手当、通勤費、家賃補助　他" }
        ].concat(COMMON_ROWS_TAIL, [
          { label: "勤務地", value: "ニチレイロジグループ各事業所" }
        ], COMMON_ROWS_BOTTOM)
      }]
    },

    // -------------------------------------------------------
    // エンジニア職（地域総合職）
    // -------------------------------------------------------
    "engineer-chiiki": {
      tables: [{
        rows: [
          { label: "募集企業", value: "(株)ニチレイ・ロジスティクスエンジニアリング" },
          { label: "職種", value: "エンジニアリング職" },
          { label: "募集学科", value: "理系の全学部・全学科" },
          { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
          { label: "給与", value: [
            "初任給",
            "学部卒　基本給239,300円＋地域手当（2026年度実績）",
            "院卒　　基本給251,900円＋地域手当（2026年度実績）",
            "※地域手当",
            "東京・埼玉・千葉・神奈川（つくば含む）：15,000円",
            "大阪・京都・兵庫：12,000円",
            "名古屋地区（名古屋市・小牧市・清須市・稲沢市）：10,500円",
            "上記以外：5,000円",
            "※その他手当あり。"
          ]},
          { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
        ].concat(COMMON_ROWS_TAIL, [
          { label: "勤務地", value: [
            "北海道・東北・関東・東海・関西・中四国・九州のうち、",
            "ご希望のエリア内の事業所",
            "【広域コース】エリア内での転居を伴う異動あり",
            "【地域限定コース】エリア内での転居を伴う異動なし"
          ]}
        ], COMMON_ROWS_BOTTOM)
      }]
    },

    // -------------------------------------------------------
    // 地域総合職：北海道
    // -------------------------------------------------------
    "chiiki-hokkaido": {
      tables: [{
        rows: [
          { label: "募集企業", value: "(株)ニチレイ・ロジスティクス北海道" },
          { label: "職種", value: "管理営業職" },
          { label: "募集学科", value: "全学部・全学科（文理不問）" },
          { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
          { label: "給与", value: [
            "初任給",
            "学部卒　基本給239,300円＋地域手当5,000円（2026年度実績）",
            "短大卒　基本給223,000円＋地域手当5,000円（2026年度実績）",
            "※その他手当あり。"
          ]},
          { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
        ].concat(COMMON_ROWS_TAIL, [
          { label: "勤務地", value: [
            "ニチレイ・ロジスティクス北海道の各事業所",
            "【広域コース】エリア内での転居を伴う異動あり",
            "【地域限定コース】転居を伴う異動なし"
          ]}
        ], COMMON_ROWS_BOTTOM)
      }]
    },

    // -------------------------------------------------------
    // 地域総合職：東北（2社）
    // -------------------------------------------------------
    "chiiki-tohoku": {
      tables: [
        {
          rows: [
            { label: "募集企業", value: "(株)ニチレイ・ロジスティクス東北" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当5,000円（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当5,000円（2026年度実績）",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ニチレイ・ロジスティクス東北の各事業所",
              "（宮城県、岩手県、山形県）",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        },
        {
          rows: [
            { label: "募集企業", value: "(株)ロジスティクス・ネットワーク" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当5,000円（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当5,000円（2026年度実績）",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ロジスティクス・ネットワークの各事業所",
              "（青森県、宮城県、岩手県、山形県、福島県、茨城県、栃木県）",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        }
      ]
    },

    // -------------------------------------------------------
    // 地域総合職：関東（2社）
    // -------------------------------------------------------
    "chiiki-kanto": {
      tables: [
        {
          rows: [
            { label: "募集企業", value: "(株)ロジスティクス・ネットワーク" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "一都三県（つくば含む）勤務の場合",
              "学部卒　基本給239,300円＋地域手当15,000円（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当15,000円（2026年度実績）",
              "<br>",
              "茨城県・栃木県・新潟県・静岡県勤務の場合",
              "学部卒　基本給239,300円＋地域手当5,000円（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当5,000円（2026年度実績）",
              "<br>",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ロジスティクス・ネットワークの各事業所",
              ["（東京都、千葉県、埼玉県、神奈川県、茨城県、栃木県、新潟県、静岡県）"],
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        },
        {
          rows: [
            { label: "募集企業", value: "(株)キョクレイ" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当15,000円（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当15,000円（2026年度実績）",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "キョクレイの各事業所（神奈川県）",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        }
      ]
    },

    // -------------------------------------------------------
    // 地域総合職：東海
    // -------------------------------------------------------
    "chiiki-tokai": {
      tables: [{
        rows: [
          { label: "募集企業", value: "(株)ニチレイ・ロジスティクス東海" },
          { label: "職種", value: "管理営業職" },
          { label: "募集学科", value: "全学部・全学科（文理不問）" },
          { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
          { label: "給与", value: [
            "初任給",
            "学部卒　基本給239,300円＋地域手当（2026年度実績）",
            "短大卒　基本給223,000円＋地域手当（2026年度実績）",
            "<br>",
            "※地域手当",
            "名古屋地区（名古屋市・小牧市・清須市・稲沢市）：10,500円",
            "上記以外：5,000円",
            "<br>",
            "※その他手当あり。"
          ]},
          { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
        ].concat(COMMON_ROWS_TAIL, [
          { label: "勤務地", value: [
            "ニチレイ・ロジスティクス東海の各事業所（愛知県、静岡県、三重県）",
            "【広域コース】エリア内での転居を伴う異動あり",
            "【地域限定コース】転居を伴う異動なし"
          ]}
        ], COMMON_ROWS_BOTTOM)
      }]
    },

    // -------------------------------------------------------
    // 地域総合職：関西（3社）
    // -------------------------------------------------------
    "chiiki-kansai": {
      tables: [
        {
          rows: [
            { label: "募集企業", value: "(株)ニチレイ・ロジスティクス関西" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当（2026年度実績）",
              "<br>",
              "※地域手当",
              "大阪・京都・兵庫：12,000円",
              "上記以外（金沢）：5,000円",
              "<br>",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ニチレイ・ロジスティクス関西の各事業所",
              "（大阪府、京都府、兵庫県、石川県）",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        },
        {
          rows: [
            { label: "募集企業", value: "(株)ロジスティクス・ネットワーク" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当（2026年度実績）",
              "<br>",
              "※地域手当",
              "大阪・京都・兵庫：12,000円",
              "上記以外（岡山・香川）：5,000円",
              "<br>",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ロジスティクス・ネットワークの各事業所",
              "（大阪府、京都府、兵庫県、岡山県、香川県）※関西・中四国エリア",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        },
        {
          rows: [
            { label: "募集企業", value: "(株)キョクレイ" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当（2026年度実績）",
              "<br>",
              "※地域手当",
              "兵庫：12,000円",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "キョクレイの各事業所（兵庫県）",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        }
      ]
    },

    // -------------------------------------------------------
    // 地域総合職：中四国（2社）
    // -------------------------------------------------------
    "chiiki-chushikoku": {
      tables: [
        {
          rows: [
            { label: "募集企業", value: "(株)ニチレイ・ロジスティクス中四国" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当5,000円（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当5,000円（2026年度実績）",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ニチレイ・ロジスティクス中四国の各事業所",
              "（広島県、鳥取県、島根県、香川県、徳島県、愛媛県、高知県）",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        },
        {
          rows: [
            { label: "募集企業", value: "(株)ロジスティクス・ネットワーク" },
            { label: "職種", value: "管理営業職" },
            { label: "募集学科", value: "全学部・全学科（文理不問）" },
            { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
            { label: "給与", value: [
              "初任給",
              "学部卒　基本給239,300円＋地域手当（2026年度実績）",
              "短大卒　基本給223,000円＋地域手当（2026年度実績）",
              "<br>",
              "※地域手当",
              "大阪・京都・兵庫：12,000円",
              "上記以外（岡山・香川）：5,000円",
              "<br>",
              "※その他手当あり。"
            ]},
            { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
          ].concat(COMMON_ROWS_TAIL, [
            { label: "勤務地", value: [
              "ロジスティクス・ネットワークの各事業所",
              "（大阪府、京都府、兵庫県、岡山県、香川県）※関西・中四国エリア",
              "【広域コース】エリア内での転居を伴う異動あり",
              "【地域限定コース】転居を伴う異動なし"
            ]}
          ], COMMON_ROWS_BOTTOM)
        }
      ]
    },

    // -------------------------------------------------------
    // 地域総合職：九州
    // -------------------------------------------------------
    "chiiki-kyushu": {
      tables: [{
        rows: [
          { label: "募集企業", value: "(株)ニチレイ・ロジスティクス九州" },
          { label: "職種", value: "管理営業職" },
          { label: "募集学科", value: "全学部・全学科（文理不問）" },
          { label: "応募資格", value: "2027年3月に大学卒業または大学院修了見込の方" },
          { label: "給与", value: [
            "初任給",
            "学部卒　基本給239,300円＋地域手当5,000円（2026年度実績）",
            "短大卒　基本給223,000円＋地域手当5,000円（2026年度実績）",
            "※その他手当あり。"
          ]},
          { label: "諸手当", value: "扶養手当、通勤費、家賃補助（広域コースのみ）　他" }
        ].concat(COMMON_ROWS_TAIL, [
          { label: "勤務地", value: [
            "ニチレイ・ロジスティクス九州の各事業所",
            ["（福岡県、佐賀県、長崎県、熊本県、宮崎県、鹿児島県、沖縄県、山口県）"],
            "【広域コース】エリア内での転居を伴う異動あり",
            "【地域限定コース】転居を伴う異動なし"
          ]}
        ], COMMON_ROWS_BOTTOM)
      }]
    }
  };

  // ============================================================
  // モーダル制御
  // ============================================================
  var modal = document.getElementById("modal-recruit");
  var modalTable = document.getElementById("modal-table");
  var recruitBtns = document.querySelectorAll(".recruit__btn[data-modal-id]");
  var closeTriggers = modal.querySelectorAll("[data-modal-close]");

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function buildRowsHtml(rows) {
    var html = "";
    rows.forEach(function (row) {
      var valueHtml;
      if (Array.isArray(row.value)) {
        valueHtml = '<div class="modal__value">' +
          row.value.map(function (line) {
            if (line === "<br>") {
              return '<p class="modal__spacer"></p>';
            }
            if (Array.isArray(line)) {
              return "<p>" + line.map(function (span) {
                return '<span class="modal__value-span">' + escapeHtml(span) + "</span>";
              }).join("") + "</p>";
            }
            var leadingZenkaku = line.match(/^[\u3000]+/);
            if (leadingZenkaku) {
              var trimmed = line.replace(/^[\u3000]+/, '');
              var indent = leadingZenkaku[0].length;
              return '<p style="padding-left:4.6em">' + escapeHtml(trimmed) + "</p>";
            }
            return "<p>" + escapeHtml(line) + "</p>";
          }).join("") +
          "</div>";
      } else {
        valueHtml = '<p class="modal__value">' + escapeHtml(row.value) + "</p>";
      }
      html += '<div class="modal__row">' +
        '<p class="modal__label">' + escapeHtml(row.label) + "</p>" +
        valueHtml +
        "</div>";
    });
    return html;
  }

  function renderModal(modalId) {
    var data = MODAL_DATA[modalId];
    if (!data) return;

    var html = "";
    data.tables.forEach(function (table, index) {
      if (index > 0) {
        html += '<div class="modal__table-separator"></div>';
      }
      html += buildRowsHtml(table.rows);
    });

    modalTable.innerHTML = html;
  }

  function openModal(modalId) {
    renderModal(modalId);
    modal.classList.add("is-active");
    modal.querySelector(".modal__container").scrollTop = 0;
    document.documentElement.classList.add("is-modal-locked");
    document.body.classList.add("is-modal-locked");
  }

  function closeModal() {
    modal.classList.remove("is-active");
    document.documentElement.classList.remove("is-modal-locked");
    document.body.classList.remove("is-modal-locked");
  }

  recruitBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var modalId = btn.getAttribute("data-modal-id");
      openModal(modalId);
    });
  });

  closeTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      closeModal();
    }
  });
});
