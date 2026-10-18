import { motion } from "framer-motion";

const EXPERIENCE = [["2025.2〜現在", "セメントメーカー向け 統合基幹システム（ERP）", "7名・メンバー", "会計（月次確定・清算・仕訳）、購買（入出庫・在庫）、生産（出荷・電力管理）、販売（請求）、承認ワークフロー。5機能・50画面。基本設計〜保守・ヘルプデスク", "VB.NET, C#.NET, VBA, JavaScript, PL/SQL, Oracle 19c, PostgreSQL, ActiveReports, ComponentOne"], ["2025.2〜現在", "セメントメーカー向け 受払管理プロシージャ", "7名・メンバー", "受払順序の決定（トポロジカルソート）、受払・配賦処理、受払後処理。詳細設計〜保守", "T-SQL, SQL Server"], ["2025.2〜現在", "生産・人事・会計管理システム", "7名・メンバー", "月次・年次確定（会計）、工数・勤怠管理（人事）、納入指示・生産投入（生産）。詳細設計〜保守", "VB.NET, C#.NET, PL/SQL, Oracle 19c, PostgreSQL"], ["2025.2〜現在", "ベアリングメーカー向け 生産管理システム", "7名・メンバー", "生産計画、生産負荷管理、在庫管理。詳細設計〜保守", "C#.NET, Blazor, JavaScript, PL/SQL, Oracle 19c, PostgreSQL, MySQL"], ["2025.2〜現在", "鉄道・交通インフラ関連企業向け イベント抽選システム", "7名・メンバー", "抽選機能、抽選結果管理。詳細設計〜保守", "VB.NET, C#.NET, JavaScript, PostgreSQL"], ["2024.8〜2024.12", "大手重工業メーカー 火力発電関連Webサイト改修・機能追加", "18名・メンバー", "3機能・10画面。基本設計〜結合テスト。設計書作成、チームの成果管理用マクロツールの作成", "C#.NET, JavaScript, Python, VBA, SQL Server"], ["2023.9〜2024.7", "官公庁（消防）システム改修", "20名・メンバー", "10機能・100画面。要件定義、基本設計、画面修正。設計書作成、成果管理用マクロツールの作成", "VB.NET, VBA, HiRDB"]];
const TIMELINE = ["2013.3 成均館大学 人文科学部 入学", "2016.3〜2017.3 日本・ドイツに留学", "2019.4〜2021.6 韓国・昌原市 区役所（住民登録・福祉関連業務）", "2021.2 成均館大学 人文科学部 哲学専攻 卒業", "2021.10〜2022.4 Java・Spring 実務者養成課程 受講", "2022.12〜2023.7 Java・ビッグデータ開発者研修課程 受講", "2023.3 韓国放送通信大学校 コンピュータ科学科 編入学", "2023.7〜2024.12 キャル株式会社（官公庁・電力関連のシステム改修）", "2025.2〜現在 株式会社HAL（製造業向けERP・生産管理システム）", "2026.2 韓国放送通信大学校 コンピュータ科学科 卒業"];
const QUALIFICATIONS = ["日本語能力試験 JLPT N1（2020年）", "TOEIC L&R 920点（2024年）", "普通自動車第一種運転免許（2025年）", "言語：韓国語（母語）、日本語（ビジネスレベル）、英語"];
const HEADERS = ["期間", "案件", "体制・役割", "担当内容", "技術"];
const ExperienceSection = () => <>
  <section id="experience" className="portfolio-section">
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}}>
      <h2 className="section-title">業務実績</h2>
      <div className="hidden lg:block">
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <colgroup><col className="w-[12%]" /><col className="w-[22%]" /><col className="w-[12%]" /><col className="w-[32%]" /><col className="w-[22%]" /></colgroup>
          <thead className="border-y border-border bg-muted text-primary"><tr>{HEADERS.map(header => <th key={header} scope="col" className="p-3 font-semibold">{header}</th>)}</tr></thead>
          <tbody>{EXPERIENCE.map(row => <tr key={row[1]} className="border-b border-border align-top">{row.map((cell,index) => index === 1 ? <th scope="row" key={index} className="break-words p-3 font-medium">{cell}</th> : <td key={index} className="break-words p-3 text-muted-foreground">{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <div className="space-y-5 lg:hidden">{EXPERIENCE.map(row => <article key={row[1]} className="rounded-lg border border-border bg-card p-5"><p className="mb-2 text-sm font-medium text-accent">{row[0]}</p><h3 className="mb-4 text-lg font-semibold">{row[1]}</h3><dl className="space-y-4">{[2,3,4].map(index => <div key={index}><dt className="mb-1 text-xs font-semibold text-primary">{HEADERS[index]}</dt><dd className="break-words text-sm text-muted-foreground">{row[index]}</dd></div>)}</dl></article>)}</div>
      <p className="mt-5 text-sm text-muted-foreground">※2025年2月以降の案件は並行して担当しています。</p>
    </motion.div>
  </section>
  <section id="career" className="portfolio-section">
    <h2 className="section-title">経歴</h2>
    <ol className="ml-2 border-l border-border">{TIMELINE.map(item => {
      const split = item.indexOf(" ");
      return <motion.li key={item} initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}} className="relative pb-8 pl-7 last:pb-0"><span className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-accent" /><div className="grid gap-1 sm:grid-cols-[190px_1fr] sm:gap-5"><span className="text-sm font-medium text-primary">{item.slice(0,split)}</span><p className="text-sm text-muted-foreground sm:text-base">{item.slice(split+1)}</p></div></motion.li>;
    })}</ol>
  </section>
  <section id="qualifications" className="portfolio-section">
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}}><h2 className="section-title">資格・語学</h2><ul className="divide-y divide-border border-y border-border">{QUALIFICATIONS.map(item => <li key={item} className="py-4 text-sm sm:text-base">{item}</li>)}</ul></motion.div>
  </section>
</>;
export default ExperienceSection;
