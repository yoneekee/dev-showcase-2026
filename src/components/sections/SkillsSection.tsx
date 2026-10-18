import { motion } from "framer-motion";
import { ListChecks, Layers, Database } from "lucide-react";

const STRENGTHS = [
  { icon: ListChecks, title: "要件を具体化する力", text: "顧客の抽象的な要望や業務背景を把握し、例外ケースまで整理したうえで仕様に落とし込みます。早い段階で認識をそろえ、手戻りを防ぎます。" },
  { icon: Layers, title: "一貫した開発経験", text: "要件定義・基本設計から製造、テスト、運用保守、ヘルプデスクまで担当してきました。問い合わせ対応で得た利用者の視点を、次の設計に活かしています。" },
  { icon: Database, title: "業務ロジックへの理解", text: "生産・在庫・受払・会計（月次・年次確定、仕訳）など、業務ロジックに踏み込んだ開発を得意としています。" },
];
const SKILLS = [
  { label: "言語", items: ["C#.NET 3年3ヶ月", "VB.NET 3年3ヶ月", "JavaScript 3年3ヶ月", "VBA 3年3ヶ月", "PL/SQL・T-SQL 2年2ヶ月", "PowerShell・バッチ 2年2ヶ月", "HTML/CSS", "Python（案件で使用）"] },
  { label: "DB", items: ["SQL Server 3年3ヶ月", "Oracle 2年6ヶ月", "PostgreSQL 2年6ヶ月", "MySQL 2年6ヶ月", "HiRDB 0年11ヶ月"] },
  { label: "フレームワーク・環境", items: [".NET 3年3ヶ月", "Blazor 2年6ヶ月", "Visual Studio 3年3ヶ月", "Windows"] },
  { label: "ツール", items: ["ActiveReports", "ComponentOne", "ExcelCreator"] },
  { label: "個人制作で使用", items: ["React", "TypeScript", "Tailwind CSS", "Vitest"] },
];
const SkillsSection = () => <>
  <section id="strengths" className="portfolio-section">
    <h2 className="section-title">強み</h2>
    <div className="grid gap-5 md:grid-cols-3">{STRENGTHS.map(({icon: Icon, title, text}) => <motion.article key={title} initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}} className="rounded-lg border border-border bg-card p-6"><Icon className="mb-5 h-6 w-6 text-accent" /><h3 className="mb-3 text-lg font-semibold">{title}</h3><p className="text-sm text-muted-foreground">{text}</p></motion.article>)}</div>
  </section>
  <section id="skills" className="portfolio-section">
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}}>
      <h2 className="section-title mb-2">スキル</h2><p className="mb-8 text-sm text-muted-foreground">2026年10月時点の実務経験</p>
      <dl className="divide-y divide-border border-y border-border">{SKILLS.map(skill => <div key={skill.label} className="grid gap-4 py-6 md:grid-cols-[220px_1fr]"><dt className="font-semibold text-primary">{skill.label}</dt><dd><ul className="flex flex-wrap gap-x-6 gap-y-2">{skill.items.map(item => <li key={item} className="text-sm text-muted-foreground">{item}</li>)}</ul></dd></div>)}</dl>
    </motion.div>
  </section>
</>;
export default SkillsSection;
