export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "general" | "info" | "math" | "stats";
  imageUrl?: string; // 画像URLをオプショナルで追加
};

export const resources: Resource[] = [
  {
    id: "stats-course",
    title: "Online Statistics Course",
    description: "Basic to advanced statistics tutorials.",
    url: "https://stattrek.com/",
    category: "stats",
  },
  {
    id: "datacamp-stats",
    title: "DataCamp Statistics",
    description: "Interactive courses in statistics and data analysis.",
    url: "https://www.datacamp.com/",
    category: "stats",
  },
  {
    id: "general-learning",
    title: "OpenLearn",
    description: "General learning resources from the Open University.",
    url: "https://www.open.edu/openlearn/",
    category: "general",
  },
  {
    id: "readable-code",
    title:
      "リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック",
    description:
      "コードを読みやすく理解しやすくするための実践的なテクニックを紹介する書籍。変数名やコメントの書き方、制御フローやロジックの整理、テスト記述など、コード品質向上のためのノウハウが詰まっている。",
    url: "https://amzn.to/49v6LSF",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/81+3DpjuMdL._SY522_.jpg",
  },
  {
    id: "the-pragmatic-programmer",
    title: "達人プログラマー(第2版): 熟達に向けたあなたの旅",
    description:
      "より良いプログラマになるための実践的アプローチを解説した書籍。アジャイルソフトウェア開発手法の先駆者による執筆で、経験を積み、生産性を高め、ソフトウェア開発全体を深く理解するためのノウハウがまとめられている。入門者からベテランまで、読み返すたびに新たな発見がある一冊。",
    url: "https://amzn.to/3ZJ6dWh",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/816iLrKIvcL._SL1419_.jpg",
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
  },
  {
    id: "zero-deep-learning",
    title:
      "ゼロから作るDeep Learning ―Pythonで学ぶディープラーニングの理論と実装",
    description:
      'ディープラーニングの本格的な入門書。外部のライブラリに頼らずに、Python 3によってゼロからディープラーニングを作ることで、ディープラーニングの原理を楽しく学びます。ディープラーニングやニューラルネットワークの基礎だけでなく、誤差逆伝播法や畳み込みニューラルネットワークなども実装レベルで理解できます。ハイパーパラメータの決め方や重みの初期値といった実践的なテクニック、Batch NormalizationやDropout、Adamといった最近のトレンド、自動運転や画像生成、強化学習などの応用例、さらには、なぜディープラーニングは優れているのか?なぜ層を深くすると認識精度がよくなるのか?といった“Why"に関する問題も取り上げます。',
    url: "https://amzn.to/4gqiepa",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/91exSUPsr6L._SY466_.jpg",
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
];
