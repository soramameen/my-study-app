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
    id: "react-docs",
    title: "React Official Documentation",
    description:
      "Official docs for React, covering fundamentals and advanced topics.",
    url: "https://react.dev/",
    category: "info",
  },
  {
    id: "mdn-js",
    title: "MDN Web Docs - JavaScript",
    description:
      "Comprehensive documentation and guides for JavaScript by Mozilla.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "info",
  },
  {
    id: "typescript-handbook",
    title: "TypeScript Handbook",
    description: "Official TypeScript handbook by Microsoft.",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    category: "info",
  },
  {
    id: "khan-academy-math",
    title: "Khan Academy Math",
    description: "Free math lessons and exercises.",
    url: "https://www.khanacademy.org/math",
    category: "math",
  },
  {
    id: "mathworld",
    title: "MathWorld",
    description: "Comprehensive and interactive mathematics encyclopedia.",
    url: "http://mathworld.wolfram.com/",
    category: "math",
  },
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
    url: "https://www.amazon.co.jp/dp/4873115655",
    category: "info",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    id: "the-pragmatic-programmer",
    title: "達人プログラマー(第2版): 熟達に向けたあなたの旅",
    description:
      "より良いプログラマになるための実践的アプローチを解説した書籍。アジャイルソフトウェア開発手法の先駆者による執筆で、経験を積み、生産性を高め、ソフトウェア開発全体を深く理解するためのノウハウがまとめられている。入門者からベテランまで、読み返すたびに新たな発見がある一冊。",
    url: "https://www.amazon.co.jp/dp/4295009656",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/816iLrKIvcL._SL1419_.jpg",
  },
  {
    id: "network-why-connect",
    title:
      "ネットワークはなぜつながるのか 第2版 知っておきたいTCP/IP、LAN、光ファイバの基礎知識",
    description:
      "ブラウザにURLを入力してからWebページが表示されるまでの道筋をたどりながら、その裏側で働くTCP/IP、LAN、光ファイバなどの技術を説明していきます。インターネットを通ってサーバーまで行って帰ってくる道筋の途中には、今のネットワークの主要な技術要素が全部あります。そこでの機器やソフトウエアがどのように動き連携しているのかを探検すればネットワーク全体の動きがわかります。第2版では、全体の構成を見直し、探検の途中で、今、ネットワークのどの部分にいるのかを明確にしました。また、各技術の基本的な考え方や成り立ちなど、基礎的な解説を大幅に増やしたほか、個別の補足説明も注釈として多く取り入れています。大事な点は「要約」としてまとめ、読んで記憶に残るようにしました。初心者の方も、基本的なところからきちんと理解して読み進めてもらえます。\n\n特徴1：ネットワークの全体の動きがわかる“探検ツアー”\n本書は、ブラウザにURLを入力してから、サーバーがWebページの情報を返信してくるまでの過程を順番に追っていくというユニークな構成です。入力されたデータがパケットとなって、LAN、ハブ、ルーターを通り、プロバイダの回線を抜け、ファイアウォールをくぐり、次の行き先を探りながらゴールのWebサーバーを目指して、さまざまに姿を変えながら進んでいく様子を追うことで、個別技術を見ているだけではわからない、“現実の”動きがわかります。\n\n特徴2：２大技術TCP/IP、LANが確実に理解できる！\nIPアドレス、ネットマスク、デフォルト・ゲートウエイなどはパソコンのTCP/IPの設定で目にしますし、家庭内LANも普及してMACアドレスという言葉も身近になりました。「イメージとしてはなんとなくわかる」これらの用語が、現実の機器とソフトウエアがどうように動くかを知ることで、本質からきちんと理解できます。\n\n特徴3：最先端の光ファイバの中身ものぞいてみよう！\nインターネットの普及で、家庭とプロバイダをつなぐアクセス回線の技術も進んでいます。ADSLでの信号化の技術や伝送方法、光ファイバが高速化できている仕組みなどをくわしく解説しています。",
    url: "https://www.amazon.co.jp/dp/4295009208",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/81sBKxze5ML._SY466_.jpg",
  },
  {
    id: "zero-deep-learning",
    title:
      "ゼロから作るDeep Learning ―Pythonで学ぶディープラーニングの理論と実装",
    description:
      'ディープラーニングの本格的な入門書。外部のライブラリに頼らずに、Python 3によってゼロからディープラーニングを作ることで、ディープラーニングの原理を楽しく学びます。ディープラーニングやニューラルネットワークの基礎だけでなく、誤差逆伝播法や畳み込みニューラルネットワークなども実装レベルで理解できます。ハイパーパラメータの決め方や重みの初期値といった実践的なテクニック、Batch NormalizationやDropout、Adamといった最近のトレンド、自動運転や画像生成、強化学習などの応用例、さらには、なぜディープラーニングは優れているのか?なぜ層を深くすると認識精度がよくなるのか?といった“Why"に関する問題も取り上げます。',
    url: "https://www.amazon.co.jp/dp/4873117584",
    category: "info",
    imageUrl: "https://m.media-amazon.com/images/I/91exSUPsr6L._SY466_.jpg",
  },
];
