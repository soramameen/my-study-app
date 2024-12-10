export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category:
    | "general"
    | "info"
    | "math"
    | "stats"
    | "programming"
    | "machine-learning"
    | "data-analysis";
  imageUrl?: string; // 画像URLをオプショナルで追加
  reccomeded?: boolean; // おすすめリソースかどうかを追加
};

export const resources: Resource[] = [
  {
    id: "readable-code",
    title:
      "リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック",
    description:
      "コードを読みやすく理解しやすくするための実践的なテクニックを紹介する書籍。変数名やコメントの書き方、制御フローやロジックの整理、テスト記述など、コード品質向上のためのノウハウが詰まっている。",
    url: "https://amzn.to/49v6LSF",
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81+3DpjuMdL._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "the-pragmatic-programmer",
    title: "達人プログラマー(第2版): 熟達に向けたあなたの旅",
    description:
      "より良いプログラマになるための実践的アプローチを解説した書籍。アジャイルソフトウェア開発手法の先駆者による執筆で、経験を積み、生産性を高め、ソフトウェア開発全体を深く理解するためのノウハウがまとめられている。入門者からベテランまで、読み返すたびに新たな発見がある一冊。",
    url: "https://amzn.to/3ZJ6dWh",
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/816iLrKIvcL._SL1419_.jpg",
    reccomeded: true,
  },
  {
    id: "network-why-connect",
    title:
      "ネットワークはなぜつながるのか 第2版 知っておきたいTCP/IP、LAN、光ファイバの基礎知識",
    description:
      "ブラウザにURLを入力してからWebページが表示されるまでの道筋をたどりながら、その裏側で働くTCP/IP、LAN、光ファイバなどの技術を説明していきます。インターネットを通ってサーバーまで行って帰ってくる道筋の途中には、今のネットワークの主要な技術要素が全部あります。そこでの機器やソフトウエアがどのように動き連携しているのかを探検すればネットワーク全体の動きがわかります。第2版では、全体の構成を見直し、探検の途中で、今、ネットワークのどの部分にいるのかを明確にしました。また、各技術の基本的な考え方や成り立ちなど、基礎的な解説を大幅に増やしたほか、個別の補足説明も注釈として多く取り入れています。大事な点は「要約」としてまとめ、読んで記憶に残るようにしました。初心者の方も、基本的なところからきちんと理解して読み進めてもらえます。\n\n特徴1：ネットワークの全体の動きがわかる“探検ツアー”\n本書は、ブラウザにURLを入力してから、サーバーがWebページの情報を返信してくるまでの過程を順番に追っていくというユニークな構成です。入力されたデータがパケットとなって、LAN、ハブ、ルーターを通り、プロバイダの回線を抜け、ファイアウォールをくぐり、次の行き先を探りながらゴールのWebサーバーを目指して、さまざまに姿を変えながら進んでいく様子を追うことで、個別技術を見ているだけではわからない、“現実の”動きがわかります。\n\n特徴2：２大技術TCP/IP、LANが確実に理解できる！\nIPアドレス、ネットマスク、デフォルト・ゲートウエイなどはパソコンのTCP/IPの設定で目にしますし、家庭内LANも普及してMACアドレスという言葉も身近になりました。「イメージとしてはなんとなくわかる」これらの用語が、現実の機器とソフトウエアがどうように動くかを知ることで、本質からきちんと理解できます。\n\n特徴3：最先端の光ファイバの中身ものぞいてみよう！\nインターネットの普及で、家庭とプロバイダをつなぐアクセス回線の技術も進んでいます。ADSLでの信号化の技術や伝送方法、光ファイバが高速化できている仕組みなどをくわしく解説しています。",
    url: "https://amzn.to/3ZMVMzV",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/81sBKxze5ML._SY466_.jpg",
    reccomeded: true,
  },
  {
    id: "zero-deep-learning",
    title:
      "ゼロから作るDeep Learning ―Pythonで学ぶディープラーニングの理論と実装",
    description:
      'ディープラーニングの本格的な入門書。外部のライブラリに頼らずに、Python 3によってゼロからディープラーニングを作ることで、ディープラーニングの原理を楽しく学びます。ディープラーニングやニューラルネットワークの基礎だけでなく、誤差逆伝播法や畳み込みニューラルネットワークなども実装レベルで理解できます。ハイパーパラメータの決め方や重みの初期値といった実践的なテクニック、Batch NormalizationやDropout、Adamといった最近のトレンド、自動運転や画像生成、強化学習などの応用例、さらには、なぜディープラーニングは優れているのか?なぜ層を深くすると認識精度がよくなるのか?といった“Why"に関する問題も取り上げます。',
    url: "https://amzn.to/4gqiepa",
    category: "machine-learning",
    imageUrl: "https://m.media-amazon.com/images/I/91exSUPsr6L._SY466_.jpg",
    reccomeded: true,
  },
  {
    id: "master-calculus",
    title: "1冊でマスター 大学の微分積分",
    description:
      "講義と演習で効率よく確実に力がつく! 大学数学の必須科目「微分積分」を1冊でマスターできます。高校の復習から大学生を悩ませるε-δ論法まで懇切丁寧に解説。図とグラフを多用した説明と豊富なパターンの問題を解いていきます。単なる解説ではなく、どうしてそう考えるのか、どうとらえるとよいかといった実際に学ぶ人の視点を意識した構成になっています。さらに付属の別冊(見開き完結型の演習問題と確認問題)でよりスキルアップを図ることができます。※別冊の演習問題の部分のみを、技術評論社 書籍サポートページからダウンロードできます。講義編と合わせて実力アップにお役立てください。",
    url: "https://amzn.to/4iqa1Ts",
    category: "math",
    imageUrl: "https://m.media-amazon.com/images/I/61iSCu6ZqJL._SY342_.jpg",
  },
  {
    id: "javascript-introduction-3rd-edition",
    title:
      "改訂3版JavaScript本格入門　～モダンスタイルによる基礎から現場での応用まで",
    description:
      "累計100万部以上の技術書を送り出してきた著者の、日本で1番売れているJavaScriptの本が7年ぶりの大幅増補改訂。2010年の刊行から約100,000部の実績を誇るロングセラーを、ECMAScript 2022に対応した内容で200ページ増の大幅改訂。最新の基本文法から、開発に欠かせない応用トピックまで解説します。JavaScriptらしく書くために大切なオブジェクトの扱い方や、大規模開発でさらに実用的になったオブジェクト指向構文を学び、しっかりと動くプログラムの作り方を本質から理解できます。",
    url: "https://amzn.to/4isaIvw", // ここに実際のURLを挿入してください
    category: "programming",
    reccomeded: true,
    imageUrl: "https://m.media-amazon.com/images/I/71VxGM-VsLL._SY466_.jpg",
  },
  {
    id: "go-concurrency",
    title: "Go言語による並行処理",
    description:
      "シンプルな言語仕様と手厚い並行処理機能で多くのプログラマの心を捉えるGo言語。いまではサーバーサイドでのプログラミングやコンテナツールの実装言語など、さまざまな分野で活用されています。本書は、Goの並行処理の設計哲学、言語の機能、また実際のプログラミングテクニックや並行処理の使い方、システムに導入する際のベストプラクティスとパターン、その内部構造までを簡潔にまとめた書籍です。普段からGoでプログラミングをしているプログラマや、並行処理について学習したいプログラマが、新たな知識を身につけるのに良い一冊となるでしょう。",
    url: "https://amzn.to/3Vs6SsI", // ここに実際のURLを挿入してください
    imageUrl: "https://m.media-amazon.com/images/I/71Lz5b2SI4L._SY466_.jpg",

    category: "programming",
    reccomeded: true,
  },
  {
    id: "self-taught-programmer-python",
    title: "独学プログラマー Python言語の基本から仕事のやり方まで",
    description:
      "本書は「Pythonだけ」を学ぶ本ではありません。Pythonを使ってプログラミングを紹介していますが、伝えたい内容はPythonに限らない「プログラミング全般」の知識です。プログラマになるためのスキルを独学できる本であり、Pythonプログラミングの基本を学べるだけでなく、シェル、正規表現、パッケージ管理、バージョン管理、データ構造、アルゴリズム、仕事の始め方・やり方など、プログラマとして必要なスキルもひと通り学べます。著者のコーリー・アルソフ氏による独学の経験に基づいた実践的なアドバイスが豊富に盛り込まれており、プログラミングを独学で身につけたい方やプロを目指す方に最適な一冊です。",
    url: "https://amzn.to/49xjVi3", // ここに実際のURLを挿入してください
    category: "programming",
    reccomeded: true,
    imageUrl: "https://m.media-amazon.com/images/I/71ZpZY+xd5S._SY342_.jpg",
  },
  {
    id: "world-class-engineer-thinking-method",
    title: "世界一流エンジニアの思考法",
    description:
      "米マイクロソフトの現役ソフトウェアエンジニアが、超巨大クラウドの開発最前線で学んだ思考法を紹介する一流エンジニアのマインドセット。試行錯誤の重要性、価値の最大化、効率的なコミュニケーションなど、生産性を向上させ、幸せに働くための実践的な技術と哲学が満載です。",
    url: "https://amzn.to/41ot2zB", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81RO+wECc0L._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "web-technology-introduction-new-edition",
    title: "改訂新版］プロになるためのWeb技術入門",
    description:
      "Web技術を根本から理解。これ1冊で基礎の基礎から応用まで実践力が身につく！なぜWebシステムをうまく作ることができないのか？――本書は2010年に初版が発行されました。Webに携わるエンジニアだけでなく、Webマーケティング担当者にいたるまでWebの仕組みを根本から理解するための技術書として多くの方々に利用されました。それから10数年の月日が流れ、本書の特徴である技術の根本をていねいに解説するスタイルはそのままにアップデートを図りました。最新のWeb技術を取り入れて全面改訂です。さらに技術を学ぶ上でのさまざまな悩みを解消し、エンジニアとして成長していく手がかりをふんだんに盛り込みました。もちろんサンプルアプリケーションプログラムを試しながら理解を深めていく工夫もしています。本書によって本質をとらえるプロの技術力も得てください。",
    url: "https://amzn.to/3ZHievf", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/61whkFViA5L._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "good-vs-bad-code-design-introduction",
    title:
      "改訂新版　良いコード／悪いコードで学ぶ設計入門 ―保守しやすい　成長し続けるコードの書き方",
    description:
      "「あるべき構造」を知り、ソフトウェア開発の問題に立ち向かおう。本書は、より成長させやすいコードの書き方と設計を学ぶ入門書です。筆者の経験をふまえ構成や解説内容を見直し、より実践的な一冊になりました。システム開発では、ソフトウェアの変更が難しくなる事態が頻発します。コードの可読性が低く調査に時間がかかる、コードの影響範囲が不明で変更すると動かなくなる、新機能を追加したいがどこに実装すればいいかわからない......。変更しづらいコードは、成長できないコードです。ビジネスの進化への追随や、機能の改善が難しくなります。成長できないコードの問題を、設計で解決します。",
    url: "https://amzn.to/4g3jqPp", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81uCm6qpj7L._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "sukkiri-python-introduction-2nd-edition",
    title: "スッキリわかるPython入門 第2版 (スッキリわかる入門シリーズ)",
    description:
      "シリーズ累計90万部突破の大人気入門書の改訂版！初心者でもすぐにプログラミングを習得できる3つのコンセプトに基づき、Pythonの基本から実践的なコーディング力までを丁寧に解説。プログラミング環境の準備やエラー解決の方法、基礎文法の理解に加え、機械学習やWebアプリケーション開発への応用知識も網羅。実践的なゲーム開発の総合演習を通じて、確かな実力を身につけることができます。",
    url: "https://amzn.to/49CmDmI", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/71jt9BEXU-L._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "html-css-web-design-introduction-2nd-edition",
    title:
      "Amazon.co.jp限定】1冊ですべて身につくHTML & CSSとWebデザイン入門講座［第2版］ （DL特典：Webデザイナーのポートフォリオの作り方入門講座） (１冊ですべて身につく)",
    description:
      "この商品はセット買いができます。HTML & CSSとWebデザイン入門［第2版］＆実践講座 2冊セット こちらをチェック。2019-2024年、5年連続、売上第1位！シリーズ累計40万部突破の大ヒット! 全国の書店員がオススメする本 第1位 受賞（2019年度 CPU大賞）。Webサイト制作の決定版が最新情報をたくさん盛り込んで大リニューアル！Webサイト制作の決定版がリニューアル！今のWebサイトの作り方が一気に学べる！Web界隈やデザイナーに大人気！Web関連の情報やデザインについて記事が学べる『Webクリエイターボックス』の管理人、Manaによる渾身のHTML & CSSとWebデザインが学べる本。モバイルファースト、アニメーション、トレンドデザイン、HTML Living Standard、WebPなど最新の情報や5年間の間に更新された情報を多数追加！5年連続売上第1位、シリーズ累計40万部。知識ゼロから体系的に学べる！HTMLとCSSの基本。絶対に覚えておきたい技術！モバイルファースト、レスポンシブ、Flexbox、アニメーション。手を動かしながら学べる！プロの現場で役立つテクニック。コードの知識からデザインのことまで1冊ですべて学べる！WebクリエイターボックスのManaが教えるWebサイト制作の定番＆旬のスキル。この1冊で必要なことがすべて学べる！コードもデザインも全部学べる！初心者でもすぐにプログラミングを習得できる秘密は、3つのコンセプトにあり！【1】手軽に・つまずかずに、Pythonをはじめられる。初心者には難しいの「プログラミング環境の準備」。つまずかずに最初の一歩を踏み出せるよう、スマホやPCのWebブラウザでプログラミングができる「dokopy（ドコパイ）」を用意しました。また、陥りがちなトラブルには、巻末の「エラー解決・虎の巻」で対策できます。【2】「なぜ」「どうして」が必ずわかる。本書は、学習中に浮かび上がる「なぜ？」「どうしてこうなるの？」をスルーせずに、しっかり答えを出して次のテーマに進みます。この、シリーズに通底するスッキリ流解説によって、一歩一歩着実に理解を深めて、無駄なく短期間で知識を習得できます。【3】今後に活かせる「基礎」を学べる。本書では初心者が利用する機会が少ない文法と、必ず覚えておきたい文法を切り分けて紹介。未経験者が基礎をしっかりと身に付けるとともに、機械学習やWebアプリケーション開発といった専門分野へつながる知識を習得することができます。第2版では、令和の学習体験により適した、シンプルでスッキリとした紙面デザインへ全面的にリニューアルし、読みやすさ、使い勝手の向上を図っています。さらに、実践的なコーディング力を鍛える「ゲーム開発の総合演習」を追加。この演習を通して本書を何度も復習し、ゲームを完成することができれば、確かな実力が身に付きます。ぜひチャレンジしてみてください。本書を通じてPythonならびにプログラミングの楽しさを学び、新しい未来への道を拓いてみませんか。",
    url: "https://amzn.to/41v2X1V", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81BHtZPjuvL._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "vtuber-sapuu-teaches-python",
    title: "VTuberサプーが教える！　Python　初心者のコード／プロのコード",
    description:
      "自分のコードを改善したくなる！プロが実践する書きかた。「自分が書いたコードは、仕事で通用するか不安……」「動くものは作れる。そこからどう上達すればいい？」そんな悩みを抱えるあなたに、VTuberサプーがPythonでのコードの書きかたをお教えします！　本書は、コードの見た目の整えかたから、読みやすさ、シンプルさ、安全性……などを意識した「プロ」の知識とテクニックをまとめました。中の人のエンジニア経験から得た知見をもとに解説しているので、実際に現場でちゃんと役立つコードに改善できます。この1冊で、自分の書くコードをワンランクアップさせましょう！",
    url: "https://amzn.to/3Vt4zp6", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81vueolIx-L._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "code-ai-generative-ai-practical-introduction",
    title: "コード×AIーソフトウェア開発者のための生成AI実践入門",
    description:
      "エンジニアが生成AIを活用するための入門書。GitHub CopilotやChatGPTなど生成AIによるコード生成やコードリーデイング支援が流行っています。これらは破壊的なイノベーションで、いずれはすべての開発者や企業が導入するものです。ただ、現状では生成AI×コードを推進・導入している企業は多くはなく、さらに活用法については手探りの状況です。本書では生成AI×コードでなにができるか、どうすればよりよく活用できるかを解説します。しっかりと活用していくための知識と、現場で活用できる実践が身に付く必携の一冊です。",
    url: "https://amzn.to/3ZIKu0u", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/714KadFykuL._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "python-algorithms-textbook",
    title: "Pythonで学ぶアルゴリズムの教科書 一生モノの知識と技術を身につける",
    description:
      "本書はPythonを用い、ITエンジニアが身につけておくべき王道のアルゴリズムを手を動かしながら学べる入門書です。教育者として16年の教鞭経験と公式アプリ2000万DL超の開発実績を持つ廣瀬豪氏が、データ構造とアルゴリズムの学習を「一生モノの財産になる」という視点で解説。スタック、キュー、リスト、木、グラフなど基本的なデータ構造から、サーチ、ソート、ハッシュといった王道アルゴリズム、さらにユークリッドの互除法や最短経路問題などの応用技術までを網羅。サンプルプログラムは短めのコードを108個用意し、各行にコメントを付けて読解しやすく工夫されています。ゲームクリエイターとしての著者ならではの「アルゴリズムの見える化」も特徴で、資格試験や就職試験、大学や専門学校で情報処理を学ぶ方に最適な一冊です。",
    url: "https://amzn.to/4g4pNlC", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81pcgCg4YdL._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "html-css-web-design-beginner-book",
    title: "これだけで基本がしっかり身につく HTML/CSS&Webデザイン1冊目の本",
    description:
      "Webサイト制作をこれから学ぶ人へ最適な入門書。手を動かしながらHTML/CSSとWebデザインの基本を楽しく学べる構成で、初心者が必要な基礎知識をしっかりと身につけられます。Flexboxレイアウト、CSSグリッドレイアウト、レスポンシブデザイン、CSSアニメーションなど、実践的なスキルも習得可能。豊富な図解やイラスト、キャラクターガイド、補足動画など学習をサポートする特典も充実しており、Web制作の基礎から応用までを一冊でカバーします。",
    url: "https://amzn.to/3D0X9D5", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81tfCIhb3mL._SY522_.jpg",
    reccomeded: true,
  },
  {
    id: "amazon-co-jp-javascript-introduction-course",
    title:
      "【Amazon.co.jp 限定】1冊ですべて身につくJavaScript入門講座(DL特典:JavaScriptチートシート) (１冊ですべて身につく)",
    description:
      "ITエンジニアが選んだJavaScript入門講座。初心者に寄り添ったやさしい解説と最新のJavaScript技術、アニメーションやイベントの知識を網羅。プログラミングの基本から実装方法までを1冊で学び、Webサイトに動きやイベントを追加するスキルを習得できます。累計40万部突破の人気シリーズで、セット買いも可能です。",
    url: "https://amzn.to/4g2ZGLG", // ここに実際のURLを挿入してください
    category: "programming",
    imageUrl: "https://m.media-amazon.com/images/I/81KbmzH9wrL._SY522_.jpg",
    reccomeded: true,
  },
];
